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
        this.selector = document.querySelector("#hostElement");
        // this.selector.innerHTML = `<div><h2>Calcualtor</h2></div>`
    };
    // render() {};
}

// const calcualtor1.render = new Calculator("#hostElement");
// const calcualtor2.render = new Calcualtor(".button");