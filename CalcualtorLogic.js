let hostElem;
class CalcualtorLogic {
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

let calcualtorLogic = new CalcualtorLogic();
calcualtorLogic.add();
calcualtorLogic.subtract();
calcualtorLogic.multiply();
calcualtorLogic.divide();


class Calculator {
    constructor(selector) {
        hostElem = document.querySelector(selector);
        // this.hostElem.innerHTML = ;
    };
    render() {};
}

// const calcualtor1 = new Calculator();
calcualtor1.render();