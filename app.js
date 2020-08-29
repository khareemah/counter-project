let number = document.querySelector(".number");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
let numberValue = Number(number.innerHTML);

add.addEventListener("click", function() {
  numberValue = numberValue + 1;
  number.innerHTML = numberValue;
});
subtract.addEventListener("click", function() {
  numberValue--;
  number.innerHTML = numberValue;
});
reset.addEventListener("click", function() {
  number.innerHTML = 0;
});
