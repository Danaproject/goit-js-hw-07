const categoryRef = document.querySelector('#categories');

console.log(`В списке ${categoryRef.children.length} категории.`);

for (let i = 1; i < categoryRef.children.length+1; i+=1) {
    const titleRef = document.querySelector(`#categories > li:nth-child(${i}) > h2`)
    console.log(`Категория: ${titleRef.textContent}`);

    const itemsRef = document.querySelectorAll(`#categories > li:nth-child(${i}) > ul > li`);
    console.log(`Количество элементов:  ${itemsRef.length}`);
}
