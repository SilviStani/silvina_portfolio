import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('first visit defaults to English; Spanish persists across reloads and a restored browser session', async ({
  browser,
}) => {
  const context = await browser.newContext({ locale: 'es-AR' });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('http://127.0.0.1:4174/');
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Turning ideas into reliable digital experiences.'
  );
  await page.getByRole('link', { name: 'Español', exact: true }).click();
  await expect(page).toHaveURL(/\/es$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Transformando ideas en experiencias digitales confiables.'
  );
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await page.goto('http://127.0.0.1:4174/');
  await expect(page).toHaveURL(/\/es$/);
  const state = await context.storageState();
  const restored = await browser.newContext({ storageState: state });
  const returning = await restored.newPage();
  await returning.goto('http://127.0.0.1:4174/');
  await expect(returning).toHaveURL(/\/es$/);
  await returning.goto('http://127.0.0.1:4174/en');
  await expect(returning.locator('html')).toHaveAttribute('lang', 'en');
  await returning.goto('http://127.0.0.1:4174/');
  await expect(returning).toHaveURL(/\/en$/);
  expect(errors).toEqual([]);
  await restored.close();
  await context.close();
});

for (const locale of ['en', 'es']) {
  test(`${locale}: filters, project archive, navigation, contacts, and localized metadata`, async ({
    page,
  }) => {
    await page.goto(`/${locale}`);
    await expect(page.locator('.project-card')).toHaveCount(3);
    await page.getByTestId('filter-qa').click();
    await expect(page.locator('.project-card')).toHaveCount(1);
    await expect(page.getByTestId('project-pom-selenium')).toBeVisible();
    await page.getByTestId('filter-development').click();
    await expect(page.locator('.project-card')).toHaveCount(2);
    await page.getByTestId('filter-all').click();
    await expect(page.locator('.project-card')).toHaveCount(3);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://silvina-portfolio.vercel.app/${locale}`
    );
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      'content',
      locale === 'es' ? 'es_AR' : 'en_US'
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    const anchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')!.slice(1)));
    for (const id of anchors) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
    await expect(page.locator('.contact-grid a[href^="mailto:"]')).toHaveAttribute(
      'href',
      /silvina\.staniszewski@gmail\.com/
    );
    await expect(page.locator('.contact-grid a[href^="https://wa.me/"]')).toHaveAttribute(
      'href',
      /5491163632288/
    );
    await page.locator('.all-projects a').click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/projects$`));
    await expect(page.locator('.project-card')).toHaveCount(17);
    await page.getByTestId('filter-qa').click();
    await expect(page.locator('.project-card')).toHaveCount(3);
    await page.getByTestId('filter-development').click();
    await expect(page.locator('.project-card')).toHaveCount(14);
    await page.getByTestId('filter-all').click();
    const privateLink = page
      .getByTestId('project-ai-test-case-generator')
      .locator('a[href$="private-repo"]');
    await privateLink.click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/private-repo$`));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      locale === 'es' ? 'Este repositorio es privado.' : 'This repository is private.'
    );
    await page.goto(`/${locale}/projects`);
    await page
      .getByRole('link', { name: locale === 'es' ? 'English' : 'Español', exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`/${locale === 'es' ? 'en' : 'es'}/projects$`));
  });

  for (const width of [320, 375, 425, 768, 1024, 1440]) {
    test(`${locale}: responsive layout at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 950 });
      await page.goto(`/${locale}`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('.hero h1')).toBeVisible();
      await expect(page.locator('.hero .primary')).toBeVisible();
      expect(
        await page.evaluate(() => ({
          width: window.innerWidth,
          scroll: document.documentElement.scrollWidth,
          overflow: [...document.querySelectorAll('body *')]
            .filter((element) => element.getBoundingClientRect().right > window.innerWidth + 1)
            .map((element) => ({
              tag: element.tagName,
              class: element.className,
              right: element.getBoundingClientRect().right,
            })),
        }))
      ).toMatchObject({ width, scroll: width });
      if (width < 768) {
        const menu = page.locator('.menu-toggle');
        await expect(menu).toBeVisible();
        await expect(menu).toHaveAccessibleName(locale === 'es' ? 'Abrir menú' : 'Open menu');
        await menu.click();
        await expect(menu).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#navigation-menu a').first()).toBeFocused();
        await page.keyboard.press('Escape');
        await expect(menu).toHaveAttribute('aria-expanded', 'false');
        await expect(menu).toBeFocused();
        await menu.click();
        await page.locator('#navigation-menu a[href$="#about"]').click();
        await expect(menu).toHaveAttribute('aria-expanded', 'false');
        await expect(page).toHaveURL(/#about$/);
        await page.goto(`/${locale}`);
      }
      // Trigger below-the-fold reveals before collecting full-page evidence.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo({ top: y, behavior: 'instant' });
          await new Promise((resolve) => setTimeout(resolve, 45));
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
      await page.waitForTimeout(800);
      const brokenImages = await page.locator('img').evaluateAll((images) =>
        images
          .filter((image): image is HTMLImageElement => image instanceof HTMLImageElement)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.src)
      );
      expect(brokenImages).toEqual([]);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
      ).toBe(true);
      if (width === 375 || width === 1440)
        await page.screenshot({
          path: testInfo.outputPath(`${locale}-${width}.png`),
          fullPage: true,
        });
      await page.goto(`/${locale}/projects`);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
      ).toBe(true);
    });
  }

  test(`${locale}: WCAG AA automated accessibility checks`, async ({ page }) => {
    await page.goto(`/${locale}`);
    const home = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(home.violations).toEqual([]);
    await page.goto(`/${locale}/projects`);
    const archive = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(archive.violations).toEqual([]);
  });
}

test('server-rendered Spanish, old URLs, reduced motion, and keyboard access', async ({
  page,
  request,
}) => {
  const spanish = await request.get('/es');
  expect(await spanish.text()).toMatch(/<html[^>]+lang="es"/);
  const legacy = await request.get('/projects', { maxRedirects: 0 });
  expect(legacy.status()).toBe(307);
  const contact = await request.get('/contact', { maxRedirects: 0 });
  expect(contact.headers().location).toMatch(/\/contact|\/(en|es)#contact/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/en');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  expect(
    await page.locator('.qa-result').evaluate((element) => getComputedStyle(element).animationName)
  ).toBe('none');
  await page.goto('/es/missing-page');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Nos desviamos un poquito.');
});
