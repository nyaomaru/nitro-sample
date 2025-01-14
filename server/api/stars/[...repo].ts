export default defineEventHandler(async (event) => {
  const repo = event.context.params.repo;
  const stars = await cachedGHStars(event, repo).catch(() => 0);

  return { repo, stars };
});
