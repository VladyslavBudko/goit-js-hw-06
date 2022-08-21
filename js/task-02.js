const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map((item) => {
  console.log(item);

  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.textContent = item;

  console.log(titleEl);

  return titleEl;
});

console.log(elements);
ingredientsEl.append(...elements);
