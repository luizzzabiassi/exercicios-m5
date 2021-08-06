// Arrays e seus métodos:

//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var aoQdrd = numbers.map(Math.sqrt)
  
//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
var vzsDez = numbers.map(element => {
  element * 10
})
  
//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];

const maior18 = value => {
  return value >= 18
}

var dztOuMais = ages.filter(maior18)

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },  
  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  }
];

var dogs = data.filter(value => {
  return value.type === 'dog'
})
  
//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
var somaAges = dogs.reduce((soma, value) => {
  return soma + value.age
}, 0)