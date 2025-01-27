type StorageTest = {
  hello: string;
};

import { templates } from '@/templates/helpers';

export default defineEventHandler(async (event) => {
  await useStorage().setItem('test:foo', { hello: 'world' });
  const storageTest1 = (await useStorage().getItem('test:foo')) as StorageTest;

  await useStorage('test').setItem('foo', { hello: 'next world' });
  const storageTest2 = (await useStorage().getItem('test:foo')) as StorageTest;

  const dataStorage = useStorage('data');
  await dataStorage.setItem('test', 'works');
  const storageTest3 = await dataStorage.getItem('test');

  await useStorage<StorageTest>('test').getItem('foo');
  const storageTest4 = await useStorage('test').getItem<StorageTest>('foo');

  const template = await layoutTemplateLoader();

  const html = template.replace(templates.title, '[dev] Storage test').replace(
    templates.content,
    `
      <h1>Storage test dev</h1>
      <section>
        <p>This is dev environment.</p>
        <p>Storage test1: ${storageTest1.hello}</p>
        <p>Storage test2: ${storageTest2.hello}</p>
        <p>Storage test3: ${storageTest3}</p>
        <p>Storage test4: ${storageTest4.hello}</p>
      </section>
    `
  );

  return html;
});
