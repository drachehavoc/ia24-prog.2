const fliePath = 'items.json';

// CRUD - C - Create
export async function createItem(item: string) {
  const file = Bun.file(fliePath);
  const content = await file.json();
  content.push(item);
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}

// CRUD - R - Read
export async function readItems() {
  const file = Bun.file(fliePath);
  const content = await file.json();
  return content;
}

// CRUD - U - Update
export async function updateItem(index: number, newItem: string) { 
  const file = Bun.file(fliePath);
  const content = await file.json();
  content[index] = newItem;
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}

// CRUD - D - Delete
export async function deleteItem(index: number) {
  const file = Bun.file(fliePath);
  const content = await file.json();
  content.splice(index, 1);
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}