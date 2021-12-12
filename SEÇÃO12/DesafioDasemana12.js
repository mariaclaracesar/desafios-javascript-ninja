;(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  var person = {
    name: 'Maria',
    lastname: 'Clara',
    age: 18
  }

  console.log('Propriedades de "person":')

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

  console.log(Object.keys(person))

  /*
Crie um array vazio chamado `books`.
*/

  var books = []
  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

  books.push({ name: 'O homem de giz', pages: 356 })
  books.push({ name: 'Um caso perdido', pages: 675 })
  books.push({ name: 'Jantar secreto', pages: 497 })

  console.log('\nLista de livros:')

  /*
Mostre no console todos os livros.
*/
  console.log(books)
  /*
Remova o último livro, e mostre-o no console.
*/
  var lastBook = books.pop()
  console.log('\nLivro que está sendo removido:', lastBook)

  //
  //

  console.log('\nAgora sobraram somente os livros:', books)
  /*
Mostre no console os livros restantes.

  // ?


Converta os objetos que ficaram em `books` para strings.
*/
  // ?
  books = JSON.stringify(books)
  console.log('\nLivros em formato string:')
  console.log(books)

  /*
Mostre os livros nesse formato no console:
*/
  // ?

  /*
Converta os livros novamente para objeto.
*/
  // ?

  console.log('\nAgora os livros são objetos novamente:')
  books = JSON.parse(books)
  console.log(books)

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  for (var i = 0; i < Object.keys(books).length; i++) {
    for (var prop in books[i]) {
      console.log(prop + ': ' + books[i][prop])
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  var myName = ['M', 'a', 'r', 'i', 'a']

  console.log('\nMeu nome é:', myName.join(''))

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  // ?

  console.log('\nMeu nome invertido é:', myName.reverse().join(''))

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  // ?

  console.log('\nAgora em ordem alfabética:', myName.sort())
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  // ?
})()
