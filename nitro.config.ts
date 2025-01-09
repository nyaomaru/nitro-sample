//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-01-09',
  experimental: {
    asyncContext: true,
  },
  runtimeConfig: {
    session: {
      default: {
        name: 'my-session',
        password: 'my-password-for-default-session',
      },
    },
  },
});
