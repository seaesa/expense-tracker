import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';
// support for legacy browser
import legacy from '@vitejs/plugin-legacy';
import { version } from './package.json';
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const rootPath = process.cwd();
  const env = loadEnv(mode, rootPath, '');
  return {
    // base
    appType: 'spa',
    base: '/',
    root: rootPath,
    publicDir: 'public',
    envPrefix: 'NO',
    cacheDir: 'node_modules/.vite',
    clearScreen: true,
    logLevel: 'info',
    // plungins for app
    plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    // config css
    css: {
      transformer: 'postcss',
      devSourcemap: false,
      preprocessorMaxWorkers: 0,
    },
    // define variable global
    define: {
      ROOTDIR: JSON.stringify(rootPath),
      VERSION: JSON.stringify(version),
    },
    // alias a path in during dev
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/app/components'),
        '@pages': path.resolve(__dirname, './src/app/pages'),
        '@layouts': path.resolve(__dirname, './src/app/layouts'),
      },
    },
    // config for development mode
    server: {
      host: '0.0.0.0',
      port: 8080,
      strictPort: false,
      cors: true,
      open: false,
      middlewareMode: false,
    },
    // config for preview production
    preview: {
      strictPort: true,
    },
    // config for production mode
    build: {
      outDir: 'build',
    },
  };
});
