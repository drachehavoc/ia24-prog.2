# Programação 2

Esta disciplina tem como foco o desenvolvimento de habilidades de programação, utilizando a linguagem TypeScript, orientação a objetos, acesso a banco de dados, desenvolvimento web e outras tecnologias relacionadas. 

Para isso, a primeira atividade será dividida em 4 partes, cada uma com um foco diferente, conforme descrito abaixo:

- **Parte 1: Aplicação terminal - sem orientação a objetos**
  - tem foco na revisão de conceitos básicos de programação, visto nas disciplinas anteriores, como variáveis, tipos de dados, estruturas de controle, funções, manipulação de arquivos e outros.
  - para isso desenvolveremos uma aplicação de linha de comando (terminal) CLI (Command Line Interface) para gerenciar uma lista de tarefas (to-do list).
  - a aplicação deve permitir adicionar, listar, atualizar e remover itens da lista de tarefas, utilizando comandos simples no terminal. 
  - a aplicação deve armazenar os dados em um arquivo JSON, para que as tarefas sejam persistentes entre as execuções do programa. 
  - a aplicação deve ser desenvolvida utilizando TypeScript, mas sem utilizar conceitos de orientação a objetos, ou seja, utilizando apenas funções, arrays, objetos literais e outros recursos básicos da linguagem.
- **Parte 2: Aplicação terminal - com orientação a objetos**
  - tem foco na introdução aos conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
  - para isso será desenvolvida a mesma aplicação de linha de comando do exercício anterior, mas utilizando conceitos de orientação a objetos para organizar o código e os dados.
  - a aplicação deve ser desenvolvida utilizando TypeScript e conceitos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
- **Parte 3: Aplicação web - com orientação a objetos**
  - tem foco no desenvolvimento web, utilizando conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
  - para isso desenvolveremos a mesma aplicação de gerenciamento de tarefas do exercício anterior, mas adicionando uma interface web simples que permita interagir com a lista de tarefas.
  - a aplicação deve ser desenvolvida utilizando TypeScript, conceitos básicos de orientação a objetos (como classes, objetos, herança e encapsulamento) e tecnologias web como HTML, CSS e JavaScript para criar a interface web, além de adicionar os conceitos de aplicação cliente-servidor, onde a aplicação web será o cliente e a lógica de negócios e acesso a dados será implementada em um servidor utilizando TypeScript.
- **Parte 4: Aplicação web - com orientação a objetos e banco de dados sqlite**
  - tem foco no desenvolvimento web, utilizando conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros, e utilizando banco de dados sqlite para persistência dos dados.
  - para isso desenvolveremos a mesma aplicação de gerenciamento de tarefas do exercício anterior, porém apenas substituindo o armazenamento em arquivo JSON por um banco de dados sqlite, utilizando uma biblioteca de acesso a banco de dados para TypeScript.
  - a aplicação deve ser desenvolvida utilizando TypeScript, conceitos básicos de orientação a objetos (como classes, objetos, herança e encapsulamento), tecnologias web como HTML, CSS e JavaScript para criar a interface web, conceitos de aplicação cliente-servidor (onde a aplicação web será o cliente e a lógica de negócios e acesso a dados será implementada em um servidor) e banco de dados sqlite para persistência dos dados.

## Conhecimentos prévios desejáveis

