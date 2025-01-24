import { readFileSync } from 'fs';
import { resolve } from 'path';
import { templates } from '@/templates/helpers';

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');

  const template = readFileSync(
    resolve('./server/templates/layout.html'),
    'utf-8'
  );

  const html = template
    .replace(templates.title, `Hello ${name}`)
    .replace(templates.content, `<h1>Hello, ${name}!</h1>`);

  return html;
});
