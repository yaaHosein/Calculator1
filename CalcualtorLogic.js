class CalculatorLogic {
    add(number1, number2) {
        let result = number1 + number2;
        return result;
    };
    subtract(number1, number2) {
        let result = number1 - number2;
        return result;
    };
    multiply(number1, number2) {
        let result = number1 * number2;
        return result;
    };
    divide(number1, number2) {
        let result = number1 / number2;
        return result;
    };
};

let calculatorLogic = new CalculatorLogic();
calculatorLogic.add();
calculatorLogic.subtract();
calculatorLogic.multiply();
calculatorLogic.divide();


class Calculator {
    constructor(selector) {
        this.hostElem = document.querySelector(selector);
    };
    render() {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add("wrapper");
        const resultDiv = document.createElement('div');
        resultDiv.classList.add("result");
        resultDiv.id = "result";
        wrapperDiv.appendChild(resultDiv);
        const row1 = this.getButtonsRow(["7", "8", "9"]);
        const row2 = this.getButtonsRow(["4", "5", "6"]);
        const row3 = this.getButtonsRow(["1", "2", "3"]);
        wrapperDiv.appendChild(row1);
        wrapperDiv.appendChild(row2);
        wrapperDiv.appendChild(row3);
        const div4 = document.createElement("div");
        const button0 = document.createElement("button");
        button0.dataset.number = "0";
        button0.classList.add("button");
        const button0Text = document.createTextNode("0");
        button0.appendChild(button0Text);
        const periodButton = document.createElement("button");
        periodButton.classList.add("button");
        const periodButtonText = document.createTextNode(".");
        periodButton.appendChild(periodButtonText);
        const negativeValueButton = document.createElement("button");
        negativeValueButton.classList.add("button");
        const negativeValueButtonText = document.createTextNode("±");
        negativeValueButton.appendChild(negativeValueButtonText);
        div4.appendChild(button0);
        div4.appendChild(periodButton);
        div4.appendChild(negativeValueButton);
        wrapperDiv.appendChild(div4);
        const div5 = document.createElement("div");
        const multiplyingButton = document.createElement("button");
        multiplyingButton.dataset.operator = "*";
        multiplyingButton.classList.add("button");
        const multiplyingButtonText = document.createTextNode("*");
        multiplyingButton.appendChild(multiplyingButtonText)
        const addingButton = document.createElement("button");
        addingButton.dataset.operator = "+";
        addingButton.classList.add("button");
        const addingButtonText = document.createTextNode("+");
        addingButton.appendChild(addingButtonText)
        const subtractingButton = document.createElement("button");
        subtractingButton.dataset.operator = "-";
        subtractingButton.classList.add("button");
        const subtractingButtonText = document.createTextNode("-");
        subtractingButton.appendChild(subtractingButtonText);
        div5.appendChild(multiplyingButton);
        div5.appendChild(addingButton);
        div5.appendChild(subtractingButton);
        wrapperDiv.appendChild(div5);
        const div6 = document.createElement("div");
        const dividingButton = document.createElement("button");
        dividingButton.dataset.operator = "/";
        dividingButton.classList.add("button");
        const dividingButtonText = document.createTextNode("/");
        dividingButton.appendChild(dividingButtonText);
        const equalButton = document.createElement("button");
        equalButton.classList.add("button");
        const equalButtonText = document.createTextNode("=");
        equalButton.appendChild(equalButtonText);
        const clearingButton = document.createElement("button");
        clearingButton.classList.add("button");
        const clearingButtonText = document.createTextNode("Clear");
        clearingButton.appendChild(clearingButtonText)
        div6.appendChild(dividingButton);
        div6.appendChild(equalButton);
        div6.appendChild(clearingButton);
        wrapperDiv.appendChild(div6);
        this.hostElem.appendChild(wrapperDiv);
    };
    getButtonsRow(buttons) {
        const div = document.createElement("div");
        for (let button of buttons) {
            var buttonElement = document.createElement("button");
            buttonElement.dataset.number = button;
            buttonElement.classList.add("button");
            const buttonElementText = document.createTextNode(button);
            buttonElement.appendChild(buttonElementText);
            div.appendChild(buttonElement);
        }
        return div
    }
};

const calculator1 = new Calculator(".wrapper");
calculator1.render();