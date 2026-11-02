import { dictionaries, contact, type Locale } from '@/lib/i18n';
import { Arrow } from './icons';
export function Footer({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].contact;
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <a href={`/${locale}`} className="wordmark">
          Silvina<span>.Dev</span>
        </a>
        <p>{t.footer}</p>
        <div className="social-links">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <Arrow diagonal />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
            <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Silvina Staniszewski. {t.rights}
        </p>
        <a href="#top">{t.top} ↑</a>
      </div>
    </footer>
  );
}
