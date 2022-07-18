const ulCategories = document.querySelector("ul#categories");
const listItem = document.querySelectorAll("li.item");
const tagH2 = Array.from(listItem);
console.log(`Number of categories: ${ulCategories.children.length}`);
const mapTagH2 = tagH2.map(element => {
      return console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`);
});