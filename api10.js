// Faça fetch dos dados através da API e retorne uma lista(array) com os nomes dos primeiros 10 resultados:

const fetch = require('node-fetch')

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
.then(resp => {
    if(resp.ok){
        console.log(resp.meals.slice(0, 10))
    }
    else{
        return console.log("Erro ao fazer requisição.")
    }
})