import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0f1a',
        padding: '60px',
        gap: '24px',
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span style={{ color: '#ec4899', fontSize: '52px', fontWeight: 700 }}>{'<'}</span>
        <span style={{ color: '#f9fafb', fontSize: '52px', fontWeight: 700 }}>Silvina.Dev</span>
        <span style={{ color: '#ec4899', fontSize: '52px', fontWeight: 700 }}>{'/>'}</span>
      </div>

      {/* Tagline */}
      <p
        style={{
          color: '#d1d5db',
          fontSize: '28px',
          textAlign: 'center',
          margin: 0,
          maxWidth: '800px',
        }}
      >
        Web Developer · QA Automation Engineer
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '12px',
        }}
      >
        {['Next.js', 'React', 'Selenium', 'Playwright'].map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: '#1e293b',
              color: '#f472b6',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '20px',
              border: '1px solid #ec4899',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* URL */}
      <p
        style={{
          color: '#9ca3af',
          fontSize: '20px',
          margin: 0,
          marginTop: '8px',
        }}
      >
        silvina-portfolio.vercel.app
      </p>
    </div>,
    { ...size }
  );
}
