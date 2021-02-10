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
            this.selector = selector;
            // let buttons = document.querySelectorAll(".button")
            let hostElem = document.querySelector("#hostElement").innerHTML = "I love Sayed Mohammad Hassan💖🌹 and His beautiful and sweet daughter 💖Liza💖"
            console.log(hostElem);
        };
    }


    // let calcualtor = new Calcualtor();

}

let hostElem = document.querySelector("#hostElement").innerHTML = "I love Sayed Mohammad Hassan💖🌹 and His beautiful and sweet daughter 💖Liza💖"
console.log(hostElem);