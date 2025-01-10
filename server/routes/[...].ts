export default defineEventHandler((event) => {
  const url = getRequestURL(event);

  return `This page is not created yet ${url}`;
});
