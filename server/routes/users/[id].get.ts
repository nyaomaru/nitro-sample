export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  return `User profile ${id}`;
});
