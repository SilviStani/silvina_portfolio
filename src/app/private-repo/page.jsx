'use client';
import Link from 'next/link';

export default function PrivateRepository() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--fondo_negroazulado)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          fontSize: '4rem',
          marginBottom: '1rem',
        }}
      >
        🔒
      </div>
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'var(--fuxia)',
          lineHeight: '1.2',
        }}
      >
        Private Repository
      </h1>
      <h2
        style={{
          fontSize: '1.5rem',
          color: 'var(--texto_ppal)',
          fontWeight: '400',
        }}
      >
        This repository is private
      </h2>
      <p
        style={{
          color: 'var(--texto_muted)',
          maxWidth: '500px',
          lineHeight: '1.6',
          fontSize: '1.05rem',
        }}
      >
        This project is kept private to protect intellectual property and prevent code replication. 
        If you're interested in learning more about this project or collaborating, please feel free to contact me! 💼
      </p>
      <Link
        href="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--fuxia)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          border: '2px solid var(--fuxia)',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'var(--fuxia)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'var(--fuxia)';
          e.target.style.color = 'white';
        }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}
