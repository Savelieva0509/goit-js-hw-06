const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElContainer = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = option;

  return ingredientsEl;
})

console.log(elements);

ingredientsElContainer.append(...elements)