import { templates } from '@/templates/helpers';

export default defineEventHandler(async () => {
  const data = await useStorage('assets:server').getItem('data.json');

  const template = await layoutTemplateLoader();

  const html = template.replace(templates.title, `Assets`).replace(
    templates.content,
    `
      <h1>Assets</h1>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    `
  );

  return html;
});
