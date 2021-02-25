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
        // const row4 = this.getButtonsRow(["0", ".", "±"]);
        const row5 = this.getButtonsRow2(["*", "+", "-"]);
        // const row6 = this.getButtonsRow(["/", "=", "Clear"]);
        wrapperDiv.appendChild(row1);
        wrapperDiv.appendChild(row2);
        wrapperDiv.appendChild(row3);
        // wrapperDiv.appendChild(row4);
        wrapperDiv.appendChild(row5);
        // wrapperDiv.appendChild(row6);
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
    getButtonsRow2(buttons) {
        const div = document.createElement("div");
        for (let button of buttons) {
            var buttonElement = document.createElement("button");
            buttonElement.dataset.operator = button;
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