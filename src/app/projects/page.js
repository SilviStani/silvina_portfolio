import NavBar from '../../../Components/NavBar/NavBar';
import Portfolio from '../../../Components/Portfolio/Portfolio';

const siteUrl = 'https://silvina-portfolio.vercel.app';
const projectsUrl = `${siteUrl}/projects`;

export const metadata = {
  title: 'Projects & Portfolio | Silvina Dev - Web Developer & QA Automation',
  description:
    'Explore a collection of web development projects built with Next.js, React, and more. See QA automation expertise with Selenium and Playwright.',
  keywords: ['portfolio', 'projects', 'web development', 'QA automation', 'Next.js', 'React'],
  canonical: projectsUrl,
  openGraph: {
    title: 'Projects & Portfolio | Silvina Dev',
    description:
      'Explore a collection of web development projects built with Next.js, React, and more.',
    url: projectsUrl,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Silvina Dev - Projects Portfolio',
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <NavBar />
      <Portfolio />
    </main>
  );
}
