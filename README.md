




# Entregaveis - 1° Trimestre

- ☑ `[primeira semana de maio]` Garatujas
  - ☑ Anotações pessoais sobre conteúdos vistos
  - ☑ Revisão HTML, CSS
    - ☑ Interface Web para o Projeto - Cadastro de Termos Técnicos
- ☑ `[31 de Março]` Atividade / Parte 1: Aplicação terminal - sem orientação a objetos
  - `core.ts` (lógica de negócios)
  - `cli.ts` (lógica de interação com o usuário via terminal)
  - Adicionar funcio
- ☑ `[14 de Abril]` Atividade / Parte 2: Aplicação terminal - com orientação a objetos
  - `core.ts` (lógica de negócios orientada a objetos)
  - `cli.ts` (lógica de interação com o usuário via terminal)
- ☐ `[ ]` Atividade / Parte 3: Aplicação web - com orientação a objetos
  - `core.ts` (lógica de negócios orientada a objetos)
  - `server.ts` (servidor para lidar com requisições HTTP)
  - `index.html` (interface web para interagir com a lista de tarefas)
  - `style.css` (estilos para a interface web)
- ☐ `[ ]` Atividade / Parte 4: Aplicação web - com orientação a objetos e banco de dados sqlite
  - `core.ts` (lógica de negócios orientada a objetos, utilizando banco de dados sqlite para persistência dos dados)
  - `server.ts` (servidor para lidar com requisições HTTP)
  - `index.html` (interface web para interagir com a lista de tarefas)
  - `style.css` (estilos para a interface web)

# Programação 2

Esta disciplina tem como foco o desenvolvimento de habilidades de programação, utilizando a linguagem TypeScript, orientação a objetos, acesso a banco de dados, desenvolvimento web e outras tecnologias relacionadas. 

Para isso, a primeira atividade será dividida em 4 partes, cada uma com um foco diferente, conforme descrito abaixo:

- **Parte 1: Aplicação terminal - sem orientação a objetos**
  - tem foco na revisão de conceitos básicos de programação, visto nas disciplinas anteriores, como variáveis, tipos de dados, estruturas de controle, funções, manipulação de arquivos e outros.
  - para isso será desenvolvida uma aplicação de linha de comando (terminal) CLI (Command Line Interface) para gerenciar uma lista de tarefas (to-do list).
  - a aplicação deve permitir adicionar, listar, atualizar e remover itens da lista de tarefas, utilizando comandos simples no terminal. 
  - a aplicação deve armazenar os dados em um arquivo JSON, para que as tarefas sejam persistentes entre as execuções do programa. 
  - a aplicação deve ser desenvolvida utilizando TypeScript, mas sem utilizar conceitos de orientação a objetos, ou seja, utilizando apenas funções, arrays, objetos literais e outros recursos básicos da linguagem.
- **Parte 2: Aplicação terminal - com orientação a objetos**
  - tem foco na introdução aos conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
  - para isso será desenvolvida a mesma aplicação de linha de comando do exercício anterior, mas utilizando conceitos de orientação a objetos para organizar o código e os dados.
  - a aplicação deve ser desenvolvida utilizando TypeScript e conceitos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
- **Parte 3: Aplicação web - com orientação a objetos**
  - tem foco no desenvolvimento web, utilizando conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros.
  - para isso será desenvolvida a mesma aplicação de gerenciamento de tarefas do exercício anterior, mas com a adição de uma interface web simples que permita interagir com a lista de tarefas.
  - a aplicação deve ser desenvolvida utilizando TypeScript, conceitos básicos de orientação a objetos (como classes, objetos, herança e encapsulamento) e tecnologias web como HTML, CSS e JavaScript para criar a interface web, além de adicionar os conceitos de aplicação cliente-servidor, onde a aplicação web será o cliente e a lógica de negócios e acesso a dados será implementada em um servidor utilizando TypeScript.
- **Parte 4: Aplicação web - com orientação a objetos e banco de dados sqlite**
  - tem foco no desenvolvimento web, utilizando conceitos básicos de orientação a objetos, como classes, objetos, herança, encapsulamento e outros, e utilizando banco de dados sqlite para persistência dos dados.
  - para isso será desenvolvida a mesma aplicação de gerenciamento de tarefas do exercício anterior, porém com a substituição do armazenamento em arquivo JSON por um banco de dados sqlite, utilizando uma biblioteca de acesso a banco de dados para TypeScript.
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

Recomenda-se a instalação do Visual Studio Code (VSCode) no ambiente de trabalho, pois se trata de um editor de código leve, gratuito e com uma grande variedade de extensões que facilitam o desenvolvimento em TypeScript e outras linguagens.

Caso se opte por outro editor de código, não há impedimento; ainda assim, o VSCode é recomendado para padronizar o ambiente de desenvolvimento deste curso.

### Recomenda-se ter o Bun instalado no ambiente de trabalho: [Bun: Fast all-in-one JavaScript runtime](https://bun.sh/).

No site oficial do Bun, deve-se localizar o script de instalação correspondente ao sistema operacional utilizado, copiar o comando de instalação e colá-lo no terminal:

