export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}
export function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
export function ServiceIcon({ kind }: { kind: 'qa' | 'web' }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'qa' ? (
        <>
          <path d="M16 3 27 7v8c0 7-11 14-11 14S5 22 5 15V7Z" />
          <path d="m10 15 4 4 8-9" />
        </>
      ) : (
        <>
          <rect x="3" y="5" width="26" height="22" rx="4" />
          <path d="M3 11h26m-18 5-4 4 4 3m10-7 4 4-4 3m-4-9-2 11" />
        </>
      )}
    </svg>
  );
}
export function Botanical({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 260" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M33 254C81 193 112 120 126 15M76 184C37 178 16 147 15 119c32 2 62 27 61 65ZM93 145c-35-17-48-43-41-72 31 16 42 39 41 72ZM111 96C84 73 80 41 94 19c21 23 27 47 17 77ZM62 209c35 8 66-7 85-35-33-10-68 6-85 35ZM92 151c34 1 61-19 70-48-32-2-60 20-70 48ZM114 89c30-6 48-30 49-57-28 6-47 28-49 57Z" />
      </g>
    </svg>
  );
}
