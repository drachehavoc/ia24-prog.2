// ----------------------------------------------------------------------------
// --- Funções auxiliares                                                   ---
// ----------------------------------------------------------------------------

async function saveObjectToFile(obj: any, filename: string): Promise<void> {
  try {
    const file = Bun.file(filename);
    const json = JSON.stringify(obj, null, 2);
    await Bun.write(file, json);
  } catch (error: any) {
    console.error('[save object to file] Erro ao salvar objeto em arquivo:', error);
  }
}

async function loadObjectFromFile(filename: string): Promise<any> {
  try {
    const file = Bun.file(filename);
    return await file.json();
  } catch (error: any) {
    console.error('[load object from file] Erro ao carregar objeto de arquivo:', error);
    return null;
  }
}

// ----------------------------------------------------------------------------
// --- Operações CRUD para gerenciar a lista de tarefas                     ---
// ----------------------------------------------------------------------------

const file: string = __dirname + '/todo.list.json';
const data: string[] = await loadObjectFromFile(file) || [];

// CRUD [C]reate
async function add(item: string): Promise<void> {
  data.push(item);
  await saveObjectToFile(data, file);
}

// CRUD [R]ead
async function list(): Promise<string[]> {
  return data;
}

// CRUD [U]pdate
async function update(index: number, newItem: string): Promise<void> {
  if (index < 0 || index > data.length)
    throw new Error('[update] Index out of bounds');
  data[index] = newItem;
  await saveObjectToFile(data, file);
}

// CRUD [D]elete
async function remove(index: number): Promise<void> {
  if (index < 0 || index > data.length-1)
    throw new Error('[remove] Index out of bounds');
  data.splice(index, 1);
  await saveObjectToFile(data, file);
}

// ----------------------------------------------------------------------------
// --- Exportação das funções para uso externo                              ---
// ----------------------------------------------------------------------------

export { add, list, update, remove };
export default { add, list, update, remove };