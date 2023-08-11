import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    css: false,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
});
