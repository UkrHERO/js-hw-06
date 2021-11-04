const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onRangeSize);

function onRangeSize() {
  textEl.style.fontSize = inputEl.value + "px";
}
