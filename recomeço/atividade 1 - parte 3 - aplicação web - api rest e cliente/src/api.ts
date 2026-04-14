import todo from "./core.ts";
import { serve } from "bun";


const server = serve({
  port: 3000, 
  
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/list") {
      const list = await todo.getItems();
      return new Response(JSON.stringify(list), { status: 200 });
    }
  
    if (url.pathname === "/add") {
      const item = url.searchParams.get("item");
      await todo.addItem(item);
      return new Response("Item added successfully", { status: 200 });
    }


    return new Response(`Oi querido! ${url.pathname}`, { status: 200 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);