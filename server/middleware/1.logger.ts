export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname.startsWith('/test')) {
    console.log('logger test');
  }
});
