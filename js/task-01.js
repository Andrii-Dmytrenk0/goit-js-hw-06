const itemNameList = document.querySelector("ul");

console.log('Number of categories:', itemNameList.childElementCount);
// console.log(itemNameList.children.length);

/////////////////////////////////////////////////////////////

const itemFirstTitleName = document.querySelector(".item");
console.log("Category:", itemFirstTitleName.firstElementChild.textContent);
const itemTitleList = itemFirstTitleName.querySelector('ul');
console.log("Elements:", itemTitleList.childElementCount);

/////////////////////////////////////////////////////////////

const itemTwoTitleName = document.querySelectorAll(".item");
const TwoItem = itemTwoTitleName[1];
console.log("Category:", TwoItem.firstElementChild.textContent);
const twoItemsList = TwoItem.querySelector('ul');
console.log("Elements:", twoItemsList.childElementCount);

/////////////////////////////////////////////////////////////

const itemThreeTitleName = document.querySelectorAll(".item");
const threeItem = itemThreeTitleName[2];
console.log("Category:", threeItem.firstElementChild.textContent);
const threeItemsList = threeItem.querySelector('ul');
console.log("Elements:", threeItemsList.childElementCount);