- no Windows, recomenda-se fechar o terminal antes de abrir o editor. Caso esteja sendo utilizado o terminal integrado do VSCode, recomenda-se fechar o VSCode e abri-lo novamente após a instalação do Bun.
- no Linux ou macOS, basta colar o comando de instalação no terminal e seguir as instruções; ao término da instalação, o Bun mostrará uma sugestão de comando para adicionar o Bun ao PATH do sistema. Isso permite utilizar o Bun sem a necessidade de fechar o terminal.
- após a instalação, para verificar se o Bun foi instalado corretamente, recomenda-se executar o comando `bun --version` ou, de maneira mais curta, `bun -v` no terminal (ou terminal integrado do VSCode). Se o Bun estiver instalado corretamente, a versão instalada será exibida.

### Inicializando o projeto Bun no VS Code

Com o VS Code aberto:

1. Abrir a pasta do projeto.
2. Abrir o terminal integrado (`Terminal > New Terminal`).
3. Executar `bun init -y`.
4. Confirmar as opções de TypeScript.

> [!NOTE]
> Recomenda-se a leitura da documentação do Bun sobre o comando `bun init`, para melhor compreensão de seu funcionamento e das opções disponíveis: [Bun: bun init](https://bun.sh/docs/runtime/templating/init).

## Atividade 1

...

### Atividade 1 / Parte 1: Aplicação terminal - sem orientação a objetos

Com o projeto inicializado, o próximo passo é iniciar o desenvolvimento da aplicação. Para isso, devem ser criados dois arquivos: `core.ts` e `cli.ts`. O arquivo `core.ts` deve conter a lógica de negócios da aplicação, ou seja, as funções para adicionar, listar, atualizar e remover itens da lista de tarefas, além de funções para ler e escrever os dados no arquivo JSON. O arquivo `cli.ts` deve conter a lógica de interação com o usuário, ou seja, o código para ler os comandos do terminal e chamar as funções do `core.ts` de acordo com os comandos recebidos.

A seguir, cada arquivo será apresentado separadamente.

#### O arquivo `core.ts` (lógica de negócios):

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


##### Constantes e variáveis globais

No início do arquivo `core.ts`, devem ser definidas as constantes e variáveis globais que serão utilizadas em todo o arquivo, essas constantes e variáveis são:

  - `jsonFilePath`: que deve conter o caminho para o arquivo JSON onde os dados serão armazenados.
  - `list`: que deve conter a lista de tarefas carregada do arquivo JSON, utilizando a função `loadFromFile()`.

```typescript
const jsonFilePath = __dirname + '/data.todo.json';
const list: string[] = await loadFromFile();
```

> [!NOTE]
> Aqui, o método `loadFromFile()` é chamado antes de ser definido. Isso é possível em JavaScript e TypeScript devido ao conceito de "hoisting", em que as declarações de funções são elevadas para o topo do escopo, permitindo que sejam chamadas antes de sua definição no código. Caso esse conceito ainda não seja conhecido, recomenda-se uma breve pesquisa para melhor compreensão do mecanismo.

> [!NOTE]
> A função `loadFromFile()` é chamada precedida pela palavra-chave `await`. Isso significa que `loadFromFile()` é uma função assíncrona que retorna uma `Promise`, e o código aguarda a resolução dessa `Promise` para atribuir o resultado à constante `list`. Caso os conceitos de `async/await` e `Promise` ainda não sejam conhecidos, recomenda-se pesquisa complementar para melhor entendimento.

#### Funções auxiliares para leitura e escrita de arquivos (`loadFromFile()` e `saveToFile()`)

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

#### Funções principais para manipulação da lista de tarefas (`addItem()`, `getItems()`, `updateItem()` e `removeItem()`)


##### Função `addItem(item: string): Promise<void>`

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

##### Função `getItems(): Promise<string[]>`

A função `getItems()` deve retornar o conteúdo atual da constante `list: string[]`, que representa a lista de tarefas, como uma `Promise<string[]>`.

```typescript
async function getItems() {
  return list;
}
```

Entendendo a função `getItems()`:
- A função retorna a lista atual de tarefas para quem precisar exibir os dados (como o `cli.ts`).
- Neste exemplo, ela apenas devolve o conteúdo de `list`.

> [!NOTE]
> Esta função retorna a constante `list` diretamente, sem criar uma cópia dela. Isso significa que qualquer modificação feita na lista retornada por esta função afetará a constante `list` original. Em um cenário real, pode ser interessante retornar uma cópia da lista para evitar modificações acidentais, mas, para o propósito desta atividade, retornar a constante diretamente é suficiente. Para criar uma cópia da lista, poderia ser utilizado `return [...list]` ou `return list.slice()`, por exemplo.

##### Função `updateItem(index: number, newItem: string): Promise<void>`

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

##### Função `removeItem(index: number): Promise<void>`

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

#### Exportando as funções principais

Para que as funções aqui criadas possam ser utilizadas em outros arquivos, como o `cli.ts`, é necessário exportá-las. Neste caso, utiliza-se `export default` para exportar um objeto com as funções principais.

```typescript
export default { addItem, getItems, updateItem, removeItem };
```

> [!NOTE]
> Recomenda-se compreender o funcionamento de `export`; caso esse conhecimento ainda não esteja consolidado, vale a pena consultar material complementar sobre o tema.
> 
> Neste exemplo, adota-se a exportação padrão (`export default`), em que todas as funções principais são exportadas como um objeto. Dessa forma, ao importar esse módulo em outro arquivo, torna-se possível acessar as funções principais por meio de um espaço de nome (namespace) definido pelo nome do módulo importado. Exemplo: `import todo from './core';`, com acesso às funções por meio de `todo.addItem()`, `todo.getItems()` etc. Note-se que `todo`, nesse caso, é apenas um nome de variável que representa o módulo importado e poderia ser substituído por qualquer outro nome, como `import core from './core';`, com acesso às funções por `core.addItem()`, `core.getItems()` etc. A escolha do nome é uma questão de convenção e preferência, mas a consistência ao longo do projeto é importante.

#### O arquivo `cli.ts` (lógica de interação com o usuário via terminal):

Este arquivo deve conter a lógica para ler os comandos do terminal e chamar as funções do `core.ts` de acordo com os comandos recebidos. Note que estamos separando a lógica de negócios (core) da lógica de interação com o usuário (cli). Isso significa que todo o funcionamento da aplicação, como manipulação de dados, leitura e escrita de arquivos, etc., deve estar no `core.ts`, enquanto o `cli.ts` deve ser responsável apenas por "entender" os comandos do usuário pelo terminal.

Separando a lógica de negócios da lógica de interação com o usuário, conseguimos manter o código mais organizado, modular e fácil de manter. Assim, caso seja necessário criar uma nova interface de usuário, como uma interface web, por exemplo, a lógica de negócios já estará pronta e poderá ser reutilizada sem necessidade de alterações, bastando criar uma nova camada de interação com o usuário para a nova interface.

Após o término da criação deste arquivo, a aplicação será capaz de ser executada pelo terminal. Os seguintes comandos devem ser implementados para manipular a lista de tarefas:

- `bun cli.ts add <item>`: para adicionar um item à lista de tarefas.
- `bun cli.ts list`: para listar os itens da lista de tarefas.
- `bun cli.ts update <index> <newItem>`: para atualizar um item da lista de tarefas com base no índice fornecido.
- `bun cli.ts remove <index>`: para remover um item da lista de tarefas com base no índice fornecido.

> [!NOTE]
> Na lista de comandos, foram adicionados valores com `<` e `>`. Estes devem ser substituídos pelos valores reais ao executar os comandos. Números podem ser utilizados diretamente, porém textos, principalmente os que contêm espaços, devem ser enviados entre aspas.

##### Importando as funções do `core.ts` e lendo os comandos do terminal

No início do arquivo `cli.ts`, deve ser feita a importação das funções principais do `core.ts`, para que possam ser utilizadas para manipular a lista de tarefas com base nos comandos recebidos do terminal. Em seguida, deve ser lido o comando do terminal utilizando `process.argv`, que é um array que contém os argumentos passados para o processo Node.js (ou Bun, neste caso) a partir do terminal. O comando principal deve ser lido a partir do índice 2 do array `process.argv`, pois os índices 0 e 1 são reservados para o caminho do executável e o caminho do arquivo em execução (como dito: `process.argv[0]` é o caminho do Bun e `process.argv[1]` é o caminho do arquivo `cli.ts`), enquanto os comandos personalizados começam a partir do índice 2.

```typescript
import todo from './core.ts';
const command = process.argv[2]; 
```

Entendendo a importação e leitura de comandos:
- A linha `import todo from './core.ts';` importa o módulo `core.ts` e atribui o objeto exportado a uma variável chamada `todo`. Como `core.ts` exporta um objeto contendo as funções principais, a variável `todo` agora tem acesso a essas funções, como `todo.addItem()`, `todo.getItems()`, etc.
- A linha `const command = process.argv[2];` lê o comando do terminal a partir do array `process.argv`, especificamente do índice 2, onde os comandos personalizados começam. O comando lido é armazenado na constante `command`, que será utilizada posteriormente para determinar qual ação executar com base no comando recebido do terminal.

##### Implementando a lógica para o comando `add`

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

##### Implementando a lógica para o comando `list`

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

##### Implementando a lógica para o comando `update`

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

##### Implementando a lógica para o comando `remove`

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

##### Lógica para comando desconhecido

Caso o comando recebido do terminal não seja nenhum dos comandos esperados ("add", "list", "update", "remove"), a aplicação deve exibir uma mensagem de erro indicando que o comando é desconhecido, e encerrar o processo com um código de saída 1, indicando que houve um erro.

```typescript
console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

##### Código completo do arquivo `cli.ts`

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

#### Comando para executar a aplicação no terminal

Para executar a aplicação no terminal, podem ser utilizados os seguintes comandos:

- `bun cli.ts add "Minha nova tarefa"`: para adicionar um item à lista de tarefas
- `bun cli.ts list`: para listar todos os itens da lista de tarefas
- `bun cli.ts update 0 "Tarefa atualizada"`: para atualizar um item na lista de tarefas
- `bun cli.ts remove 0`: para remover um item da lista de tarefas

#### Resumo da Parte 1

Ao final desta etapa, espera-se que tenham sido compreendidos os seguintes pontos:

1. Inicializar um projeto Bun com TypeScript no VS Code.
2. Separar responsabilidades entre `core.ts` (regras de negócio) e `cli.ts` (interface de terminal).
3. Persistir dados simples em `data.todo.json`.
4. Implementar comandos de terminal para adicionar, listar, atualizar e remover tarefas.

Com essa base, a Parte 2 avança para uma organização orientada a objetos.

#### Atividade de verificação de conhecimento

Recomenda-se a leitura integral do código, com verificação de entendimento de todas as etapas realizadas. Em seguida, pode-se aplicar o conhecimento adquirido por meio da adição de uma pequena funcionalidade ao sistema. As sugestões são:

- Adicionar funcionalidade para marcar tarefas como concluídas
- Adicionar funcionalidade para filtrar tarefas por status (concluído ou em andamento)
- Adicionar data e hora de criação da tarefa
- Adicionar comando `clear` para limpar toda a lista de tarefas
- Adicionar comando `search` para buscar tarefas por palavra-chave
- Adicionar numeração automática de tarefas com formato melhorado na exibição
- Adicionar validação para evitar tarefas duplicadas
- Implementar um comando `help` que exiba todos os comandos disponíveis

Pode-se escolher uma ou mais sugestões e implementá-las no código existente. Convém manter os padrões já estabelecidos: lógica de negócios em `core.ts` e interface de terminal em `cli.ts`.

### Atividade 1 / Parte 2: Aplicação terminal - com orientação a objetos

Nesta etapa, a aplicação da Parte 1 será refatorada para utilizar classes e objetos. Em vez de trabalhar apenas com funções soltas e arrays de strings, cada tarefa passará a ser representada como uma instância da classe `Item`, e a lista de tarefas como uma instância da classe `ToDo`.

Essa mudança permite organizar melhor o código, separar responsabilidades e preparar a aplicação para evoluções futuras. Outro ponto importante é que, nesta versão, a lista não está mais presa a um único arquivo JSON fixo: o caminho do arquivo passa a ser informado no terminal, e cada instância de `ToDo` gerencia seu próprio arquivo.

#### Estrutura da solução

Nesta Parte 2, mantém-se a separação entre a lógica de negócios e a lógica de interação com o terminal:

- `core.ts`: contém as classes `Item` e `ToDo`, responsáveis pelos dados e pelas operações da lista.
- `cli.ts`: interpreta os argumentos do terminal, cria os objetos necessários e chama os métodos definidos em `core.ts`.

#### O arquivo `core.ts` (lógica de negócios orientada a objetos)

Em vez de exportar apenas funções, agora exportamos duas classes:

- `Item`: representa uma tarefa individual.
- `ToDo`: representa uma lista de tarefas associada a um arquivo JSON.

##### Classe `Item`

A classe `Item` é responsável por representar uma tarefa individual. No código atual, ela armazena a descrição da tarefa e possui um método para atualizar essa descrição. Além disso, tem um método `toJSON()` para facilitar a conversão do objeto em um formato adequado para salvar no arquivo JSON.

```typescript
export class Item {
  private description: string;

  constructor(description: string) {
    this.description = description;
  }

  updateDescription(newDescription: string) {
    this.description = newDescription;
  }

  toJSON() {
    return {
      description: this.description
    }
  }
}
```

Entendendo a classe `Item`:

- A propriedade `description` é `private`, ou seja, só pode ser acessada diretamente dentro da própria classe.
- O `constructor(description: string)` é executado quando um novo objeto `Item` é criado, recebendo a descrição inicial da tarefa.
- O método `updateDescription(newDescription: string)` permite alterar a descrição do item já existente.
- O método `toJSON()` devolve um objeto literal com os dados do item. Isso facilita a serialização para JSON ao salvar no arquivo.

> [!NOTE]
> O método `toJSON()` é uma convenção em JavaScript/TypeScript que é automaticamente chamado quando um objeto é convertido para JSON, como acontece com `JSON.stringify()`. Ele permite controlar exatamente quais dados do objeto serão incluídos na representação JSON, o que é útil para evitar expor propriedades privadas ou métodos que não devem ser salvos.

##### Classe `ToDo`

A classe `ToDo` representa uma lista de tarefas propriamente dita e concentra as operações principais da aplicação: carregar os dados, salvar, adicionar, listar, atualizar (*ao encontrar o item e chamar o método `updateDescription` do próprio item*), remover e buscar itens.

```typescript
export class ToDo {
  private filepath: string;
  private items: Promise<Item[]>;

  constructor(filepath: string) {
    this.filepath = filepath;
    this.items = this.loadFromFile();
  }

  private async saveToFile() {
    try {
      const items = await this.items;
      const file = Bun.file(this.filepath);
      const data = JSON.stringify(items);
      return Bun.write(file, data);
    } catch (error) {
      console.error('Error saving to file:', error);
    }
  }

  private async loadFromFile() {
    const file = Bun.file(this.filepath);
    if (!(await file.exists()))
      return []
    const data = await file.text();
    return JSON.parse(data).map((itemData: any) => new Item(itemData.description));
  }

  async addItem(item: Item) {
    const items = await this.items;
    items.push(item);
    this.saveToFile();
  }

  async getItems() {
    return await this.items
  }

  async updateItem(index: number, newItem: Item) {
    const items = await this.items;
    if (index < 0 || index > items.length) 
      throw new Error('Index out of bounds');
    items[index] = newItem;
    this.saveToFile();
  }

  async removeItem(index: number) {
    const items = await this.items;
    if (index < 0 || index > items.length) 
      throw new Error('Index out of bounds');
    items.splice(index, 1);
    this.saveToFile();
  }

  async findItemByDescription(description: string): Promise<Item | undefined> {
    const items = await this.items;
    return items.find(item => item.toJSON().description === description);    
  }

  async findItemByIndex(index: number): Promise<Item | undefined> {
    const items = await this.items;
    if (index < 0 || index > items.length) 
      throw new Error('Index out of bounds');
    return items[index];
  }
}
```

##### Propriedades da classe `ToDo`

No início da classe, temos duas propriedades privadas:

```typescript
private filepath: string;
private items: Promise<Item[]>;
```

Entendendo essas propriedades:

- `filepath` guarda o caminho do arquivo JSON que será utilizado por aquela lista.
- `items` guarda uma `Promise<Item[]>`, isto é, uma promessa que resultará em um array de objetos `Item`.
- Como os dados precisam ser lidos do arquivo de forma assíncrona, a carga inicial é feita por `loadFromFile()` dentro do construtor.

##### O construtor da classe `ToDo`

```typescript
constructor(filepath: string) {
  this.filepath = filepath;
  this.items = this.loadFromFile();
}
```

Entendendo o construtor:

- Ao criar um novo objeto `ToDo`, é necessário informar o caminho do arquivo JSON.
- Esse valor é armazenado em `this.filepath`.
- Em seguida, `this.items` recebe o resultado de `this.loadFromFile()`, iniciando a leitura dos dados já existentes.

#### Métodos privados de persistência

Assim como na Parte 1, ainda é necessário ler e escrever dados em arquivo. A diferença é que, nesta versão, essa responsabilidade fica encapsulada dentro da classe `ToDo`, por meio de métodos privados.

##### Método `loadFromFile()`

```typescript
private async loadFromFile() {
  const file = Bun.file(this.filepath);
  if (!(await file.exists()))
    return []
  const data = await file.text();
  return JSON.parse(data).map((itemData: any) => new Item(itemData.description));
}
```

Entendendo o método `loadFromFile()`:

- O método usa `this.filepath` para localizar o arquivo associado à lista.
- Se o arquivo ainda não existir, retorna um array vazio.
- Se existir, lê o texto do arquivo.
- Depois converte o JSON lido em um array de objetos `Item`, usando `map()` para recriar instâncias da classe.

> [!NOTE]
> Esse passo de reconstruir os objetos com `new Item(...)` é importante. Ao ler o JSON do arquivo, obtêm-se apenas objetos literais. Para recuperar os métodos da classe, como `updateDescription()`, é necessário criar novas instâncias de `Item`.

##### Método `saveToFile()`

```typescript
private async saveToFile() {
  try {
    const items = await this.items;
    const file = Bun.file(this.filepath);
    const data = JSON.stringify(items);
    return Bun.write(file, data);
  } catch (error) {
    console.error('Error saving to file:', error);
  }
}
```

Entendendo o método `saveToFile()`:

- Primeiro, o método aguarda a resolução de `this.items`.
- Depois converte o array de itens para JSON usando `JSON.stringify()`.
- Por fim, grava esse conteúdo no arquivo correspondente com `Bun.write()`.
- Como o método está marcado como `private`, ele só pode ser chamado dentro da própria classe `ToDo`.

#### Métodos principais da lista de tarefas

##### Método `addItem(item: Item)`

```typescript
async addItem(item: Item) {
  const items = await this.items;
  items.push(item);
  this.saveToFile();
}
```

Entendendo o método `addItem()`:

- Recebe um objeto do tipo `Item`.
- Aguarda a lista ser carregada.
- Adiciona o novo item ao array.
- Salva a lista atualizada no arquivo.

##### Método `getItems()`

```typescript
async getItems() {
  return await this.items
}
```

Entendendo o método `getItems()`:

- Retorna os itens carregados na lista.
- O retorno é assíncrono porque os dados podem ainda estar sendo carregados do arquivo.

##### Método `updateItem(index: number, newItem: Item)`

```typescript
async updateItem(index: number, newItem: Item) {
  const items = await this.items;
  if (index < 0 || index > items.length) 
    throw new Error('Index out of bounds');
  items[index] = newItem;
  this.saveToFile();
}
```

Entendendo o método `updateItem()`:

- Recebe o índice do item a ser alterado e um novo objeto `Item`.
- Verifica se o índice está dentro de uma faixa válida.
- Substitui o item antigo pelo novo.
- Salva a alteração no arquivo.

##### Método `removeItem(index: number)`

```typescript
async removeItem(index: number) {
  const items = await this.items;
  if (index < 0 || index > items.length) 
    throw new Error('Index out of bounds');
  items.splice(index, 1);
  this.saveToFile();
}
```

Entendendo o método `removeItem()`:

- Recebe o índice do item a ser removido.
- Verifica se o índice é válido.
- Remove o item usando `splice()`.
- Persiste a lista atualizada no arquivo.

#### Métodos de busca

Além das operações principais, a classe também possui métodos de busca.

###### Método `findItemByDescription(description: string)`

```typescript
async findItemByDescription(description: string): Promise<Item | undefined> {
  const items = await this.items;
  return items.find(item => item.toJSON().description === description);    
}
```

Esse método percorre a lista e retorna o primeiro item cuja descrição seja igual ao texto informado.

###### Método `findItemByIndex(index: number)`

```typescript
async findItemByIndex(index: number): Promise<Item | undefined> {
  const items = await this.items;
  if (index < 0 || index > items.length) 
    throw new Error('Index out of bounds');
  return items[index];
}
```

Esse método retorna o item localizado em um índice específico da lista.

#### O arquivo `cli.ts` (interface de terminal)

Agora que a lógica de negócios foi encapsulada em classes, o `cli.ts` passa a ter a responsabilidade de:

- ler o caminho do arquivo informado no terminal;
- ler o comando desejado;
- criar uma instância de `ToDo`;
- criar objetos `Item` quando necessário;
- chamar os métodos apropriados.

O código atual é o seguinte:

```typescript
import { ToDo, Item } from './core.ts';

const file = process.argv[2]
const command = process.argv[3];

if (!file) {
  console.error("Por favor, forneça o caminho do arquivo.");
  process.exit(1);
}

const todo = new ToDo(file);

if (command === "add") {
  const itemDescription = process.argv[4];
  
  if (!itemDescription) {
    console.error("Por favor, forneça uma descrição para o item.");
    process.exit(1);
  }

  const item = new Item(itemDescription);
  await todo.addItem(item);
  console.log(`Item "${itemDescription}" adicionado com sucesso!`);
  process.exit(0);
}

if (command === "list") {
  const items = await todo.getItems();

  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => console.log(`${index}: ${item.toJSON().description}`));
  process.exit(0);
}

