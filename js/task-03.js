const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Вариант 1. С использованием фрагмента.

// const gallery = document.querySelector(".gallery");

// let fragment = document.createDocumentFragment();

// images.forEach(({url,alt}) => {
//   let li = document.createElement('li');
//   li.className = "flex-cell"
//   li.insertAdjacen+tHTML("afterBegin", `<img src=${url} alt=${alt} width="252" height="150">`)
//   fragment.appendChild(li);
// })

// gallery.appendChild(fragment);  //В DOM вставляется за одно действие.

//Вариант 2. После занятия с ментором.

const gallery = document.querySelector(".gallery");

const markupString = images
  .map(
    ({ url, alt }) =>
      `<li class = "flex-cell"><img src=${url} alt=${alt} width="252" height="150"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markupString);
