const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrid = ingredients.map((item, index) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredients[index];
  return itemEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...ingrid);
