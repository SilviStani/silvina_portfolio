import { contact, dictionaries, type Locale } from '@/lib/i18n';
import { featuredProjects } from '@/lib/projects';
import { Arrow, Botanical, Check, ServiceIcon } from './icons';
import { HeroVisual } from './hero-visual';
import { ProjectGallery } from './project-gallery';

export function Home({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const qaHref = `mailto:${contact.email}?subject=${encodeURIComponent(t.contact.qaSubject)}`;
  const webHref = `${contact.whatsapp}?text=${encodeURIComponent(t.contact.devMessage)}`;
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-flower" aria-hidden="true">
              ✳
            </span>
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {t.hero.before}
            <em className="underlined">{t.hero.highlight}</em>
            {t.hero.after}
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="button-row">
            <a className="button primary" href="#work">
              {t.hero.primary}
              <Arrow />
            </a>
            <a className="button secondary" href="#contact">
              {t.hero.secondary}
              <Arrow diagonal />
            </a>
          </div>
          <p className="location-note">
            <span aria-hidden="true">◎</span>
            {t.hero.note}
          </p>
        </div>
        <HeroVisual locale={locale} />
      </section>
      <section className="impact-strip" aria-label={t.impact.label}>
        <div className="container">
          <p className="eyebrow">{t.impact.label}</p>
          <dl className="impact-grid">
            {['100%', '40%', '≈35%', '4+'].map((value, index) => (
              <div key={value}>
                <dt>{t.impact.items[index]}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section
        className="services section container"
        id="services"
        aria-labelledby="services-title"
      >
        <header className="section-heading" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title">
            {t.services.title}
            <br />
            <em>{t.services.italic}</em>
          </h2>
          <p>{t.services.intro}</p>
        </header>
        <div className="service-grid">
          {[
            {
              kind: 'qa' as const,
              number: '01',
              title: t.services.qaTitle,
              description: t.services.qaDescription,
              items: t.services.qaItems,
              cta: t.services.qaCta,
              href: qaHref,
            },
            {
              kind: 'web' as const,
              number: '02',
              title: t.services.devTitle,
              description: t.services.devDescription,
              items: t.services.devItems,
              cta: t.services.devCta,
              href: webHref,
            },
          ].map((service) => (
            <article
              className={`service-card service-${service.kind}`}
              key={service.kind}
              data-reveal
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <ServiceIcon kind={service.kind} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="text-link" href={service.href}>
                {service.cta}
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="work-section section" id="work" aria-labelledby="work-title">
        <div className="container">
          <header className="section-heading work-heading" data-reveal>
            <div>
              <p className="eyebrow">{t.projects.eyebrow}</p>
              <h2 id="work-title">
                {t.projects.title} <em>{t.projects.italic}</em>
              </h2>
            </div>
            <p>{t.projects.intro}</p>
          </header>
          <ProjectGallery locale={locale} projects={featuredProjects} />
          <div className="all-projects">
            <a className="button secondary" href={`/${locale}/projects`}>
              {t.projects.more}
              <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="about-section section container" id="about" aria-labelledby="about-title">
        <div className="about-art" data-reveal>
          <div className="about-art-ring" />
          <Botanical className="about-botanical" />
          <span className="about-art-star" aria-hidden="true">
            ✳
          </span>
          <div className="about-monogram" aria-hidden="true">
            S<span>.</span>
          </div>
          <p className="about-signature">Silvina Staniszewski</p>
          <p className="about-art-caption">{t.about.experience}</p>
          <div className="about-location">
            <span className="status-dot" />
            {t.about.location}
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title">
            {t.about.title}
            <br />
            <em>{t.about.italic}</em>
          </h2>
          <h3>{t.about.intro}</h3>
          <p>{t.about.description}</p>
          <p>{t.about.detail}</p>
          <ul className="about-values">
            {t.about.values.map((value) => (
              <li key={value}>
                <Check />
                {value}
              </li>
            ))}
          </ul>
          <p className="personal-note">{t.about.signature}</p>
        </div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 id="contact-title">
              {t.contact.title}
              <br />
              <em>{t.contact.italic}</em>
            </h2>
            <p>{t.contact.intro}</p>
          </header>
          <div className="contact-grid">
            <article data-reveal>
              <ServiceIcon kind="qa" />
              <h3>{t.contact.qaTitle}</h3>
              <p>{t.contact.qaText}</p>
              <a className="button primary" href={qaHref}>
                {t.contact.qaCta}
                <Arrow diagonal />
              </a>
            </article>
            <article data-reveal>
              <ServiceIcon kind="web" />
              <h3>{t.contact.devTitle}</h3>
              <p>{t.contact.devText}</p>
              <a
                className="button secondary"
                href={webHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.devCta}
                <Arrow diagonal />
              </a>
            </article>
          </div>
          <p className="direct-email">
            {t.contact.email}{' '}
            <a href={`mailto:${contact.email}`}>
              {contact.email}
              <Arrow diagonal />
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
