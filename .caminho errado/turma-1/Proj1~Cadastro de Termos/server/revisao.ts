const server = Bun.serve({ 
  routes: {},
  fetch: req => new Response("Hello world", { status: 404 }),
});

console.log(`Server running at ${server.url}`);