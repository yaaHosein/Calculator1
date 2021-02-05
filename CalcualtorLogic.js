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
console.log(calcualtorLogic.add(1, 2))
console.log(calcualtorLogic.subtract(1, 2))
console.log(calcualtorLogic.multiply(1, 2))
console.log(calcualtorLogic.divide(1, 2))