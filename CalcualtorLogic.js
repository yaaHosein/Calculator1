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

let calcualtorLogic = new CalcualtorLogic(1, 2);
let calcualtorLogic1 = new CalcualtorLogic(1, 2);
let calcualtorLogic2 = new CalcualtorLogic(1, 2);
let calcualtorLogic3 = new CalcualtorLogic(1, 2);


// let calcualtorLogic = new CalcualtorLogic(1, 2);
// console.log(calcualtorLogic.add(1, 2))

// let calcualtorLogic1 = new CalcualtorLogic(1, 2);
// console.log(calcualtorLogic1.subtract(1, 2))

// let calcualtorLogic2 = new CalcualtorLogic(1, 2);
// console.log(calcualtorLogic2.multiply(1, 2))

// let calcualtorLogic3 = new CalcualtorLogic(1, 2);
// console.log(calcualtorLogic3.divide(1, 2))