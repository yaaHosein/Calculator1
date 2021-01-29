class CalcualtorLogic(number1, number2) {

    this.number1 = number1;
    this.number2 = number2;

    add(number1, number2) {
        return (this.number1 + this.number2)
    };
    // subtract(number1, number2) {
    //     return (this.number1 - this.number2)
    // };
    // divide(number1, number2) {
    //     return (this.number1 / this.number2)
    // }
    // multiply(number1, number2) {
    //     return (this.number1 * this.number2)
    // };
};
let firstCalculation = new CalcualtorLogic(number1, number2)
firstCalculation.add(1, 2);
// firstCalculation.subtract();
// firstCalculation.divide();
// firstCalculation.multiply();