export default defineEventHandler(async (event) => {
  const userId = event.path.replace('/api/users/', '');

  return `User profile ${userId}`;
});
