import { readFileSync } from 'fs';
import { resolve } from 'path';

const templateLoader = defineCachedFunction(async (templateName: string) => {
  return readFileSync(resolve(`./server/templates/${templateName}`), 'utf-8');
});

export const layoutTemplateLoader = defineCachedFunction(
  async () => {
    return templateLoader('layout.html');
  },
  { maxAge: 60, name: 'layout' }
);

export const websocketTemplateLoader = defineCachedFunction(
  async () => {
    return templateLoader('websocket.html');
  },
  { maxAge: 60, name: 'layout' }
);
