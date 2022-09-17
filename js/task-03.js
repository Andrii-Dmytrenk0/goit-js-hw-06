const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const markup = images
  .map((image) => `<li><img class="gallery-items__img" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);


// const aaa = images.flatMap(image => image.url).join('');
// console.log(aaa);

// const bbb = images.flatMap(image => image.alt).join('');
// console.log(bbb);

// const listEl = document.querySelector('.gallery');
  
//   const elList = document.createElement('li');
  
//   const elImg = document.createElement('img');

//   elImg.setAttribute('url', aaa);
//   elImg.setAttribute('alt', bbb);
//   elList.append(elImg);


// // const createCardMarkup = img => {
// //   console.log(img);
// //   return ``;
// // }
// // console.log(images[0]);
// // const createCard = function () {
 
// // }
// // createCard();
// // console.log(listEl);

// listEl.insertAdjacentHTML("afterbegin", elList);
    
// function createCard() {
//   for (i = 0; i < images.length; i += 1) {
//     const asins = images[i];
//     // const elList = document.createElement('li');
//     // const elImg = document.createElement('img');
//     // elImg.setAttribute('url', asins);
//     // elImg.setAttribute('alt', asins);
//     // elList.append(elImg);
//     // listEl.append(elList);
//     // console.log(elList)
//   }
//   console.log(elList)
// }

// console.log(elList)