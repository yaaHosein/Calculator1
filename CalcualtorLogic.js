class CalcualtorLogic {
    add(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    calculate() {
        console.log(this.number1 + this.number2)
    }
    subtract(number1, number2) { number1 - number2 };
    divide(number1, number2) { number1 / number2 };
    multiply(number1, number2) { number1 * number2 };
};
let firstCalculation = new CalcualtorLogic(1, 2)
    // let firstCalculation = new CalcualtorLogic('1', '2')
firstCalculation.calculate();
console.log(parseInt(firstCalculation));