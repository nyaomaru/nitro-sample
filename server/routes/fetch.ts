import type { Repo } from '~/types';
import { templates } from '@/templates/helpers';

export default defineEventHandler(async (event) => {
  const data = await $fetch<Repo[]>('https://ungh.cc/orgs/unjs/repos');

  const template = await layoutTemplateLoader();

  const html = template.replace(templates.title, 'Fetch').replace(
    templates.content,
    `
      <h1>Fetch</h1>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    `
  );

  return html;
});
