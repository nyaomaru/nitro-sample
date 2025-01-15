import { Repo } from '~/types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<Repo[]>('https://api.github.com/markdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      text: 'Hello **world**!',
    },
  });

  return data;
});
