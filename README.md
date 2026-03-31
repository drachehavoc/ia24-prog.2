# Programação 2

O plano é desenvolver três aplicações iniciais, que deem embasamento suficiente para a construção de aplicações mais complexas, utilizando conceitos de orientação a objetos, padrões de projeto e boas práticas de desenvolvimento.

- O primeiro passo, aqui chamado de `passo-1 - aplicação terminal - sem orientação a objetos`, tem como objetivo criar uma aplicação de linha de comando (CLI) para gerenciamento de tarefas, sem utilizar orientação a objetos. Assim, recapitulando o que foi visto nas disciplinas anteriores de programação, criando um `CRUD` simples para tarefas, utilizando funções e estruturas de dados básicas.
- O segundo passo, `passo-2 - aplicação terminal - orientação a objetos`, tem como objetivo refatorar a aplicação do passo 1, utilizando conceitos de orientação a objetos. Isso inclui a criação de classes para representar as tarefas e o gerenciamento das mesmas, além de aplicar princípios de design orientado a objetos.
- O terceiro passo, `passo-3 - aplicação web - orientação a objetos`, tem como objetivo criar uma aplicação web para gerenciamento de tarefas, utilizando conceitos de orientação a objetos. Isso inclui a criação de classes para representar as tarefas e o gerenciamento das mesmas, além de aplicar princípios de design orientado a objetos.

Esta proposta visa fazer a transposição didática gradual, partindo de uma aplicação simples e evoluindo para uma aplicação mais complexa, utilizando conceitos de orientação a objetos e boas práticas de desenvolvimento.

Antes de começarmos, é importante conhecer brevemente os conteúdos:

