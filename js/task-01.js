
const getNumberOfCategories = document.querySelectorAll('.item');


const getTitle = document.querySelectorAll('.item h2');


const getNumberOfElements = document.querySelectorAll("#categories ul");


function numberOfCategories() {
    console.log(`Number of categories: ${getNumberOfCategories.length}`);
}


function count() {
    const listElementsArr = [];
    getNumberOfElements.forEach((element) => {
      listElementsArr.push(element.children.length) 
    })
    return listElementsArr;
}


function elementsStats() {
    getTitle.forEach((title,index) => {
        console.log(`Category: ${title.textContent}`);
        console.log(`Element: ${count()[index]}`);
    });
}

numberOfCategories();
elementsStats();