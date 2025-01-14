export default defineCachedEventHandler(
  (event) => {
    const cacheTest = Math.random();
    return cacheTest;
  },
  { maxAge: 60 }
);
