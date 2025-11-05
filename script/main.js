const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const clear =  document.querySelector("#clear");
const backspace =  document.querySelector("#backspace");
const display = document.querySelector("#display");
const equalSign = document.querySelector("#equalSign");
const errorPara = document.querySelector(".error");

const expression = [];

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.value += number.textContent;
        expression.push(number.textContent);
    });
});

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        if (operand.textContent !== "=") {
            display.value += operand.textContent;
            expression.push(operand.textContent);
        }
    });
})

clear.addEventListener("click", () => {
    display.value = "";
    expression.length = 0;
});

backspace.addEventListener("click", () => {
    display.value = String(display.value).slice(0, -1);
    expression.pop();
})

// Kind proud of this not gonna lie!
// TODO: Implement float operations
// TODO: Keyboard support
// TODO: Fix possible bugs
const calculate = () => {
    if (expression.length === 0) {
        errorPara.textContent = "Enter a valid expression!";
        return;
    }

    if (expression.includes(".")) {
        errorPara.textContent = "Float operations '  .  ' <---- not implemented yet! Reload the page and try again."
        display.value = "";
        return;
    }

    // Since the expression is aways suposed to start with a number we store right now
    let result = parseInt(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
        // Get the first operator after the initial number
        const operator = expression[i];
        const nextNumber = parseInt(expression[i + 1]);

        switch (operator) {
            case "+":
                result += nextNumber;
                break;

            case "-":
                result -= nextNumber;
                break;
            
            case "x":
                result *= nextNumber;
                break;

            case "÷":
                result /= nextNumber;
                break;
            
            default:
                display.value = "";
                errorPara.textContent = "Invalid operation or expression!"
                return;
        }
    }
    
    
    expression.length = 0;
    expression.push(result);
    display.value = result;

}

equalSign.addEventListener("click", calculate);