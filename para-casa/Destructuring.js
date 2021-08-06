//Destructuring - Desestruturação:

//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove({ clientX, clientY }){
  console.log(clientX, clientY)
}
  
//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
const [ ...primeiro, values ] = obj
  
//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

const {
  name,
  products: {
    shirts: {
      colors
    },
    socks: {
      colors
    },
  }
} = company