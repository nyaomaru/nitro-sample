import { templates } from '@/templates/helpers';
import { layoutTemplateLoader } from '@/utils/fileLoader';

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');

  const template = layoutTemplateLoader();

  const html = template
    .replace(templates.title, `Hello ${name}`)
    .replace(templates.content, `<h1>Hello, ${name}!</h1>`);

  return html;
});
