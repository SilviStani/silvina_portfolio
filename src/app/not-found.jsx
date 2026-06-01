import Link from 'next/link';

export const metadata = {
  title: '404 – Página no encontrada | Silvina.Dev',
};

export default function NotFound() {
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
      <h1
        style={{
          fontSize: '8rem',
          fontWeight: '700',
          color: 'var(--fuxia)',
          lineHeight: '1',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: '1.5rem',
          color: 'var(--texto_ppal)',
          fontWeight: '400',
        }}
      >
        Esta página no existe
      </h2>
      <p
        style={{
          color: 'var(--texto_muted)',
          maxWidth: '400px',
          lineHeight: '1.6',
        }}
      >
        La ruta que buscás no fue encontrada. Puede que haya sido movida o el link esté mal escrito.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--fuxia)',
          color: 'var(--texto_ppal)',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'background-color 0.2s',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
