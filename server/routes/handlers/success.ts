export default defineEventHandler(async (event) => {
  const html = await useStorage('assets:templates').getItem('success.html');
  return html;
});
