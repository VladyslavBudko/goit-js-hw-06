const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

// const elements = ingredients.map((item) => {

//   const titleEl = document.createElement("li");
//   titleEl.classList.add("item");
//   titleEl.textContent = item;

//   return titleEl;
// });

// ingredientsEl.append(...elements);

const makeIngredientsFn = (options) => {
  return options.map((option) => {
    const titleEl = document.createElement("li");
    titleEl.classList.add("item");
    titleEl.textContent = option;

    return titleEl;
  });
};
const elements = makeIngredientsFn(ingredients);
ingredientsEl.append(...elements);
