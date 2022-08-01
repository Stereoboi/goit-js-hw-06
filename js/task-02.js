const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getId = document.querySelector("#ingredients");

 const elements = ingredients.map((ingredient) => {

  const listRef = document.createElement('li');
    listRef.textContent = ingredient;
    listRef.classList.toggle('item');
    return listRef
  });
  
getId.append(...elements)


