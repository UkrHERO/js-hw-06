function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount = inputEl.textContent) {
  for (let i = 0; i <= 10; i += 1) {
    const div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = getRandomHexColor();
    boxesEl.append(div);
  }
}

function destroyBoxes() {}

console.log(inputEl.value.length);
// if (inputEl.textContent > 0 && inputEl.textContent < 100)
