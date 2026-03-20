import * as todo from "./todo.js";

const command = process.argv[2];
const value = process.argv[3];

if (command === "read") {
  const items = await todo.loadItems();
  console.log("- "+items.join("\n- "));
  process.exit(0);
}

if (command === "create") {
  if (!value) {
    console.error("Please provide an item to create.");
    process.exit(1);
  }
  await todo.saveItem(value);
  process.exit(0);
}

console.error("Unknown command. Use 'read' or 'create'.");
process.exit(1);