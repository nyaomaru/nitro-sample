export default defineEventHandler(async () => {
  const db = useDatabase();

  await db.sql`DROP TABLE IF EXISTS users`;
  await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

  const userId = String(Math.round(Math.random() * 10_000));
  await db.sql`INSERT INTO users VALUES (${userId}, 'John', 'Doe', 'test@test.com')`;

  const { rows } = await db.sql`SELECT * FROM users WHERE id = ${userId}`;

  return {
    rows,
  };
});
