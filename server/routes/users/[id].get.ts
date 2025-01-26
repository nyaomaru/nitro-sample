import { templates } from '@/templates/helpers';
import { layoutTemplateLoader } from '@/utils/fileLoader';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const data = await $fetch(`/api/users/${id}`);

  const template = layoutTemplateLoader();

  const html = template.replace(templates.title, `User Data - ${id}`).replace(
    templates.content,
    `
      <h1>User Data for ID: ${id}</h1>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    `
  );

  return html;
});
