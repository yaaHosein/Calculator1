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
        this.hostElem.appendChild(wrapperDiv);
        const div = document.createElement("div");
        const button7 = document.createElement("button");
        button7.dataset.number = "7";
        button7.classList.add("button");
        const button7Text = document.createDocumentFragment("7");
        button7.appendChild(button7Text);
        const button8 = document.createElement("button");
        button8.dataset.number = "8";
        button8.classList.add("button");
        const button8Text = document.createDocumentFragment("8");
        button8.appendChild(button8Text);
        const button9 = document.createElement("button");
        button9.dataset.number = "9";
        button9.classList.add("button");
        const button9Text = document.createDocumentFragment("9");
        button9.appendChild(button9Text);
        div.appendChild(button7);
        div.appendChild(button8);
        div.appendChild(button9);
        console.log(div)
    };
}
const calculator1 = new Calculator(".wrapper");
calculator1.render();