const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('#ingredients');

const createIngridient = ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    return itemRef;
};

const ingredientsItems = ingredients.map(ingredient => createIngridient(ingredient));

ingredientsRef.append(...ingredientsItems);

