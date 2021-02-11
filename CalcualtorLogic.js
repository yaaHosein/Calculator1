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
        // this.selector = document.querySelectorAll(".button")
        this.selector = document.querySelector(selector);
        this.selector.innerHTML = `
            <div>
                <h2>
                    Calcualtor
                </h2>
            </div>
            `
    };
}

const calc1 = new Calculator(".foo");
const calc2 = new Calculator("#baz");
const calc3 = new Calculator("#hostElement");

// let calcualtor = new Calcualtor(".button");