if (command === "update") {
  // ...
}

if (command === "remove") {
  // ...
}

console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

##### Importando as classes e lendo os argumentos

```typescript
import { ToDo, Item } from './core.ts';

const file = process.argv[2]
const command = process.argv[3];
```

Entendendo esse trecho:

- Agora não se utiliza mais um objeto default exportado com funções.
- Em vez disso, são importadas diretamente as classes `ToDo` e `Item`.
- O caminho do arquivo JSON é lido em `process.argv[2]`.
- O comando a ser executado é lido em `process.argv[3]`.

Isso significa que, nesta Parte 2, o formato do comando mudou. Anteriormente, utilizava-se algo como `bun cli.ts add "Tarefa"`. Agora, também é necessário informar o arquivo da lista, por exemplo: `bun cli.ts lista.json add "Tarefa"`.

#### Criando a instância da lista

```typescript
if (!file) {
  console.error("Por favor, forneça o caminho do arquivo.");
  process.exit(1);
}

const todo = new ToDo(file);
```

Entendendo esse trecho:

- Antes de qualquer operação, o programa verifica se o caminho do arquivo foi informado.
- Se não foi, exibe erro e encerra a execução.
- Caso o caminho exista, o programa cria um objeto `ToDo`, que passa a representar a lista de tarefas contida naquele arquivo.

