export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello, ${name}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f3f4f6;
            color: #111827;
          }
          h1 {
            font-size: 2rem;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Hello, ${name}!</h1>
        </main>
      </body>
    </html>
  `;
});
