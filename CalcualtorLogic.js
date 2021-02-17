let hostElem;
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
calcualtorLogic.add();
calcualtorLogic.subtract();
calcualtorLogic.multiply();
calcualtorLogic.divide();


class Calculator {
    constructor(selector) {
        hostElem = document.querySelector(selector);
        this.hostElem.innerHTML = ;
    };
    render() {};
}

const calculator1 = new Calculator();
calculator1.render();