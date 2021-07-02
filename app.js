const livros = require('./database') // Pegar os dados do database.js
const readline = require('readline-sync') // Pegar o Input do package-lock.json

console.log('Olá, bem vindo a livraria!\n') // Apresentação

const entradaInicial = readline.question('Deseja buscar um livro? S/N:\n ') 

if (entradaInicial.toLocaleUpperCase() === 'S') { // Se for S, mostra as categorias disponíveis
    console.log('Essas são as categorias disponíveis:\n')
    console.log('Fantasia', '/ Autoajuda','/ Américas','/ Religião','/ Design\n')

    const escolherCategoria = readline.question('Qual categoria você escolhe?\n')

    const retorno = livros.filter(livro => livro.categoria === escolherCategoria)

    console.table(retorno)
} else {
    console.log('Esses são todos os livros disponíveis:\n')
    console.table(livros)
}