- Programação estruturada (JavaScript e TypeScript)
- JSON: [Alura: O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json)
- Async/Await: [Alura: Async/Await no JavaScript](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

## Ferramentas e Tecnologias

- Bun: Um runtime JavaScript moderno, rápido e leve, que pode ser usado para desenvolver aplicações web e de linha de comando.
  - Instalação no Windows
    - Acesse o site oficial do Bun: https://bun.sh/
    - Copie o comando de instalação fornecido na página inicial (referente ao Windows).
    - Abra o terminal (cmd ou PowerShell) e cole o comando de instalação. Em seguida, pressione Enter.
    - Aguarde a conclusão da instalação.
    - Feche o terminal (ou o VSCode, caso tenha feito no terminal integrado) e abra novamente para garantir que as variáveis de ambiente sejam atualizadas.
    - Para verificar se a instalação foi bem-sucedida, execute o comando `bun --version` no terminal. Se o Bun estiver instalado corretamente, ele exibirá a versão instalada.
  - Instalação no Linux (Codespaces)
    - Acesse o site oficial do Bun: https://bun.sh/
    - Copie o comando de instalação fornecido na página inicial (referente ao Linux).
    - Abra o terminal e cole o comando de instalação. Em seguida, pressione Enter.
    - Aguarde a conclusão da instalação.
    - Ao término da instalação, o Bun deve sugerir um comando para adicionar o Bun ao PATH. Copie e cole esse comando no terminal e pressione Enter.
    - Para verificar se a instalação foi bem-sucedida, execute o comando `bun --version` no terminal. Se o Bun estiver instalado corretamente, ele exibirá a versão instalada.

- VSCode: Um editor de código-fonte leve e poderoso, com suporte para uma ampla variedade de linguagens de programação e ferramentas de desenvolvimento.
  - Instalação no Windows
    - Acesse o site oficial do Visual Studio Code: https://code.visualstudio.com/
    - Clique no botão "Download for Windows" para baixar o instalador.
    - Execute o instalador baixado e siga as instruções na tela para concluir a instalação.
  - Instalação no Linux
    - Acesse o site oficial do Visual Studio Code: https://code.visualstudio.com/
    - Clique no botão "Download for Linux" para baixar o pacote de instalação (deb ou rpm, dependendo da sua distribuição).
    - Para distribuições baseadas em Debian/Ubuntu, execute o seguinte comando no terminal para instalar o pacote deb baixado:
      ```
      sudo dpkg -i <caminho_para_o_pacote_deb_baixado>
      ```
    - Para distribuições baseadas em Red Hat/Fedora, execute o seguinte comando no terminal para instalar o pacote rpm baixado:
      ```
      sudo rpm -i <caminho_para_o_pacote_rpm_baixado>
      ```
    - Após a instalação, você pode abrir o Visual Studio Code a partir do menu de aplicativos ou digitando `code` no terminal.

## Passo 1 - Aplicação Terminal - Sem Orientação a Objetos

A aplicação será desenvolvida utilizando apenas funções e estruturas de dados básicas, sem utilizar conceitos de orientação a objetos. O objetivo é criar uma aplicação de linha de comando (CLI) para gerenciamento de tarefas, que permita ao usuário criar, ler, atualizar e deletar tarefas.

### Passo 1.1 - Inicie um novo projeto utilizando o Bun

- Crie uma nova pasta para o projeto.
- Abra a pasta no VSCode como novo projeto.
- Abra o terminal integrado do VSCode e execute o comando:
  - `bun add @types/bun` para instalar as definições de tipo do Bun (e NodeJS).
- Crie um arquivo `core.ts` para implementar a lógica principal da aplicação.
- Crie um arquivo `cli.ts` para implementar a interface de linha de comando da aplicação.

### Passo 1.2 - Implemente a lógica principal da aplicação (core.ts)

Crie um arquivo chamado `core.ts` para implementar a lógica principal da aplicação, que inclui as funções para criar, ler, atualizar e deletar tarefas, além de funções auxiliares para carregar e salvar os dados em um arquivo JSON.

#### Passo 1.2.1 - Defina o caminho para o arquivo JSON e a variável de dados em memória

O arquivo deve iniciar com a definição de um caminho para o arquivo JSON onde as tarefas serão armazenadas no sistema de arquivos do sistema operacional e uma variável para armazenar os dados em memória.

```typescript
const filename = __dirname + '/data.todo.json';
let list: string[] | null = null;
```

#### Passo 1.2.2 - Implemente a função para carregar dados do arquivo

Na sequência, implemente a função para carregar os dados do arquivo e salvar os dados no arquivo:

- A função `loadFromFile` deve verificar se os dados já estão carregados em memória. Caso estejam, apenas retorná-los. Caso contrário, tenta ler o arquivo JSON, fazer parse do conteúdo e retornar os dados como um array de strings. Se ocorrer algum erro (como o arquivo não existir), a função deve criar um novo arquivo JSON com um array vazio e retornar um array vazio.

```typescript
async function loadFromFile() {
  if (list !== null)
    return
  try {
    const file = Bun.file(filename);
    const content = await file.text();
    list = JSON.parse(content) as string[];
  } catch (error) {
    Bun.write(filename, "[]");
    list = [];
  }
}
```

#### Passo 1.2.3 - Implemente a função para salvar dados no arquivo

A função `saveToFile` deve salvar os dados em memória (variável `list`) no arquivo JSON, convertendo o array de strings para uma string JSON e escrevendo no arquivo.

```typescript
async function saveToFile() {
  await Bun.write(filename, JSON.stringify(list));
}
```

#### Passo 1.2.4 - Implemente a função para criar

A função `addItem` deve receber um título de tarefa, carregar os dados do arquivo, adicionar a nova tarefa ao array de tarefas e salvar os dados no arquivo.

```typescript
export async function addItem(item: string) {
  await loadFromFile(); // Garante que os dados estão carregados em memória
  list.push(item);      // Adiciona a nova tarefa ao array `list`
  await saveToFile();   // Salva os dados atualizados no arquivo JSON
}
```

#### Passo 1.2.5 - Implemente a função para ler

A função `getItems` deve carregar os dados do arquivo e retornar o array de tarefas.

```typescript
export async function getItems() {
  await loadFromFile(); // Garante que os dados estão carregados em memória
  return list;         // Retorna o array de tarefas
}
```

#### Passo 1.2.6 - Implemente a função para atualizar

A função `updateItem` deve receber um índice e um novo título de tarefa, carregar os dados do arquivo, verificar se o índice é válido, atualizar a tarefa no array de tarefas e salvar os dados no arquivo.

```typescript
export async function updateItem(index: number, newItem: string) {
  await loadFromFile(); // Garante que os dados estão carregados em memória
  // Verifica se o índice é válido
  if (index < 0 || index >= list.length)
    throw new Error("Índice fora dos limites"); 
  list[index] = newItem; // Atualiza a tarefa no array `list`
  await saveToFile();    // Salva os dados atualizados no arquivo JSON
}
```

#### Passo 1.2.7 - Implemente a função para deletar

A função `removeItem` deve receber um índice, carregar os dados do arquivo, verificar se o índice é válido, remover a tarefa do array de tarefas e salvar os dados no arquivo.

```typescript
export async function removeItem(index: number) {
  await loadFromFile(); // Garante que os dados estão carregados em memória
  // Verifica se o índice é válido
  if (index < 0 || index >= list.length)
    throw new Error("Índice fora dos limites");
  list.splice(index, 1); // Remove a tarefa do array `list`
  await saveToFile();    // Salva os dados atualizados no arquivo JSON
}
```

#### Passo 1.2.8 - Exporte as funções para uso externo

```typescript
export default { addItem, getItems, updateItem, removeItem };
```

#### Passos 1.2.1 a 1.2.8 - Código completo

Ao término dos passos anteriores, o arquivo `core.ts` deve conter o seguinte código completo:

```typescript
const filename = __dirname + '/data.todo.json';
let list: string[] | null = null;

async function loadFromFile() {
  if (list !== null)
    return
  try {
    const file = Bun.file(filename);
    const content = await file.text();
    list = JSON.parse(content) as string[];
  } catch (error) {
    Bun.write(filename, "[]");
    list = [];
  }
}

async function saveToFile() {
  await Bun.write(filename, JSON.stringify(list));
}

// CRUD - CREATE
export async function addItem(item: string) {
  await loadFromFile();
  list.push(item);
  await saveToFile();
}

// CRUD - READ
export async function getItems() {
  await loadFromFile();
  return list;
}

// CRUD - UPDATE
export async function updateItem(index: number, newItem: string) {
  await loadFromFile();
  if (index < 0 || index >= list.length)
    throw new Error("Índice fora dos limites");
  list[index] = newItem;
  await saveToFile();
}

// CRUD - DELETE
export async function removeItem(index: number) {
  await loadFromFile();
  if (index < 0 || index >= list.length)
    throw new Error("Índice fora dos limites");
  list.splice(index, 1);
  await saveToFile();
}

// EXPORTA AS FUNÇÕES PARA USO EXTERNO
export default { addItem, getItems, updateItem, removeItem };
```

#### Passo 1.3 - Implemente a interface de linha de comando (cli.ts)

Crie um arquivo chamado `cli.ts` para implementar a interface de linha de comando da aplicação, que permita ao usuário interagir com a aplicação através do terminal, utilizando comandos para criar, ler, atualizar e deletar tarefas.

Para o uso da aplicação via terminal por linha de comando, o usuário deve fornecer um comando seguido dos argumentos necessários. Os comandos disponíveis são:
- `bun cli.ts add <tarefa>`: Adiciona uma nova tarefa à lista.
- `bun cli.ts list`: Exibe todas as tarefas na lista.
- `bun cli.ts update <índice> <nova tarefa>`: Atualiza a tarefa no índice especificado.
- `bun cli.ts remove <índice>`: Remove a tarefa no índice especificado.

#### Passo 1.3.1 - Importe as funções do core e obtenha o comando do terminal

O arquivo `core.ts` exporta as funções necessárias para o funcionamento da aplicação. Por isso, logo na primeira linha, importamos usando o seguinte comando: `import todo from './core.ts'`. Isso faz com que o namespace (espaço de nomes) `todo` tenha acesso a todos os métodos exportados por padrão (`export default { ... }`) no arquivo `core.ts`. Isso significa que agora é possível acessar esses métodos da seguinte maneira:

- todo.addItem
- todo.getItems
- todo.updateItem
- todo.removeItem

Note que são os mesmos nomes de métodos exportados no arquivo `core.ts`.

Em seguida, é preciso ler a variável `process.argv[2]` (process.argv é um array com os argumentos passados na linha de comando). Isso permite pegar o segundo argumento da linha de comando. Por exemplo: `bun cli.ts SEGUNDO TERCEIRO`, sendo que argv[2] representa o texto `SEGUNDO`. Caso fosse lido argv[3], o valor seria `TERCEIRO` e assim por diante. Neste caso, usamos argv para receber o comando do usuário.

```typescript
import todo from './core.ts';
const command = process.argv[2];
```

#### Passo 1.3.2 - Implemente a lógica para o comando "add"

Se o valor de `command` for "add", então executamos a lógica para adicionar um novo item:

- Verifica se o item foi fornecido. Caso contrário, exibe um erro e encerra o processo com erro.
- Executa a função `addItem` do módulo `todo`.
- Exibe uma mensagem de sucesso.
- Encerra o processo sem erro.

```typescript
if (command === "add") {
  const item = process.argv[3];
  if (!item) {
    console.error("Por favor, forneça um item para adicionar.");
    process.exit(1);
  }
  await todo.addItem(item);
  console.log(`Item "${item}" adicionado com sucesso!`);
  process.exit(0);
}
```

#### Passo 1.3.3 - Implemente a lógica para o comando "list"

Se o valor de `command` for "list", então executamos a lógica para listar os itens:

- Executa a função `getItems` do módulo `todo` para obter a lista de itens.
- Verifica se a lista está vazia. Caso esteja, exibe uma mensagem informando que não há itens na lista e encerra o processo sem erro.
- Exibe a lista de itens, numerando cada item com seu índice correspondente.
- Encerra o processo sem erro.

```typescript
if (command === "list") {
  const items = await todo.getItems();
  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  });
  process.exit(0);
}
```

#### Passo 1.3.4 - Implemente a lógica para o comando "update"

Se o valor de `command` for "update", então executamos a lógica para atualizar um item:

- Lê o índice e o novo item dos argumentos da linha de comando.
- Verifica se o índice é um número válido e se o novo item foi fornecido. Caso contrário, exibe um erro e encerra o processo com erro.
- Executa a função `updateItem` do módulo `todo` para atualizar o item no índice especificado. Caso ocorra algum erro (como índice fora dos limites), exibe o erro e encerra o processo com erro.

```typescript
if (command === "update") {
  const index = parseInt(process.argv[3]);
  const newItem = process.argv[4];
  if (isNaN(index) || !newItem) {
    console.error("Por favor, forneça um índice válido e um novo item.");
    process.exit(1);
  }

  try {
    await todo.updateItem(index, newItem);
    console.log(`Item no índice ${index} atualizado para "${newItem}".`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  process.exit(0);
}
```

#### Passo 1.3.5 - Implemente a lógica para o comando "remove"

Se o valor de `command` for "remove", então executamos a lógica para remover um item:

- Lê o índice dos argumentos da linha de comando.
- Verifica se o índice é um número válido. Caso contrário, exibe um erro e encerra o processo com erro.
- Executa a função `removeItem` do módulo `todo` para remover o item no índice especificado. Caso ocorra algum erro (como índice fora dos limites), exibe o erro e encerra o processo com erro.

```typescript
if (command === "remove") {
  const index = parseInt(process.argv[3]);
  if (isNaN(index)) {
    console.error("Por favor, forneça um índice válido para remover.");
    process.exit(1);
  }
  
  try {
    await todo.removeItem(index);
    console.log(`Item no índice ${index} removido com sucesso.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  process.exit(0);
}
```

#### Passo 1.3.6 - Implemente a lógica para comando desconhecido

Se o valor de `command` não corresponder a nenhum dos comandos conhecidos ("add", "list", "update", "remove"), então exibimos uma mensagem de erro informando que o comando é desconhecido e encerramos o processo com erro.

```typescript
console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

