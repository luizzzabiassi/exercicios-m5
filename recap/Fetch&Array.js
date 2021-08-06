// Faça fetch dos dados através da API e retorne uma lista(array) com os nomes dos primeiros 10 resultados:

const fetch = require('node-fetch')

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
.then(resp => {
  return resp.json()
  .then(element => {
    console.log(element.meals.slice(0, 10))
  })
})