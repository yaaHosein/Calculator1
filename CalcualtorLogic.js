{
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

    class Calcualtor {
        constructor(selector) {
            document.querySelector("#hostElement")
            this.selector = selector;
        }

    };
    let calcualtor = new Calcualtor("#hostElement");
}