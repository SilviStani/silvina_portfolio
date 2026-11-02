import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'next-env.d.ts', 'test-results/**', 'playwright-report/**']),
  // Original components are retained as an archive; the active app lives in src/.
  {
    files: ['Components/**/*.{js,jsx}'],
    rules: { 'react/no-unescaped-entities': 'off', '@next/next/no-img-element': 'off' },
  },
]);
