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
        const resultDiv = document.createElement('div');
        wrapperDiv.classList.add("wrapper");
        resultDiv.classList.add("result");
        resultDiv.id = "result";
        wrapperDiv.appendChild(resultDiv);
    };
}
// const calculator1 = new Calculator();