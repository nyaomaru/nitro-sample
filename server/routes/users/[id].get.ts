export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const data = await $fetch(`/api/users/${id}`);

  return data;
});
