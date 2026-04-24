import todo from "./core.ts";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": new Response(Bun.file("./public/index.html")),
    "/api/exemplo": {
      GET: () => new Response(`Essse é o exemplo: ${Date.now()}`),
      
      POST: async (req) => {
        const data = await req.json() as any;
        data.recebidoEm = new Date().toLocaleDateString("pt-BR");
        return Response.json(data);
      },
    },

    "/api/exemplo/:id": {
      PUT: async (req) => {
        const { id } = req.params;
        const data = await req.json() as any;
        data.recebidoEm = new Date().toLocaleDateString("pt-BR");
        data.id = id;
        return Response.json(data);
      },

      PATCH: async (req) => {
        const { id } = req.params;
        const data = await req.json() as any;
        data.atualizadoEm = new Date().toLocaleDateString("pt-BR");
        data.id = id;
        // verificar quais dados foram enviados e atualizar somente esses campos
        data.camposAtualizados = Object.keys(data);
        return Response.json(data);
      },
      
      DELETE: async (req) => {
        const { id } = req.params;
        return new Response(`Recurso com id ${id} deletado!`, { status: 200 });
      },
    }
  },

  async fetch(req) {
    return new Response(`Not Found!`, { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);