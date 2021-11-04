const categoriesEl = document.querySelectorAll(".item");
const sumCategoriesEl = categoriesEl.length;

const categoriesTitleEl = document.querySelectorAll(".item h2");
const listEl = document.querySelectorAll(".item > h2 + ul");

console.log("Number of categories: ", sumCategoriesEl);
console.log("Category: ", categoriesTitleEl[0].textContent);
console.log("Elements: ", listEl[0].children.length);
console.log("Category: ", categoriesTitleEl[1].textContent);
console.log("Elements: ", listEl[1].children.length);
console.log("Category: ", categoriesTitleEl[2].textContent);
console.log("Elements: ", listEl[2].children.length);
