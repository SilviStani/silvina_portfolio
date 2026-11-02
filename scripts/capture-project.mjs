import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

// Capture the real, existing responsive project rather than fabricate a mobile design.
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  const response = await page.goto('https://limpieza-tapizados-walter.vercel.app', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  if (!response?.ok()) throw new Error(`Project returned ${response?.status()}`);
  await page.evaluate(() => document.fonts.ready);
  await mkdir('public/assets', { recursive: true });
  await page.screenshot({ path: 'public/assets/walter-mobile.png' });
  console.log(`Captured actual mobile project at ${page.url()}`);
} finally {
  await browser.close();
}
