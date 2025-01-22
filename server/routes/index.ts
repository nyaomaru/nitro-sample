export default defineEventHandler(async () => {
  const sum = useSum(1, 2);
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Top Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import { createApp, reactive } from "https://esm.sh/petite-vue@0.4.1";

      const store = reactive({
        randomUserId: Math.floor(Math.random() * 1000),
        randomHelloValue: Math.random().toString(36).substring(2, 8),
      });

      createApp({ store }).mount();
    </script>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  <body class="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <main v-scope="{ store }" class="text-center">
      <h1 class="text-4xl font-bold mb-8">Welcome to Nitro sample top page</h1>
      <nav class="flex flex-col gap-4">
        <a
          href="/websocket"
          class="block w-64 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Go to WebSocket Page
        </a>
        <a
          :href="'/users/' + store.randomUserId"
          class="block w-64 mx-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Go to User Page (ID: {{ store.randomUserId }})
        </a>
        <a
          :href="'/hello/' + store.randomHelloValue"
          class="block w-64 mx-auto bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Say Hello (Value: {{ store.randomHelloValue }})
        </a>
      </nav>
    </main>
  </body>
</html>
`;
});
