const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);
outputEl.addEventListener("change", onInputChange);

function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
}
