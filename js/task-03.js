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

// const galleryContainerEl = document.querySelector(".gallery")

// const galleryEl = images.map(element => {
//   const itemEl = document.createElement("li")
//   const imgEl = document.createElement("img")
//   imgEl.alt = element.alt;
//   imgEl.src = element.url;
//   itemEl.append(imgEl);

//   return itemEl;

// })
// galleryContainerEl.append(...galleryEl);
// console.log(galleryContainerEl);
  
const galleryContainerEl = document.querySelector(".gallery")

const galleryEl = images.map(({ alt, url }) => {
  return `<li><img src="${url}" alt="${alt}" class = "gallery__item"> </li>`
})

const markup = galleryEl.join(" ");

galleryContainerEl.insertAdjacentHTML("beforeend", markup);
console.log(galleryContainerEl);