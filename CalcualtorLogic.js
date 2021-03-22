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
    operator = null;
    lastButtonClicked = null;


    constructor(selector) {
        this.hostElem = document.querySelector(selector);
        this.onButtonNumberClick = this.onButtonNumberClick.bind(this);
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
        wrapperDiv.appendChild(row1);
        wrapperDiv.appendChild(row2);
        wrapperDiv.appendChild(row3);
        const div4 = document.createElement("div");
        const button0 = document.createElement("button");
        button0.dataset.number = "0";
        button0.classList.add("button");
        const button0Text = document.createTextNode("0");
        button0.appendChild(button0Text);
        button0.addEventListener("click", this.onButtonNumberClick);
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
        const row4 = this.getOperatorsRow(["*", "+", "-"]);
        wrapperDiv.appendChild(row4);
        const dividingButton = document.createElement("button");
        dividingButton.classList.add("button");
        const dividingButtonText = document.createTextNode("/");
        dividingButton.appendChild(dividingButtonText);
        wrapperDiv.appendChild(dividingButton);
        dividingButton.addEventListener("click", this.onOperatorButtonClick);
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
            buttonElement.addEventListener("click", this.onButtonNumberClick);
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
            buttonElement.addEventListener("click", this.onOperatorButtonClick);
        }
        return div
    };
    onButtonNumberClick(event) {
        if (this.lastButtonClicked === "operator") this.currentResult = "";
        const currentResultAndclickedNumButton = this.currentResult + event.target.dataset.number;
        this.currentResult = currentResultAndclickedNumButton;
        this.updateResultElement();
    }
    updateResultElement() {
        this.resultElement.textContent = this.currentResult;
    }
    onOperatorButtonClick(event) {
        // defining new variable ;
        const clkedOperButnValue1;
        // defining another variable and assigning its value to the clicked operator button;
        const clkedOperButn = event.target.dataset.operator;
        // assigning variable operator property to the clicked operator button
        this.operator = clkedOperButn;
        // assigning a property (flag) as last button clicked which has "operator" as a name 
        this.lastButtonClicked = "operator"
            // defining new variable and assigning it to  query selector by class name;
        let clkedOperButnValue = document.querySelector(".button");
        // assigning clkedOperButnValue1 to the clkedOperButnValue's value
        clkedOperButnValue1 = clkedOperButnValue.innerHTML;
        // saving the current result property in a new property has (this.currentResult) as a name 
        this.currentResult = currentResult;
    }
}
const calculator1 = new Calculator(".wrapper");
calculator1.render();
// calculator1.updateResultElement()