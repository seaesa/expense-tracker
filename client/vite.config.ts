import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejss.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const rootPath = process.cwd()
  const env = loadEnv(mode, `${rootPath}/env`, '')
  return {
    // base
    appType: 'spa',
    mode,
    base: '/',
    root: rootPath,
    publicDir: 'public',
    envDir: './env',
    envPrefix: 'NO',
    cacheDir: 'node_modules/.vite',
    clearScreen: true,
    logLevel: 'info',
    // plungins for app
    plugins: [
      react()
    ],
    // config css
    css: {
      transformer: 'postcss',
      devSourcemap: false,
      preprocessorMaxWorkers: 0
    },
    // define variable global
    define: {
    },
    // alias a path in during dev
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      preserveSymlinks: false,
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext']
    },
    // config json file
    json: {
      namedExports: true,
      stringify: false
    },
    // config for development mode
    server: {
      host: '0.0.0.0',
      port: +env.NO_PORT,
      strictPort: false,
      cors: true,
      open: false,
      middlewareMode: false,
      origin: `http://127.0.0.1:${env.NO_PORT}`,
    },
    // config for preview production
    preview: {
      strictPort: true,
    },
    // config for production mode
    build: {
      outDir: 'build'
    },
  }
})
