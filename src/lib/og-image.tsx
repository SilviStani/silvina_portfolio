import { ImageResponse } from 'next/og';
import { dictionaries, type Locale } from './i18n';
export function createOgImage(locale: Locale) {
  const t = dictionaries[locale].hero;
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#FFF9F8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '70px 85px',
        color: '#45136D',
        border: '18px solid #EBD9F7',
      }}
    >
      <div style={{ display: 'flex', fontSize: 32, marginBottom: 35 }}>Silvina.Dev</div>
      <div
        style={{ display: 'flex', fontSize: 66, lineHeight: 1.1, fontWeight: 700, maxWidth: 1000 }}
      >
        {t.before + t.highlight + t.after}
      </div>
      <div style={{ display: 'flex', marginTop: 35, fontSize: 23, color: '#7629A8' }}>
        {locale === 'es'
          ? 'Ingeniería de Calidad · Desarrollo Web'
          : 'Quality Engineering · Web Development'}
      </div>
      <div style={{ display: 'flex', marginTop: 25, fontSize: 18, color: '#6f6375' }}>
        Silvina Staniszewski · Argentina
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
