export default eventHandler(async (event) => {
  const payload = { ...getQuery(event) };
  const { result } = await runTask('db:migrate', { payload });

  return { result };
});
