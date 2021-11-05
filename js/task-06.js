const inputEl = document.querySelector("#validation-input");
const validLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", lostFosus);

function addRemove(add, remove) {
  inputEl.classList.add(add);
  inputEl.classList.remove(remove);
}

function lostFosus() {
  if (inputEl.value.length < validLength) {
    addRemove("invalid", "valid");
  } else {
    addRemove("valid", "invalid");
  }
}
