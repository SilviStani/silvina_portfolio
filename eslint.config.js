import { defineConfig } from 'eslint-define-config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'warn',
      eqeqeq: ['error', 'always'],
      'no-implicit-coercion': 'error',

      // React specific
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',

      // Next.js specific
      '@next/next/no-html-link-for-pages': 'warn',
    },
  },
  prettier,
]);
