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

const galleryEl = images
  .map((image, index) => {
    return `<li class='item' style='list-style: none;'>
  <img src='${images[index].url}' alt='${images[index].alt}' width='400' style='border-radius: 20px'>
    </li>`;
  })
  .join("");

console.log(...galleryEl);

const listEl = document.querySelector(".gallery");

listEl.insertAdjacentHTML("beforeend", galleryEl);
