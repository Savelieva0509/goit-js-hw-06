const categoriesList = document.querySelector("#categories")
console.log(`Number of categories: ${categoriesList.children.length}`);

const categoriesItems = document.querySelectorAll(".item")

categoriesItems.forEach(item => {
    const titleEl = item.firstElementChild.textContent

    console.log(`Category: ${titleEl}`);

    const itemList = item.querySelectorAll("li")

    console.log(`Elements: ${itemList.length}`);
}

)