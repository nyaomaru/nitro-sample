export default defineEventHandler((event) => {
  return `apiToken: ${useRuntimeConfig(event).apiToken}
    helloWorld: ${useRuntimeConfig(event).helloWorld}`;
});
