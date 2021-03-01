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
    currentResult = 0;
    resultElement = null;
    constructor(selector) {
        this.hostElem = document.querySelector(selector);
    };

    render() {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add("wrapper");
        const resultDiv = document.createElement('div');
        resultDiv.classList.add("result");
        resultDiv.id = "result";
        resultDiv.appendChild(
            document.createTextNode(this.currentResult)
        );
        this.resultElement = resultDiv;
        wrapperDiv.appendChild(resultDiv);
        const row1 = this.getButtonsRow(["7", "8", "9"]);
        const row2 = this.getButtonsRow(["4", "5", "6"]);
        const row3 = this.getButtonsRow(["1", "2", "3"]);
        const row4 = this.getOperatorsRow(["*", "+", "-"]);
        wrapperDiv.appendChild(row1);
        wrapperDiv.appendChild(row2);
        wrapperDiv.appendChild(row3);
        wrapperDiv.appendChild(row4);
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
            buttonElement.addEventListener('click', function() {
                if (button === "Operator") { result.textContent = "" };
                this.onButtonNumberClick;
            })
        }
        return div;

    }

    getOperatorsRow(buttons) {
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
    onButtonNumberClick(event) {
            console.log("clickedNumbBtn");
        }
        // onButtonOperatorClick(event){
        // console.log("clickedOpeBtn")
        // }
}

const calculator1 = new Calculator(".wrapper");
calculator1.render();