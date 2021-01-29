class CalcualtorLogic {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    add() {
        console.log(this.number1 + this.number2)
    };
    subtract() {
        console.log(this.number1 - this.number2)
    };
    divide() {
        console.log(this.number1 / this.number2)
    }
    multiply() {
        console.log(this.number1 * this.number2)
    };
};
let firstCalculation = new CalcualtorLogic(1, 2)
firstCalculation.add();
firstCalculation.subtract();
firstCalculation.divide();
firstCalculation.multiply();