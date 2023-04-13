const menuItemsByTagName = document.querySelectorAll("li.item");
let outputString =
  "Number of categories:" + menuItemsByTagName.length + "\n".repeat(2);

menuItemsByTagName.forEach((headText) => {
  outputString =
    outputString +
    "Category:" +
    headText.firstElementChild.textContent +
    "\n" +
    "Elements:" +
    headText.querySelectorAll("li").length +
    "\n".repeat(2);
});
console.log(outputString);
