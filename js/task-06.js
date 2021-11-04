const inputEl = document.querySelector("#validation-input");
const validLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", lostFosus);

function lostFosus() {
  if (inputEl.value.length < validLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
