import { readFileSync } from 'fs';
import { resolve } from 'path';

export const layoutTemplateLoader = () => {
  return readFileSync(resolve('./server/templates/layout.html'), 'utf-8');
};
