const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Вариант 1 (с использованием document.createElement, как в задании)

const idIngredients = document.querySelector("ul#ingredients");
const itemArray = [];
ingredients.forEach(item => { 
let veget = document.createElement("li");  
    veget.textContent = item;
    veget.classList.add("item");
    itemArray.push(veget)
  })
idIngredients.append(...itemArray); // (вставка в DOM за одно действие):
  
// console.log("idIngredients:", idIngredients)


//Вариант 2 (после занятиия с ментором  :-) ) 
  
// document.querySelector("ul#ingredients").
//   insertAdjacentHTML("afterbegin", ingredients.map(item => 
//   `<li class = 'item'> ${item} </li>`).
//     join(""));
  
// console.log("idIngredients:", idIngredients)
