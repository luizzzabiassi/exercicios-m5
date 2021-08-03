// Faça fetch dos dados através da API e retorne a ficha desta refeição com: 
// id, nome, área (país de origem), ingredientes (em uma única string) e as intruções:

const fetch = require('node-fetch')

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
.then(obj => {
    dados(obj.results)
})

function dados(arr){
    arr.forEach(element => {
        console.log(`Nome: ${element.strMeal} \n ID: ${element.idMeal} \n País: ${element.strArea} \n Ingredientes: ${element} \n Instruções: ${element.strInstructions}`)
    })
}