#### Passos 1.3.1 a 1.3.6 - Código completo

Ao término dos passos anteriores, o arquivo `cli.ts` deve conter o seguinte código completo:

```typescript
import todo from './core.ts';
const command = process.argv[2];

if (command === "add") {
  const item = process.argv[3];
  if (!item) {
    console.error("Por favor, forneça um item para adicionar.");
    process.exit(1);
  }
  await todo.addItem(item);
  console.log(`Item "${item}" adicionado com sucesso!`);
  process.exit(0);
}

if (command === "list") {
  const items = await todo.getItems();
  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  });
  process.exit(0);
}

if (command === "update") {
  const index = parseInt(process.argv[3]);
  const newItem = process.argv[4];
  if (isNaN(index) || !newItem) {
    console.error("Por favor, forneça um índice válido e um novo item.");
    process.exit(1);
  }

  try {
    await todo.updateItem(index, newItem);
    console.log(`Item no índice ${index} atualizado para "${newItem}".`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  process.exit(0);
}

if (command === "remove") {
  const index = parseInt(process.argv[3]);
  if (isNaN(index)) {
    console.error("Por favor, forneça um índice válido para remover.");
    process.exit(1);
  }
  
  try {
    await todo.removeItem(index);
    console.log(`Item no índice ${index} removido com sucesso.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  process.exit(0);
}

