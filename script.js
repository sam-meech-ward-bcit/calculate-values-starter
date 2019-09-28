const buttons = document.querySelectorAll(".button");
const answerElement = document.querySelector("#answer");
const inputElement = document.querySelector("#input");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    inputElement.innerText += button.innerText;
  });
})