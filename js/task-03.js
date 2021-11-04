const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = images.map((image, index) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = images[index].url;
  imgEl.alt = images[index].alt;
  imgEl.width = 400;
  itemEl.classList.add("item");
  itemEl.append(imgEl);
  return itemEl;
});

console.log(...galleryEl);

const listEl = document.querySelector(".gallery");
listEl.append(...galleryEl);
