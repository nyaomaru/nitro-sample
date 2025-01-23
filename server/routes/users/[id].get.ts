export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const data = await $fetch(`/api/users/${id}`);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Data - ${id}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 1rem;
            background-color: #f9fafb;
            color: #111827;
          }
          h1 {
            font-size: 1.5rem;
            color: #1f2937;
          }
          pre {
            background: #f3f4f6;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          code {
            font-family: "Courier New", Courier, monospace;
            font-size: 1rem;
            color: #374151;
          }
        </style>
      </head>
      <body>
        <h1>User Data for ID: ${id}</h1>
        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
      </body>
    </html>
  `;
});
