export default defineEventHandler(async () => {
  const data = await useStorage('assets:server').getItem('data.json');

  return data;
});
