import type { H3Event } from 'h3';

export const cachedGHStars = defineCachedFunction(
  async (event: H3Event, repo: string) => {
    const data: any = await $fetch(`https://api.github.com/repos/${repo}`);

    return data.stargazers_count;
  },
  {
    maxAge: 60 * 60,
    name: 'ghStars',
    getKey: (event: H3Event, repo: string) => repo,
  }
);
