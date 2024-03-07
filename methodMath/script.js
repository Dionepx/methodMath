/*
  03

  - Exiba o valor do PI no console.
*/

const x = Math.PI
// console.log(x)

/*
  04

  - Arredonde o número que a constante abaixo armazena para 9 e exiba-o no  
    console.
*/

const firstNumber = 8.3

// console.log(Math.ceil(firstNumber))


/*
  05

  - Arredonde o número que a constante abaixo armazena para 4, utilizando a  
    forma padrão, e exiba-o no console.
*/

const secondNumber = 3.4

// console.log(Math.round(secondNumber))


/*
  06

  - Arredonde o número que a constante abaixo armazena para 8 e exiba-o no console.
*/

const thirdNumber = 8.9

// console.log(Math.floor(thirdNumber))

/*
  07

  - Exiba no console o número abaixo com a parte decimal removida.
*/

const fourthNumber = 5.5

// console.log(Math.trunc(fourthNumber))

/*
  08

  - A cada vez que o index.html for carregado, exiba no console um número  
    aleatório de 0 à 10, incluindo 0 e 10.
*/

const randomNumber = Math.random() // numeros aleatorios entre 0 e 1

console.log(Math.round(randomNumber)) // saida: 0 ou 1 sera exibido
console.log(Math.round(randomNumber * 10)) // numero aleatorio de 0 a 10