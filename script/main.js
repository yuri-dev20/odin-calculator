const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const clear =  document.querySelector("#clear");
const backspace =  document.querySelector("#backspace");
const display = document.querySelector("#display");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.value += number.textContent;
    });
});

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        display.value += operand.textContent;
    });
})

clear.addEventListener("click", () => {
    display.value = "";
});

backspace.addEventListener("click", () => {
    display.value = String(display.value).slice(0, -1);
})