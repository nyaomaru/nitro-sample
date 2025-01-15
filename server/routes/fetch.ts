import type { Repo } from '~/types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<Repo[]>('https://ungh.cc/orgs/unjs/repos');

  return data;
});
