import todo from './core.ts';

// ----------------------------------------------------------------------------
// --- Funções para processar os comandos da linha de comando e interagir   ---
// --- com o usuário                                                        ---
// ----------------------------------------------------------------------------

// Obtém os argumentos da linha de comando
const args: string[] = process.argv.slice(2);

function printUsage(): void {
  console.log('Usage:');
  console.log('  add <item>                - Adicionar um novo item à lista de tarefas');
  console.log('  help                      - Exibir esta mensagem de ajuda');
  console.log('  list                      - Listar todos os itens da lista de tarefas');
  console.log('  update <index> <new item> - Atualizar um item em um índice específico');
  console.log('  remove <index>            - Remover um item em um índice específico');
  process.exit(0);
}

async function addItem(): Promise<void> {
  if (!args[1] || typeof args[1] !== 'string') {
    console.error('[ERRO] Comando "add" requer um item para adicionar.');
    printUsage();
  }
  const item = args[1] as string;
  await todo.add(item);
  console.log(`Added: "${item}"`);
}

async function listItems(): Promise<void> {
  const items: string[] = await todo.list();
  if (items.length === 0) {
    console.log('Nenhum item na lista de tarefas.');
    process.exit(0);
  }

  console.log('Lista de Tarefas:');
  items.forEach((item, index) => console.log(`- ${index}: ${item}`));
}

async function updateItem(): Promise<void> {
  if (!args[1]) {
    console.error('[ERRO] Comando "update" requer um índice e um novo item.');
    printUsage();
  }

  if (!args[2]) {
    console.error('[ERRO] Comando "update" requer um novo item para atualizar.');
    printUsage();
  }

  const index: number = parseInt(args[1] as string, 10);

  if (isNaN(index)) {
    console.error('[ERRO] Índice inválido. O índice deve ser um número inteiro.');
    printUsage();
  }

  const newItem: string = args[2] as string;

  try {
    await todo.update(index, newItem);
    console.log(`Item atualizado no índice ${index} para: "${newItem}"`);
  } catch (error: any) {
    console.error('Erro ao atualizar item:', error.message);
  }
}

async function removeItem(): Promise<void> {
  if (!args[1]) {
    console.error('[ERRO] Comando "remove" requer um índice.');
    printUsage();
  }

  const index: number = parseInt(args[1] as string, 10);

  if (isNaN(index)) {
    console.error('[ERRO] Índice inválido. O índice deve ser um número inteiro.');
    printUsage();
  }

  try {
    await todo.remove(index);
    console.log(`Item removido no índice ${index}`);
  } catch (error: any) {
    console.error('Erro ao remover item:', error.message);
  }
}

// ----------------------------------------------------------------------------
// --- Processa o comando da linha de comando e chama a função correspondente ---
// ----------------------------------------------------------------------------

const command: string = args[0] as string;

switch (command) {
  case 'add':
    await addItem();
    break;
  case 'list':
    await listItems();
    break;
  case 'update':
    await updateItem();
    break;
  case 'remove':
    await removeItem();
    break;
  case 'help':
  default:
    printUsage();
}