const fliePath = 'items.json';

// CRUD - C - Create
async function addItemToList(item: string) {
  const file = Bun.file(fliePath);
  const content = await file.json();
  content.push(item);
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}

// CRUD - R - Read
async function readListFromFile() {
  const file = Bun.file(fliePath);
  const content = await file.json();
  return content;
}

// CRUD - U - Update
async function updateItemInList(index: number, newItem: string) { 
  const file = Bun.file(fliePath);
  const content = await file.json();
  content[index] = newItem;
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}

// CRUD - D - Delete
async function deleteItemFromList(index: number) {
  const file = Bun.file(fliePath);
  const content = await file.json();
  content.splice(index, 1);
  const newContent = JSON.stringify(content);
  await Bun.write(fliePath, newContent);
}



// await addItemToList('Novo item adicionado');
await deleteItemFromList(0);
console.log(await readListFromFile());