- Programação Estruturada e Orientação a Objetos (JavaScript e TypeScript)
- JSON: [Alura: O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json)
- Async/Await: [Alura: Async/Await no JavaScript](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

## Como usar este material

Nos tópicos focados em implementação, o conteúdo será apresentado em duas etapas:

1. Explicação, parte a parte, do que cada trecho faz.
2. Código completo do arquivo ao final da seção.

## Requisitos técnicos

### Visual Studio Code (VSCode): [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

Baixe e instale o Visual Studio Code (VSCode) em seu ambiente de trabalho, este é um editor de código leve, gratuito e com uma grande variedade de extensões que facilitam o desenvolvimento em TypeScript e outras linguagens.

Caso prefira utilizar outro editor de código, fique à vontade, mas o VSCode é recomendado para padronizar o ambiente de desenvolvimento deste curso.

### Tenha o Bun instalado em seu ambiente de trabalho: [Bun: Fast all-in-one JavaScript runtime](https://bun.sh/).

No site oficial do Bun, procure pelo script de instalação do sistema operacional que você utiliza, copie o comando de instalação e cole no terminal:

- se estiver no Windows, certifique-se de fechar o terminal antes de abrir seu editor (caso esteja usando o terminal integrado do VSCode, feche o VSCode e abra novamente após a instalação do Bun).
- se estiver no Linux ou macOS, basta colar o comando de instalação no terminal e seguir as instruções; ao término da instalação, o Bun mostrará uma sugestão de comando para adicionar o Bun ao PATH do sistema. Isso permite utilizar o Bun sem a necessidade de fechar o terminal.
- após a instalação, para verificar se o Bun foi instalado corretamente, execute o comando `bun --version` ou, de maneira mais curta, `bun -v` no terminal (ou terminal integrado do VSCode). Se o Bun estiver instalado corretamente, ele exibirá a versão instalada.

### Inicializando o projeto Bun no VS Code

Com o VS Code aberto:

1. Abra a pasta do projeto.
2. Abra o terminal integrado (`Terminal > New Terminal`).
3. Execute `bun init -y`.
4. Confirme as opções de TypeScript.

> **⚠️ Nota:**
> ---
> leia na documentação do Bun sobre o comando `bun init` para entender melhor o que ele faz e quais opções estão disponíveis: [Bun: bun init](https://bun.sh/docs/runtime/templating/init).

## Atividade 1 / Parte 1: Aplicação terminal - sem orientação a objetos

Com o projeto inicializado, o próximo passo é iniciar o desenvolvimento da aplicação. Para isso, crie dois arquivos: `core.ts` e `cli.ts`. O arquivo `core.ts` deve conter a lógica de negócios da aplicação, ou seja, as funções para adicionar, listar, atualizar e remover itens da lista de tarefas, além de funções para ler e escrever os dados no arquivo JSON. O arquivo `cli.ts` deve conter a lógica de interação com o usuário, ou seja, o código para ler os comandos do terminal e chamar as funções do `core.ts` de acordo com os comandos recebidos.

A seguir, veremos cada arquivo separadamente.

### O arquivo `core.ts` (lógica de negócios):

- Deve conter as seguintes funções:
  - `addItem(item: string): Promise<void>`: Adiciona um item à lista de tarefas.
  - `getItems(): Promise<string[]>`: Retorna a lista de tarefas.
  - `updateItem(index: number, newItem: string): Promise<void>`: Atualiza um item da lista de tarefas com base no índice fornecido.
  - `removeItem(index: number): Promise<void>`: Remove um item da lista de tarefas com base no índice fornecido.
  - `loadFromFile(): Promise<string[]>`: Lê os dados do arquivo JSON e retorna a lista de tarefas.
  - `saveToFile(): Promise<void>`: Escreve a lista de tarefas no arquivo JSON.
- E as seguintes constantes e variáveis globais:
  - `jsonFilePath`: que deve conter o caminho para o arquivo JSON onde os dados serão armazenados.
  - `list`: que deve conter a lista de tarefas carregada do arquivo JSON.


#### Constantes e variáveis globais

No início do arquivo `core.ts`, devem ser definidas as constantes e variáveis globais que serão utilizadas em todo o arquivo, essas constantes e variáveis são:

  - `jsonFilePath`: que deve conter o caminho para o arquivo JSON onde os dados serão armazenados.
  - `list`: que deve conter a lista de tarefas carregada do arquivo JSON, utilizando a função `loadFromFile()`.

```typescript
const jsonFilePath = __dirname + '/data.todo.json';
const list: string[] = await loadFromFile();
```

> **⚠️ Nota:** 
> ---
> Aqui, o método `loadFromFile()` é chamado antes de ser definido. Isso é possível em JavaScript e TypeScript devido ao conceito de "hoisting", em que as declarações de funções são elevadas para o topo do escopo, permitindo que sejam chamadas antes de sua definição no código. Caso não conheça o conceito, vale a pena pesquisar para entender melhor como isso funciona.

> **⚠️ Nota:** 
> ---
> A função `loadFromFile()` é chamada precedida pela palavra-chave `await`. Isso significa que `loadFromFile()` é uma função assíncrona que retorna uma `Promise`, e o código aguarda a resolução dessa `Promise` para atribuir o resultado à constante `list`. Caso não conheça o conceito de `async/await` e `Promise`, vale a pena pesquisar para entender melhor como isso funciona.

### Funções auxiliares para leitura e escrita de arquivos (`loadFromFile()` e `saveToFile()`)

Logo após a definição das constantes, as funções mencionadas acima devem ser implementadas. Iniciaremos com as funções auxiliares que não devem ser acessíveis por outros arquivos, ou seja, funções que não devem ser exportadas. No contexto desta aplicação, essas funções são `loadFromFile()` e `saveToFile(items: string[])`, responsáveis por ler e escrever os dados no arquivo JSON no sistema de arquivos do sistema operacional, respectivamente.

A função `loadFromFile()` deve ler o arquivo JSON, caso o arquivo não exista, deve retornar uma lista vazia, caso o arquivo exista, deve ler os dados do arquivo e retornar a lista de tarefas. 

A função `saveToFile()` deve salvar a constante `list` no arquivo JSON, sobrescrevendo o conteúdo anterior do arquivo.

```typescript
async function loadFromFile() {
  try {
    const file = Bun.file(jsonFilePath);
    const content = await file.text();
    return JSON.parse(content) as string[];
  } catch (error: any) {
    if (error.code === 'ENOENT')
      return [];
    throw error;
  }
}

async function saveToFile() {
  try {
    await Bun.write(jsonFilePath, JSON.stringify(list));
  } catch (error: any) {
   throw new Error("Erro ao salvar os dados no arquivo: " + error.message);
  }
}
```

Entendendo a função `loadFromFile()`:

- A função é declarada como `async`, o que significa que ela retorna uma `Promise` e pode usar a palavra-chave `await` para esperar por operações assíncronas, isso é necessário para garantir que a operação de salvamento seja concluída antes de retornar.
- Dentro da função, há um bloco `try...catch` para lidar com possíveis erros que possam ocorrer durante a leitura do arquivo.
- No bloco `try`, a função tenta ler o arquivo JSON usando `Bun.file(jsonFilePath)` para obter uma referência ao arquivo, e `await file.text()` para ler o conteúdo do arquivo como texto.
- O conteúdo lido é então convertido de JSON para um array de strings usando `JSON.parse(content) as string[]` e retornado.
- No bloco `catch`, a função verifica se o erro é do tipo `ENOENT`, que indica que o arquivo não foi encontrado. Se for esse o caso, a função retorna uma lista vazia. Caso contrário, o erro é lançado novamente para ser tratado em outro lugar.

Entendendo a função `saveToFile()`:

- Assim como a função `loadFromFile()`, `saveToFile()` é declarada como `async` e retorna uma `Promise`.
- A função tenta salvar a constante `list` no arquivo JSON usando `Bun.write(jsonFilePath, JSON.stringify(list))`, que converte a lista de tarefas para uma string JSON e escreve no arquivo.
- Se ocorrer um erro durante a escrita do arquivo, o erro é capturado e uma nova mensagem de erro é lançada, indicando que houve um problema ao salvar os dados no arquivo, junto com a mensagem original do erro.

### Funções principais para manipulação da lista de tarefas (`addItem()`, `getItems()`, `updateItem()` e `removeItem()`)


#### Função `addItem(item: string): Promise<void>`

A função `addItem()` deve receber um item do tipo string, adicionar esse item à constante `list: string[]`, e em seguida chamar a função `saveToFile()` para salvar `list` atualizada no arquivo JSON. A função deve retornar uma `Promise<void>` indicando que a operação foi concluída.

```typescript
async function addItem(item: string) {
  list.push(item);
  await saveToFile();
}
```

Entendendo a função `addItem()`:
- A função é declarada como `async`, o que significa que ela retorna uma `Promise` e pode usar a palavra-chave `await` para esperar por operações assíncronas, isso é necessário para garantir que a operação de salvamento seja concluída antes de retornar.
- A função recebe um parâmetro `item` do tipo `string`, que representa a tarefa a ser adicionada à lista.
- O item é adicionado à constante `list: string[]` usando o método `push()`.
- Após adicionar o item à lista, a função chama `await saveToFile()` para salvar a lista atualizada no arquivo JSON. Isso garante que as alterações sejam persistidas.
- A função não retorna nenhum valor, por isso o tipo de retorno é `Promise<void>`

#### Função `getItems(): Promise<string[]>`

A função `getItems()` deve retornar o conteúdo atual da constante `list: string[]`, que representa a lista de tarefas, como uma `Promise<string[]>`.

```typescript
async function getItems() {
  return list;
}
```

Entendendo a função `getItems()`:
- A função retorna a lista atual de tarefas para quem precisar exibir os dados (como o `cli.ts`).
- Neste exemplo, ela apenas devolve o conteúdo de `list`.

> **⚠️ Nota:**
> ---
> Esta função retorna a constante `list` diretamente, sem criar uma cópia dela. Isso significa que qualquer modificação feita na lista retornada por esta função afetará a constante `list` original. Em um cenário real, pode ser interessante retornar uma cópia da lista para evitar modificações acidentais, mas, para o propósito desta atividade, retornar a constante diretamente é suficiente. Para criar uma cópia da lista, poderia ser utilizado `return [...list]` ou `return list.slice()`, por exemplo.

#### Função `updateItem(index: number, newItem: string): Promise<void>`

A função `updateItem()` deve receber um índice do tipo `number` e um novo item do tipo `string`, atualizar o item na constante `list: string[]` com base no índice fornecido, e em seguida chamar a função `saveToFile()` para salvar a lista atualizada no arquivo JSON. A função deve retornar uma `Promise<void>` indicando que a operação foi concluída.

```typescript
async function updateItem(index: number, newItem: string) {
  if (index < 0 || index >= list.length)
    throw new Error("Index fora dos limites");
  list[index] = newItem;
  await saveToFile();
}
```

Entendendo a função `updateItem()`:
- A função segue o mesmo padrão assíncrono de `addItem()`: altera dados em memória e persiste no arquivo.
- A função recebe dois parâmetros: `index` do tipo `number`, que representa a posição do item a ser atualizado na lista, e `newItem` do tipo `string`, que representa o novo valor do item.
- A função verifica se o índice fornecido é válido, ou seja, se está dentro dos limites da lista. Se o índice for inválido, a função lança um erro com a mensagem "Index fora dos limites".
- Se o índice for válido, a função atualiza o item na constante `list` na posição especificada pelo índice com o novo valor fornecido.
- Após atualizar o item na lista, a função chama `await saveToFile()` para salvar a lista atualizada no arquivo JSON.

#### Função `removeItem(index: number): Promise<void>`

A função `removeItem()` deve receber um índice do tipo `number`, remover o item na constante `list: string[]` com base no índice fornecido, e em seguida chamar a função `saveToFile()` para salvar a lista atualizada no arquivo JSON. A função deve retornar uma `Promise<void>` indicando que a operação foi concluída.

```typescript
async function removeItem(index: number) {
  if (index < 0 || index >= list.length)
    throw new Error("Index fora dos limites");
  list.splice(index, 1);
  await saveToFile();
}
```

Entendendo a função `removeItem()`:
- A função segue o mesmo padrão assíncrono das demais operações de escrita.
- A função recebe um parâmetro `index` do tipo `number`, que representa a posição do item a ser removido da lista.
- A função verifica se o índice fornecido é válido, ou seja, se está dentro dos limites da lista. Se o índice for inválido, a função lança um erro com a mensagem "Index fora dos limites".
- Se o índice for válido, a função remove o item da constante `list` na posição especificada pelo índice usando o método `splice()`, que remove um elemento do array.
- Após remover o item da lista, a função chama `await saveToFile()` para salvar a lista atualizada no arquivo JSON.

### Exportando as funções principais

Para que as funções aqui criadas possam ser utilizadas em outros arquivos, como o `cli.ts`, é necessário exportá-las. Neste caso, utilizamos `export default` para exportar um objeto com as funções principais.

```typescript
export default { addItem, getItems, updateItem, removeItem };
```

> **⚠️ Nota:**
> ---
> Entenda como `export` funciona; caso não tenha esse conhecimento, faça uma pesquisa sobre o tema.
> 
> Em nosso exemplo, optamos pela exportação padrão (`export default`), em que todas as funções principais são exportadas como um objeto. Dessa forma, ao importar esse módulo em outro arquivo, podemos acessar as funções principais por meio de um espaço de nome (namespace) definido pelo nome do módulo importado. Exemplo: `import todo from './core';`, e então acessar as funções como `todo.addItem()`, `todo.getItems()`, etc. Note que `todo`, neste caso, é apenas um nome de variável que representa o módulo importado e poderia ser qualquer outro nome, como `import core from './core';`, com acesso às funções por `core.addItem()`, `core.getItems()`, etc. A escolha do nome é uma questão de convenção e preferência pessoal, mas é importante manter a consistência em todo o projeto.

### O arquivo `cli.ts` (lógica de interação com o usuário via terminal):

Este arquivo deve conter a lógica para ler os comandos do terminal e chamar as funções do `core.ts` de acordo com os comandos recebidos. Note que estamos separando a lógica de negócios (core) da lógica de interação com o usuário (cli). Isso significa que todo o funcionamento da aplicação, como manipulação de dados, leitura e escrita de arquivos, etc., deve estar no `core.ts`, enquanto o `cli.ts` deve ser responsável apenas por "entender" os comandos do usuário pelo terminal.

Separando a lógica de negócios da lógica de interação com o usuário, conseguimos manter o código mais organizado, modular e fácil de manter. Assim, caso seja necessário criar uma nova interface de usuário, como uma interface web, por exemplo, a lógica de negócios já estará pronta e poderá ser reutilizada sem necessidade de alterações, bastando criar uma nova camada de interação com o usuário para a nova interface.

Após o término da criação deste arquivo, a aplicação será capaz de ser executada pelo terminal. Os seguintes comandos devem ser implementados para manipular a lista de tarefas:

- `bun cli.ts add <item>`: para adicionar um item à lista de tarefas.
- `bun cli.ts list`: para listar os itens da lista de tarefas.
- `bun cli.ts update <index> <newItem>`: para atualizar um item da lista de tarefas com base no índice fornecido.
- `bun cli.ts remove <index>`: para remover um item da lista de tarefas com base no índice fornecido.

> **⚠️ Nota:**
> ---
> Na lista de comandos, foram adicionados valores com `<` e `>`. Estes devem ser substituídos pelos valores reais ao executar os comandos. Números podem ser utilizados diretamente, porém textos, principalmente os que contêm espaços, devem ser enviados entre aspas.

#### Importando as funções do `core.ts` e lendo os comandos do terminal

No início do arquivo `cli.ts`, deve ser feita a importação das funções principais do `core.ts`, para que possam ser utilizadas para manipular a lista de tarefas com base nos comandos recebidos do terminal. Em seguida, deve ser lido o comando do terminal utilizando `process.argv`, que é um array que contém os argumentos passados para o processo Node.js (ou Bun, neste caso) a partir do terminal. O comando principal deve ser lido a partir do índice 2 do array `process.argv`, pois os índices 0 e 1 são reservados para o caminho do executável e o caminho do arquivo em execução (como dito: `process.argv[0]` é o caminho do Bun e `process.argv[1]` é o caminho do arquivo `cli.ts`), enquanto os comandos personalizados começam a partir do índice 2.

```typescript
import todo from './core.ts';
const command = process.argv[2]; 
```

Entendendo a importação e leitura de comandos:
- A linha `import todo from './core.ts';` importa o módulo `core.ts` e atribui o objeto exportado a uma variável chamada `todo`. Como `core.ts` exporta um objeto contendo as funções principais, a variável `todo` agora tem acesso a essas funções, como `todo.addItem()`, `todo.getItems()`, etc.
- A linha `const command = process.argv[2];` lê o comando do terminal a partir do array `process.argv`, especificamente do índice 2, onde os comandos personalizados começam. O comando lido é armazenado na constante `command`, que será utilizada posteriormente para determinar qual ação executar com base no comando recebido do terminal.

#### Implementando a lógica para o comando `add`

A lógica para o comando `add` deve verificar se o comando recebido é igual a "add", e caso seja, deve ler o item a ser adicionado a partir do índice 3 do array `process.argv`, pois o índice 2 é reservado para o comando "add". Em seguida, deve chamar a função `addItem()` do módulo `core.ts` para adicionar o item à lista de tarefas, e tratar possíveis erros que possam ocorrer durante essa operação.

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

Entendendo a lógica para o comando `add`:
- A estrutura `if (command === "add")` verifica se o comando recebido do terminal é igual a "add". Se for, o código dentro desse bloco será executado.
- A linha `const item = process.argv[3];` lê o item a ser adicionado a partir do índice 3 do array `process.argv`, onde o item é esperado como argumento após o comando "add".
- A estrutura `if (!item)` verifica se o item foi fornecido. Se o item for `undefined` ou uma string vazia, a função exibe uma mensagem de erro no console e encerra o processo com um código de saída 1, indicando que houve um erro.
- Se o item for válido, a função chama `await todo.addItem(item);` para adicionar o item à lista de tarefas usando a função `addItem()` do módulo `core.ts`.
- Após adicionar o item, a função exibe uma mensagem de sucesso no console indicando que o item foi adicionado com sucesso, e então encerra o processo com um código de saída 0, indicando que a operação foi concluída com sucesso.

#### Implementando a lógica para o comando `list`

Este comando deve verificar se o comando recebido é igual a "list" e, caso seja, deve chamar a função `getItems()` do módulo `core.ts` para obter a lista de tarefas e, em seguida, exibir essa lista no console.

```typescript
if (command === "list") {
  const items = todo.getItems();

  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => console.log(`${index}: ${item}`));
  process.exit(0);
}
```

Entendendo a lógica para o comando `list`:
- A estrutura `if (command === "list")` verifica se o comando recebido do terminal é igual a "list". Se for, o código dentro desse bloco será executado.
- A linha `const items = todo.getItems();` chama a função `getItems()` do módulo `core.ts` para obter a lista de tarefas e armazena o resultado na constante `items`. Note que a função `getItems()` retorna a constante `list` do módulo `core.ts`, que é um array de strings representando as tarefas.
- A estrutura `if (items.length === 0)` verifica se a lista de tarefas está vazia. Se estiver, a função exibe uma mensagem no console indicando que não há itens na lista e encerra o processo com um código de saída 0, indicando que a operação foi concluída com sucesso, mesmo que a lista esteja vazia.
- Se a lista não estiver vazia, a função exibe uma mensagem no console indicando que a lista de itens será exibida, em seguida utiliza o método `forEach()` para iterar sobre os itens da lista, exibindo cada item com seu índice correspondente no console. O formato de exibição é `${index}: ${item}`, onde `index` é o índice do item na lista e `item` é o conteúdo do item.
- Após exibir a lista de itens, a função encerra o processo com um código de saída 0, indicando que a operação foi concluída com sucesso.

#### Implementando a lógica para o comando `update`

Este comando deve verificar se o comando recebido é igual a "update", e caso seja, deve ler o índice do item a ser atualizado a partir do índice 3 do array `process.argv`, e o novo item a partir do índice 4 do array `process.argv`. Em seguida, deve chamar a função `updateItem()` do módulo `core.ts` para atualizar o item na lista de tarefas, e tratar possíveis erros que possam ocorrer durante essa operação.

```typescript
if (command === "update") {
  if (!process.argv[3]) {
    console.error("Por favor, forneça um índice válido.");
    process.exit(1);
  }

  const index = parseInt(process.argv[3]);
  const newItem = process.argv[4];

  if (isNaN(index) || !newItem) {
    console.error("Por favor, forneça um índice válido e um novo item.");
    process.exit(1);
  }

  try {
    await todo.updateItem(index, newItem);
    console.log(`Item no índice ${index} atualizado para "${newItem}".`);
    process.exit(0);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}
```

Entendendo a lógica para o comando `update`:
- A estrutura `if (command === "update")` verifica se o comando recebido do terminal é igual a "update". Se for, o código dentro desse bloco será executado.
- Antes da conversão com `parseInt()`, o código verifica se `process.argv[3]` foi informado. Se não foi, exibe a mensagem "Por favor, forneça um índice válido." e encerra o processo.
- A linha `const index = parseInt(process.argv[3]);` lê o índice do item a ser atualizado a partir do índice 3 do array `process.argv` e o converte para um número usando `parseInt()`, armazenando o resultado na constante `index`.
- A linha `const newItem = process.argv[4];` lê o novo item a partir do índice 4 do array `process.argv` e armazena o resultado na constante `newItem`.
- A estrutura `if (isNaN(index) || !newItem)` verifica se o índice é um número válido e se o novo item foi fornecido. Se o índice não for um número ou se o novo item for `undefined` ou uma string vazia, a função exibe uma mensagem de erro no console e encerra o processo com um código de saída 1, indicando que houve um erro.
- Se o índice e o novo item forem válidos, a função tenta atualizar o item na lista de tarefas chamando `await todo.updateItem(index, newItem);` dentro de um bloco `try...catch` para lidar com possíveis erros que possam ocorrer durante a atualização.
- Se a atualização for bem-sucedida, a função exibe uma mensagem no console indicando que o item no índice especificado foi atualizado para o novo item, e então encerra o processo com um código de saída 0, indicando que a operação foi concluída com sucesso.
- Se ocorrer um erro durante a atualização, o erro é capturado no bloco `catch`, a mensagem de erro é exibida no console, e o processo é encerrado com um código de saída 1, indicando que houve um erro.

#### Implementando a lógica para o comando `remove`

Este comando deve verificar se o comando recebido é igual a "remove", e caso seja, deve ler o índice do item a ser removido a partir do índice 3 do array `process.argv`. Em seguida, deve chamar a função `removeItem()` do módulo `core.ts` para remover o item da lista de tarefas, e tratar possíveis erros que possam ocorrer durante essa operação.

```typescript
if (command === "remove") {
  if (!process.argv[3]) {
    console.error("Por favor, forneça um índice válido.");
    process.exit(1);
  }
  
  const index = parseInt(process.argv[3]);

  if (isNaN(index)) {
    console.error("Por favor, forneça um índice válido para remover.");
    process.exit(1);
  }
  
  try {
    await todo.removeItem(index);
    console.log(`Item no índice ${index} removido com sucesso.`);
    process.exit(0);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}
```

Entendendo a lógica para o comando `remove`:
- A estrutura `if (command === "remove")` verifica se o comando recebido do terminal é igual a "remove". Se for, o código dentro desse bloco será executado.
- Antes da conversão com `parseInt()`, o código verifica se `process.argv[3]` foi informado. Se não foi, exibe a mensagem "Por favor, forneça um índice válido." e encerra o processo.
- A linha `const index = parseInt(process.argv[3]);` lê o índice do item a ser removido a partir do índice 3 do array `process.argv` e o converte para um número usando `parseInt()`, armazenando o resultado na constante `index`.
- A estrutura `if (isNaN(index))` verifica se o índice é um número válido. Se o índice não for um número, a função exibe uma mensagem de erro no console e encerra o processo com um código de saída 1, indicando que houve um erro.
- Se o índice for válido, a função tenta remover o item da lista de tarefas chamando `await todo.removeItem(index);` dentro de um bloco `try...catch` para lidar com possíveis erros que possam ocorrer durante a remoção.
- Se a remoção for bem-sucedida, a função exibe uma mensagem no console indicando que o item no índice especificado foi removido com sucesso, e então encerra o processo com um código de saída 0, indicando que a operação foi concluída com sucesso.
- Se ocorrer um erro durante a remoção, o erro é capturado no bloco `catch`, a mensagem de erro é exibida no console, e o processo é encerrado com um código de saída 1, indicando que houve um erro.

#### Lógica para comando desconhecido

Caso o comando recebido do terminal não seja nenhum dos comandos esperados ("add", "list", "update", "remove"), a aplicação deve exibir uma mensagem de erro indicando que o comando é desconhecido, e encerrar o processo com um código de saída 1, indicando que houve um erro.

```typescript
console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

#### Código completo do arquivo `cli.ts`

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
  const items = todo.getItems();

  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => console.log(`${index}: ${item}`));
  process.exit(0);
}

if (command === "update") {
  if (!process.argv[3]) {
    console.error("Por favor, forneça um índice válido.");
    process.exit(1);
  }

  const index = parseInt(process.argv[3]);
  const newItem = process.argv[4];

  if (isNaN(index) || !newItem) {
    console.error("Por favor, forneça um índice válido e um novo item.");
    process.exit(1);
  }

  try {
    await todo.updateItem(index, newItem);
    console.log(`Item no índice ${index} atualizado para "${newItem}".`);
    process.exit(0);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}

if (command === "remove") {
  if (!process.argv[3]) {
    console.error("Por favor, forneça um índice válido.");
    process.exit(1);
  }
  
  const index = parseInt(process.argv[3]);

  if (isNaN(index)) {
    console.error("Por favor, forneça um índice válido para remover.");
    process.exit(1);
  }
  
  try {
    await todo.removeItem(index);
    console.log(`Item no índice ${index} removido com sucesso.`);
    process.exit(0);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}

console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

### Comando para executar a aplicação no terminal

Para executar a aplicação no terminal, utilize os seguintes comandos?

- `bun cli.ts add "Minha nova tarefa"`: para adicionar um item à lista de tarefas
- `bun cli.ts list`: para listar todos os itens da lista de tarefas
- `bun cli.ts update 0 "Tarefa atualizada"`: para atualizar um item na lista de tarefas
- `bun cli.ts remove 0`: para remover um item da lista de tarefas

### Resumo da Parte 1

Ao final desta etapa, você terá aprendido a:

1. Inicializar um projeto Bun com TypeScript no VS Code.
2. Separar responsabilidades entre `core.ts` (regras de negócio) e `cli.ts` (interface de terminal).
3. Persistir dados simples em `data.todo.json`.
4. Implementar comandos de terminal para adicionar, listar, atualizar e remover tarefas.

Com essa base, a Parte 2 avança para uma organização orientada a objetos.

### Atividade, teste seu conhecimento

Leia todo o código e certifique-se de ter entendido tudo o que foi feito. Em seguida, aplique seu conhecimento adicionando uma pequena funcionalidade ao sistema. As sugestões são:

- Adicionar funcionalidade para marcar tarefas como concluídas
- Adicionar funcionalidade para filtrar tarefas por status (concluído ou em andamento)
- Adicionar data e hora de criação da tarefa
- Adicionar comando `clear` para limpar toda a lista de tarefas
- Adicionar comando `search` para buscar tarefas por palavra-chave
- Adicionar numeração automática de tarefas com formato melhorado na exibição
- Adicionar validação para evitar tarefas duplicadas
- Implementar um comando `help` que exiba todos os comandos disponíveis

Escolha uma ou mais sugestões e implemente-as no código existente. Lembre-se de seguir os padrões já estabelecidos: lógica de negócios em `core.ts` e interface de terminal em `cli.ts`.

## Atividade 1 / Parte 2: Aplicação terminal - com orientação a objetos

Esta parte da atividade tem como objetivo refatorar a aplicação terminal criada na Parte 1 para utilizar conceitos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros. A ideia é organizar o código de forma mais estruturada e modular, utilizando as vantagens da orientação a objetos para melhorar a manutenção e extensibilidade da aplicação.

Para justificar o uso da orientação a objetos, adicionaremos a capacidade de marcar as tarefas como concluídas ou pendentes, além da criação de múltiplas listas de tarefas, onde cada lista terá seu próprio arquivo JSON para armazenamento dos dados, e cada tarefa terá um status indicando se está concluída ou pendente. Para isso, será necessário criar uma classe `TodoList` que representará uma lista de tarefas, e uma classe `TodoItem` que representará um item da lista de tarefas. 

A classe `TodoList` deve conter métodos para adicionar, listar, encontrar e remover itens da lista de tarefas, além de métodos privados para ler e escrever os dados no arquivo JSON. A classe `TodoItem` deve conter propriedades para o conteúdo da tarefa e seu status (concluída ou pendente), além de métodos para marcar a tarefa como concluída ou pendente, bem como um método para atualizar o conteúdo da tarefa.

... [isso será tema para a próxima aula] ... see you space cowboy! 