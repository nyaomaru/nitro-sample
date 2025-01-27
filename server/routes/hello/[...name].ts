import { templates } from '@/templates/helpers';

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name');

  const template = await layoutTemplateLoader();

  const html = template
    .replace(templates.title, `Hello ${name}`)
    .replace(templates.content, `<h1>Hello, ${name}!</h1>`);

  return html;
});
