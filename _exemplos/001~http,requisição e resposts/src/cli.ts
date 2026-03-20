import * as list from "./list-functions"

const command = process.argv[2]

if (command === 'create') {
  const value = process.argv[3]
  if (!value) {
    console.error("Create precisa de valor para ser inserido")
    process.exit(1)
  }
  await list.createItem(value)
  console.log("Item adicionado")
  process.exit(0)
}

if (command === 'read') {
  const items = await list.readItems()
  console.log("- "+items.join("\n- "))
  process.exit(0)
}

if (command === 'update') {
  const indexValue = process.argv[3]
  const newValue = process.argv[4]

  if (!indexValue) {
    console.error("Update precisa do index do item a ser excluido")
    process.exit(1)
  }
  const index = parseInt(indexValue)
  if (isNaN(index)) {
    console.error(`Update precisa do index do item a ser excluido, e recebeu o valor: ${indexValue}`)
    process.exit(1)
  }

  if (!newValue) {
    console.error("Update precisa do novo valor do item a ser atualizado")
    process.exit(1)
  }

  console.log(`Atualizado item de index ${index}...`)
  await list.updateItem(index, newValue)
  process.exit(0)
}

if (command === 'delete') {
  const value = process.argv[3]
  
  if (!value) {
    console.error("Delete precisa do index do item a ser excluido")
    process.exit(1)
  }

  const index = parseInt(value)
  if (isNaN(index)) {
    console.error(`Delete precisa do index do item a ser excluido, e recebeu o valor: ${value}`)
    process.exit(1)
  }

  console.log(`Excluido item de index ${index}...`)
  await list.deleteItem(index)
  process.exit(0)
}


// Fallback
console.error(`Comando desconhecido: ${command}`)
process.exit(1)