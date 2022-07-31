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

// const getId = document.querySelector("#ingredients");



//  const elements = ingredients.((ingredient) => {

//   const listRef = document.createElement('li');
//     listRef.textContent = ingredient;
//    listRef.classList.toggle('item');
//    console.log(listRef);
//     return listRef
//   });
  

// getId.append(elements)


// let ingredientsList = document.getElementById("ingredients");
//   // console.log(ingredientsList);

// const addIngredientToTheList = (ingredients) => {
//   ingredients.forEach(ingredient => {
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.textContent = ingredient;
//   ingredientsItemEl.classList.add('item');
//   // console.log(ingredientsItemEl);

//   ingredientsList.append(ingredientsItemEl);
//   })
  
//   return ingredientsList;
// };

// addIngredientToTheList(ingredients);
  

