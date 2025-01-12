//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-01-09',
  experimental: {
    asyncContext: true,
    websocket: true,
  },
  runtimeConfig: {
    session: {
      default: {
        name: 'my-session',
        password: 'my-password-for-default-session',
      },
    },
  },
  routeRules: {
    '/test/**': { swr: true },
    '/redirect': { redirect: '/test' },
    '/proxy/example': { proxy: 'https://example.com' },
  },
  storage: {
    db: {
      driver: 'fs',
      base: './data/db',
    },
  },
  devStorage: {
    db: {
      driver: 'fs',
      base: './data/db',
    },
  },
});