#### Implementando o comando `add`

```typescript
if (command === "add") {
  const itemDescription = process.argv[4];
  
  if (!itemDescription) {
    console.error("Por favor, forneça uma descrição para o item.");
    process.exit(1);
  }

  const item = new Item(itemDescription);
  await todo.addItem(item);
  console.log(`Item "${itemDescription}" adicionado com sucesso!`);
  process.exit(0);
}
```

Entendendo a lógica do comando `add`:

- O texto da nova tarefa é lido em `process.argv[4]`.
- Se nenhuma descrição for informada, o programa exibe erro.
- Se a descrição existir, cria-se um novo objeto `Item`.
- Esse objeto é enviado para `todo.addItem(item)`.
- Ao final, uma mensagem de sucesso é exibida.

#### Implementando o comando `list`

```typescript
if (command === "list") {
  const items = await todo.getItems();

  if (items.length === 0) {
    console.log("Nenhum item na lista.");
    process.exit(0);
  }

  console.log("Lista de itens:");
  items.forEach((item, index) => console.log(`${index}: ${item.toJSON().description}`));
  process.exit(0);
}
```

Entendendo a lógica do comando `list`:

- O programa solicita os itens por meio de `await todo.getItems()`.
- Se a lista estiver vazia, mostra a mensagem correspondente.
- Caso haja itens, percorre o array com `forEach()`.
- Cada item é exibido usando `item.toJSON().description`, pois a descrição está encapsulada dentro do objeto `Item`.

