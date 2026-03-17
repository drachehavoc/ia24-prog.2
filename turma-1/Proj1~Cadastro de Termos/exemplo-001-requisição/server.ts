import index from "./index.html"

function getCurrentTimeBr() {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR")
}

const server = Bun.serve({
  routes: {
    "/": index,
    "/time": () => new Response(getCurrentTimeBr())
  }
})

console.log(`Server running: ${server.port} ${Date.now()}`)









// import { serve } from "bun";

// serve({
//   port: 3000,
//   fetch(request) {
//     const url = new URL(request.url);

//     if (url.pathname === "/teste") {
//       
//       return new Response(
//         ),
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }

//     return new Response("Not Found", { status: 404 });
//   },
// });

// console.log("Server running on http://localhost:3000");