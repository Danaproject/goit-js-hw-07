const itemsRef = document.querySelectorAll("#categories > li.item");
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach(item => {
    console.log(`Категория: ${item.children[0].textContent}`);
    console.log(`Количество элементов:  ${item.children[1].children.length}`);
})