#### Comandos `update` e `remove`

No código atual, os blocos desses comandos já estão reservados, mas ainda não foram implementados:

```typescript
if (command === "update") {
  // ...
}

if (command === "remove") {
  // ...
}
```

Isso é útil para mostrar que a estrutura da aplicação já está preparada para evoluir. A lógica de negócios necessária já existe em `core.ts`, por meio dos métodos `updateItem()` e `removeItem()`. O próximo passo seria completar a interface do terminal para receber os argumentos, validar os dados e chamar esses métodos.

#### Lógica para comando desconhecido

```typescript
console.error("Comando desconhecido. Use 'add', 'list', 'update' ou 'remove'.");
process.exit(1);
```

Se o comando informado não corresponder a nenhuma das opções tratadas, a aplicação exibe uma mensagem de erro e encerra a execução.

@## Como executar a aplicação nesta Parte 2

Como agora o caminho do arquivo é informado no terminal, os comandos passam a seguir este formato:

- `bun cli.ts lista.json add "Minha nova tarefa"`: adiciona um item ao arquivo `lista.json`
- `bun cli.ts lista.json list`: lista os itens armazenados no arquivo `lista.json`

> [!NOTE]
> No estado atual do código, apenas os comandos `add` e `list` estão implementados em `cli.ts`. Os métodos de atualização e remoção já existem na classe `ToDo`, mas a interface de terminal para esses comandos ainda precisa ser concluída.

