// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

for (let i = 0; i < ingredients.length; i += 1) {
  const elements = ingredients[i];

  const listElItem = document.createElement('li');
  listElItem.classList.add('item');
  listElItem.textContent = elements;
  
  listEl.append(listElItem);
}
// const listElItem = document.createElement('li');
// listElItem.classList.add('item');
// listElItem.textContent = ingredients[0];

// const listElItem1 = document.createElement('li'); 
// listElItem1.classList.add('item');
// listElItem1.textContent = ingredients[1];

// const listElItem2 = document.createElement('li'); 
// listElItem2.classList.add('item');
// listElItem2.textContent = ingredients[2];

// const listElItem3 = document.createElement('li'); 
// listElItem3.classList.add('item');
// listElItem3.textContent = ingredients[3];

// const listElItem4 = document.createElement('li'); 
// listElItem4.classList.add('item');
// listElItem4.textContent = ingredients[4];

// const listElItem5 = document.createElement('li'); 
// listElItem5.classList.add('item');
// listElItem5.textContent = ingredients[5];

// listEl.prepend(listElItem, listElItem1, listElItem2, listElItem3, listElItem4, listElItem5);

// console.log(listEl);
