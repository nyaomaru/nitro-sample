import { templates } from '@/templates/helpers';
import { Navigation } from '@/templates/components/Navigation';

export default defineEventHandler(async () => {
  const topTemplate = await useStorage('assets:templates').getItem('top.html');

  if (typeof topTemplate !== 'string') {
    throw new Error('Template must be a string');
  }

  const top = topTemplate.replace(templates.navigation, Navigation());

  return top;
});
