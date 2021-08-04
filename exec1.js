// Escreva uma função soma que retorna a soma dos números de um array usando spread operator:

var arr = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89]

function soma(){
    return Object.values(arguments).reduce((a, b) => a + b)
}

console.log(soma(...arr))