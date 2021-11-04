{
  const btnMinus = document.querySelector('[data-action="decrement"]');
  const btnPlus = document.querySelector('[data-action="increment"]');
  let counterEl = document.querySelector("#value");

  let counterValue = 0;
  btnPlus.addEventListener("click", onTargetPlus);

  btnMinus.addEventListener("click", onTargetMinus);

  function onTargetPlus() {
    counterValue += 1;
    counterEl.textContent = counterValue;
  }

  function onTargetMinus() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  }
}
