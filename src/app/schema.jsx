/**
 * SEO Schema.org JSON-LD Component
 * Adds structured data for search engines
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Silvina Staniszewski',
    url: 'https://silvina-portfolio.vercel.app',
    image: 'https://silvina-portfolio.vercel.app/opengraph-image.png',
    description:
      'Full-stack web developer and QA automation engineer with expertise in Next.js, React, Selenium, and Playwright.',
    jobTitle: ['Web Developer', 'QA Automation Engineer'],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://github.com/SilviStani',
      'https://linkedin.com/in/silvina',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['es', 'en'],
      url: 'https://wa.me/5491163632288',
    },
    skills: [
      'JavaScript',
      'React',
      'Next.js',
      'SCSS',
      'Selenium',
      'Playwright',
      'QA Automation',
      'Web Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema
 * Adds search action capability
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://silvina-portfolio.vercel.app',
    name: 'Silvina.Dev',
    description:
      'Portfolio of Silvina Staniszewski - Web Developer & QA Automation Engineer',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
