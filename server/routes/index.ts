export default defineEventHandler(async () => {
  const sum = useSum(1, 2);
  return { sum };
});