console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

#### Passo 1.4 - Teste a aplicação

Agora que a aplicação está implementada, é hora de testá-la para garantir que tudo esteja funcionando corretamente. Para testar a aplicação, abra o terminal e navegue até a pasta do projeto. Em seguida, execute os seguintes comandos:

- `bun cli.ts add "Minha primeira tarefa"`: Adiciona uma nova tarefa à lista.
- `bun cli.ts list`: Lista todos os itens da lista.
- `bun cli.ts update 0 "Tarefa atualizada"`: Atualiza o item no índice 0.
- `bun cli.ts remove 0`: Remove o item no índice 0.

#### Passo 1.5 - Atividade

Leia tudo o que foi feito, verifique se de fato compreende tudo o que foi desenvolvido e teste seu conhecimento adicionando uma funcionalidade extra à aplicação. Sugestões:

- Adicione a capacidade de ver em que momento um item foi adicionado e/ou alterado.
- Adicione a capacidade de marcar um item como concluído.
- Adicione a capacidade de filtrar itens por categoria.

Seja criativo.

## Passo 2 - Aplicação Terminal - Orientada a Objetos

Recriar a mesma aplicação feita no passo 1, porém utilizando programação orientada a objetos. Aqui, poderemos ver como a orientação a objetos é útil no reaproveitamento de código. Refazeremos a aplicação criando a possibilidade de ter várias listas diferentes.

...See You Space Cowboy