#### Resumo da Parte 2

Ao final desta etapa, terão sido praticados os seguintes aspectos:

1. Criação de classes em TypeScript.
2. Uso de propriedades e métodos com encapsulamento.
3. Instanciação de objetos com `new`.
4. Organização da lógica de persistência dentro de uma classe.
5. Separação entre modelagem dos dados (`Item`), gerenciamento da lista (`ToDo`) e interface de terminal (`cli.ts`).
6. Uso de um arquivo JSON informado dinamicamente no terminal.

Com essa base, a aplicação fica mais preparada para crescer. Nas próximas evoluções, é natural adicionar mais dados aos itens, como status, data de criação, prioridade ou suporte a múltiplas operações completas no CLI.

#### Atividade de verificação de conhecimento

Recomenda-se a leitura do código da Parte 2 e a conclusão da interface de terminal, de modo a acompanhar a modelagem orientada a objetos. Algumas sugestões:

- Implementar os comandos `update` e `remove` no `cli.ts`
- Adicionar status de concluído ou pendente à classe `Item`
- Criar um método para marcar um item como concluído
- Implementar múltiplas listas com nomes diferentes de arquivos JSON
- Adicionar um comando para buscar itens por descrição usando `findItemByDescription()`
- Melhorar a exibição dos itens no terminal

