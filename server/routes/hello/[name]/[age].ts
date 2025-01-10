export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');
  const age = getRouterParam(event, 'age');

  return `Hello ${name}!!! You looks like ${age} years old. ;)`;
});
