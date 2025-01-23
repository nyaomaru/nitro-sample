export default defineEventHandler(async () => {
  const top = await useStorage('assets:templates').getItem('top.html');
  return top;
});
