// Faça fetch dos dados através da API e retorne a ficha desta refeição com: 
// id, nome, área (país de origem), ingredientes (em uma única string) e as intruções:

const fetch = require('node-fetch')

function strIngredientes(param){
    let ingredientes = []

    Object.entries(param).forEach(([key, value]) => {
        if(key.startsWith('strIngredient') && value){
            ingredientes.push(value)
        }
    })
    return ingredientes.join(', ')
}

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
.then(resp => {
    if(resp.ok){
        return resp.json()
    }
})
.then(data => {
    const element = data.meals[0]

    console.log({
        Nome: element.strMeal,
        ID: element.idMeal,
        País: element.strArea,
        Ingredientes: strIngredientes(element),
        Instruções: element.strInstructions
    })
})