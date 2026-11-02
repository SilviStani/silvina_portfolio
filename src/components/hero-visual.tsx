import Image from 'next/image';
import { dictionaries, type Locale } from '@/lib/i18n';
import { Botanical, Check } from './icons';
export function HeroVisual({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].hero;
  return (
    <figure className="hero-visual" aria-label={t.visualLabel}>
      <div className="lavender-orbit" />
      <div className="peach-orbit" />
      <div className="orbit-line" />
      <Botanical className="hero-botanical" />
      <span className="visual-spark spark-one" aria-hidden="true">
        ✧
      </span>
      <span className="visual-spark spark-two" aria-hidden="true">
        ✳
      </span>
      <div className="laptop">
        <div className="laptop-screen">
          <div className="browser-bar" aria-hidden="true">
            <span>•••</span>
            <span>Walter · Limpieza Tapizados</span>
            <span>↗</span>
          </div>
          <div className="laptop-image">
            <Image
              src="/assets/Walter-tapizados.png"
              alt={t.desktopAlt}
              fill
              sizes="(max-width: 767px) 85vw, 43vw"
              priority
            />
          </div>
        </div>
        <div className="laptop-base">
          <span />
        </div>
      </div>
      <div className="phone">
        <div className="phone-camera" />
        <Image
          src="/assets/walter-mobile.png"
          alt={t.mobileAlt}
          fill
          sizes="(max-width: 767px) 24vw, 140px"
          priority
        />
      </div>
      <div className="qa-result">
        <div className="qa-result-label">
          <span className="check-badge">
            <Check />
          </span>
          <span>{t.qaLabel}</span>
          <span className="status-dot" />
        </div>
        <div className="qa-result-value">
          <strong>
            100<span>%</span>
          </strong>
          <span>{t.qaMetric}</span>
        </div>
        <div className="qa-progress">
          <span />
        </div>
        <p>
          <Check />
          {t.qaDetail}
        </p>
      </div>
      <figcaption>
        {t.caption}
        <span aria-hidden="true"> ↗</span>
      </figcaption>
    </figure>
  );
}
