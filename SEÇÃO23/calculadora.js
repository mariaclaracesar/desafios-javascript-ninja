;(function (win, doc) {
  'use strict '

  // criando os eventos
  var $visor = doc.querySelector('[data-js="visor"]')
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]')
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]')
  var $buttonCE = doc.querySelector('[data-js="button-ce"]')
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]')

  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    button.addEventListener('click', handleClickNumber, false)
  })
  Array.prototype.forEach.call($buttonsOperations, function (button) {
    button.addEventListener('click', handleClickOperation, false)
  })
  $buttonCE.addEventListener('click', handleClickCE, false)
  $buttonEqual.addEventListener('click', handleClickEqual, false)

  // concatenando os numeros no visor
  function handleClickNumber() {
    $visor.value += this.value
  }

  // concatenando as operações
  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value)
    $visor.value += this.value
  }

  // apagando os numeros selecionados do visor
  function handleClickCE() {
    $visor.value = 0
  }

  // trocando e adicionando o operador e deixando um só
  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷']
    var lastItem = number.split('').pop()
    return operations.some(function (operator) {
      return operator === lastItem
    })
  }

  function removeLastItemIfItIsAnOperator(number) {
    if (isLastItemAnOperation(number)) {
      return number.slice(0, -1)
    }
    return number
  }

  // clicando no botão igual e somando todos os valores
  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value)
    var allValues = $visor.value.match(/\d+[+x÷-]?/g)
    $visor.value = allValues.reduce(function (accumulated, actual) {
      var firstValue = accumulated.slice(0, -1)
      var operator = accumulated.split('').pop()
      var lastValue = removeLastItemIfItIsAnOperator(actual)
      var lastOperator = isLastItemAnOperation(actual)
        ? actual.split('').pop()
        : ''
      switch (operator) {
        case '+':
          return Number(firstValue) + Number(lastValue) + lastOperator
        case '-':
          return Number(firstValue) - Number(lastValue) + lastOperator
        case 'x':
          return Number(firstValue) * Number(lastValue) + lastOperator
        case '÷':
          return Number(firstValue) / Number(lastValue) + lastOperator
      }
    })
  }
})(window, document)
