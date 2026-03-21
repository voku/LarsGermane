import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, '.', '');
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const basePath =
    env.VITE_BASE_URL ||
    (command === 'build' && process.env.GITHUB_ACTIONS === 'true' && repositoryName
      ? `/${repositoryName}/`
      : '/');

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
