const siteUrl = 'https://silvina-portfolio.vercel.app';
const contactUrl = `${siteUrl}/contact`;

export const metadata = {
  title: 'Contact | Silvina Dev - Get in Touch',
  description:
    'Connect with Silvina Staniszewski. Reach out via WhatsApp for web development or QA automation services.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Contact | Silvina Dev',
    description: 'Get in touch with Silvina for web development or QA services.',
    url: contactUrl,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