O ponto principal desta Parte 2 é perceber como a orientação a objetos reorganiza o mesmo problema da Parte 1 em torno de classes e objetos, deixando o código mais preparado para futuras extensões.

### Atividade 1 / Parte 3: Aplicação RestAPI - com orientação a objetos

Nesta parte, o foco é expandir a aplicação de gerenciamento de tarefas para a plataforma web, transformando-a em uma aplicação cliente-servidor. A lógica de negócios orientada a objetos desenvolvida na Parte 2 será mantida e reutilizada no servidor, enquanto uma interface web será criada para permitir que os usuários interajam com a aplicação através de um navegador.

A aplicação será estruturada da seguinte forma:

- **Backend (servidor)**: Utilizando TypeScript e um framework web leve (como Elysia ou similar), o servidor implementará uma API REST que expõe os mesmos comandos da aplicação CLI (adicionar, listar, atualizar e remover itens).
- **Reutilização da classe `ToDo`**: A classe desenvolvida na Parte 2 será importada e utilizada no servidor para gerenciar a persistência dos dados.

> [!NOTE]
> Nesta etapa, o foco é consolidar a API REST e suas operações. A interface web (frontend) será implementada na próxima parte do curso, utilizando HTML, CSS e JavaScript para consumir a API criada aqui. Por hora os testes podem ser feitos utilizando o plugin do vscode "Thunder Client" ou ferramentas como Postman para enviar requisições HTTP ao servidor.

#### Arquivos necessários

Para esta parte, serão necessários os seguintes arquivos:

- `core.ts` (mantido da Parte 2, com a classe `Item` e `ToDo`)
- `server.ts` (novo arquivo com a lógica do servidor REST)

> [!NOTE]
> Os arquivos `index.html`, `style.css` e `app.js` (frontend) serão implementados na próxima parte do curso. Nesta etapa, o foco é consolidar a API REST e suas operações.

#### O arquivo `server.ts` (servidor REST)

O servidor REST deve expor as seguintes rotas:

- `GET /items`: retorna a lista de todos os itens
- `POST /items`: adiciona um novo item à lista (recebe JSON com a descrição)
- `PUT /items?index=0`: atualiza um item existente (recebe JSON com a nova descrição)
- `DELETE /items?index=0`: remove um item da lista

