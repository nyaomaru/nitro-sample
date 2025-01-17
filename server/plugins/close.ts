export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('close', async () => {
    console.log('Closing nitro server ...');
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log('Final task is done!');
  });
});
