export default defineTask({
  meta: {
    name: 'cms:update',
    description: 'Run cms update',
  },
  run({ payload, context }) {
    console.log('Running cms update');
    return { result: 'Updated' };
  },
});
