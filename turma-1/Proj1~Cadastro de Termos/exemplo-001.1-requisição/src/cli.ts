import * as todo from "./todo.js";

const command = process.argv[2];
const value = process.argv[3];

if (command === "read") {
  const items = await todo.loadItems();
  console.log("- "+items.join("\n- "));
  process.exit(0);
}