> [!NOTE]
> **Revisão: Protocolo HTTP**
> 
> As rotas acima utilizam métodos HTTP padrão (GET, POST, PUT, DELETE) e códigos de status HTTP para comunicação cliente-servidor. Para uma compreensão mais completa sobre o protocolo HTTP, métodos de requisição, códigos de status e headers, consulte a documentação da MDN:
> - [Visão Geral HTTP (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)
> - [Métodos de Requisição HTTP (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
> - [Códigos de Status HTTP (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

A seguir, um exemplo de implementação básica do servidor usando Bun:

```typescript
import { ToDo } from "./core";
import { Item } from "./core";

const filepath = "./lista.json";
const todo = new ToDo(filepath);
const port = 3000;

const server = Bun.serve({
  port: port,
  async fetch(request: Request) {
    const url = new URL(request.url);
    const method = request.method;
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    // GET /items - listar todos os itens
    if (pathname === "/items" && method === "GET") {
      const items = await todo.getItems();
      const itemsData = items.map(item => item.toJSON());
      return new Response(JSON.stringify(itemsData), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // POST /items - adicionar novo item
    if (pathname === "/items" && method === "POST") {
      try {
        const body = await request.json();
        const { description } = body;
        
        if (!description) {
          return new Response(JSON.stringify({ error: "Description is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        const item = new Item(description);
        await todo.addItem(item);
        
        return new Response(JSON.stringify({ message: "Item added successfully", item: item.toJSON() }), {
          status: 201,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to add item" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // PUT /items?index=0 - atualizar item
    if (pathname === "/items" && method === "PUT") {
      try {
        const index = parseInt(searchParams.get("index") || "");
        
        if (isNaN(index)) {
          return new Response(JSON.stringify({ error: "Invalid index parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        const body = await request.json();
        const { description } = body;

        if (!description) {
          return new Response(JSON.stringify({ error: "Description is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        const item = new Item(description);
        await todo.updateItem(index, item);

        return new Response(JSON.stringify({ message: "Item updated successfully", item: item.toJSON() }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to update item" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // DELETE /items?index=0 - remover item
    if (pathname === "/items" && method === "DELETE") {
      try {
        const index = parseInt(searchParams.get("index") || "");
        
        if (isNaN(index)) {
          return new Response(JSON.stringify({ error: "Invalid index parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        await todo.removeItem(index);
        
        return new Response(JSON.stringify({ message: "Item removed successfully" }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to remove item" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
});

console.log(`Servidor rodando em http://localhost:${port}`);
```

Entendendo o servidor:

- O servidor é inicializado com `Bun.serve()` na porta 3000.
- Cada rota é verificada pela combinação de `pathname` e `method`.
- O método `request.json()` extrai os dados da requisição.
- Cada resposta retorna um JSON com status HTTP apropriado (200, 201, 400, 404, 500).
- Os arquivos estáticos (`index.html` e `style.css`) são servidos automaticamente.

#### Testando a API REST com Thunder Client

Nesta parte, não implementaremos a interface web (HTML, CSS, JavaScript) ainda. Em vez disso, testaremos a API REST usando a extensão **Thunder Client** no VS Code, o que permite validar todos os endpoints antes de criar a interface web.

**Como instalar e usar Thunder Client:**

1. Instale a extensão **Thunder Client** no VS Code (procure por "Thunder Client" no marketplace)
2. Após instalar, abra a extensão e crie uma nova requisição

**Testes recomendados:**

**1. Listar todos os itens (GET /items)**
- Método: `GET`
- URL: `http://localhost:3000/items`
- Resultado esperado: Uma lista de itens em JSON (ou lista vazia se nenhum item foi adicionado)

**2. Adicionar um novo item (POST /items)**
- Método: `POST`
- URL: `http://localhost:3000/items`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "description": "Primeira tarefa"
}
```
- Resultado esperado: Status 201 com mensagem de sucesso e o item criado

**3. Adicionar outro item (POST /items)**
- Método: `POST`
- URL: `http://localhost:3000/items`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "description": "Segunda tarefa"
}
```

**4. Listar novamente para verificar (GET /items)**
- Deve retornar os dois itens adicionados

**5. Atualizar um item (PUT /items/0)**
- Método: `PUT`
- URL: `http://localhost:3000/items/0`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "description": "Primeira tarefa - ATUALIZADA"
}
```
- Resultado esperado: Status 200 com mensagem de sucesso

**6. Remover um item (DELETE /items/1)**
- Método: `DELETE`
- URL: `http://localhost:3000/items/1`
- Resultado esperado: Status 200 com mensagem de sucesso

**7. Listar novamente para confirmar a remoção (GET /items)**
- Deve retornar apenas um item (o primeiro, modificado)

**Testando erros:**

**8. Tentar adicionar sem descrição (POST /items)**
- Body (JSON):
```json
{
  "description": ""
}
```
- Ou: Body vazio `{}`
- Resultado esperado: Status 400 com mensagem de erro

**9. Tentar acessar rota inexistente (GET /invalid)**
- Resultado esperado: Status 404 com mensagem de erro

## Como executar a aplicação na Parte 3

1. Certifique-se de que todos os arquivos estão na pasta do projeto:
   - `core.ts` (reutilizado da Parte 2)
   - `server.ts` (novo)

2. Para iniciar o servidor, execute o seguinte comando no terminal:
   ```bash
   bun server.ts
   ```
   ou se preferir adicione `--watch` para reiniciar o servidor automaticamente sempre que um arquivo do projeto for modificado:
   ```bash
   bun --watch server.ts
   ```

3. O servidor estará disponível em `http://localhost:3000`

> [!TIP]
> **Como copiar os arquivos gerados completos:**
> 
> Para reutilizar os arquivos já desenvolvidos:
> 1. Copie o arquivo `core.ts` da Parte 2 para o diretório da Parte 3
> 2. Crie os novos arquivos (`server.ts`, `index.html`, `style.css`, `app.js`) conforme o código completo apresentado acima
> 3. Coloque todos os arquivos no mesmo diretório do projeto
> 4. Execute `bun server.ts` para iniciar a aplicação web
> 
> Alternativamente, você pode clonar ou copiar todo o projeto da Parte 2 e adicionar apenas os novos arquivos necessários para a Parte 3.

#### Resumo da Parte 3

Ao final desta etapa, terão sido praticados os seguintes aspectos:

1. Criação de um servidor REST utilizando Bun
2. Reutilização de código orientado a objetos em novos contextos
3. Implementação de uma API REST com operações CRUD (Create, Read, Update, Delete)
4. Comunicação cliente-servidor via HTTP e JSON
5. Tratamento de erros em operações assíncronas
6. Testes de endpoints REST usando ferramentas como Thunder Client, Postman ou Insomnia.

#### Atividade de verificação de conhecimento

**Atividade de Fixação: Extensão da API REST**

Implemente as seguintes melhorias na sua aplicação para reforçar os conceitos de REST:

1. **Adicione validação de campos**: Implemente validação nos endpoints para garantir que os dados enviados possuem os campos obrigatórios e tipos corretos. Retorne um código de status `400 (Bad Request)` quando a validação falhar.

2. **Implemente paginação**: Modifique o endpoint GET `/contatos` para aceitar parâmetros de query `?page=1&limit=10`, retornando apenas os registros solicitados.

3. **Adicione filtros REST**: Crie um novo endpoint `/contatos/buscar?nome=...` para filtrar contatos por nome usando a API REST.

4. **Implemente tratamento de conflitos**: No endpoint PUT ou PATCH, adicione validação para evitar sobrescrever dados e retorne `409 (Conflict)` quando necessário.

5. **Adicione logging de requisições**: Crie um middleware que registra em console cada requisição recebida (método, endpoint, status da resposta) para fins de debugging.

**Desafio extra**: Implemente autenticação básica (HTTP Basic Auth) em alguns endpoints, exigindo um token ou credencial simples.

O ponto principal desta Parte 3 é compreender como reutilizar código orientado a objetos em uma arquitetura cliente-servidor, observando a separação clara entre lógica de negócios (backend) e apresentação (frontend). A aplicação agora é acessível via navegador web, oferecendo uma experiência mais intuitiva para o usuário final.
