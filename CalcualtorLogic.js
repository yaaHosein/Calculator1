class CalculatorLogic {
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

let calculatorLogic = new CalculatorLogic();
calculatorLogic.add();
calculatorLogic.subtract();
calculatorLogic.multiply();
calculatorLogic.divide();


class Calculator {
    constructor(selector) {
        this.hostElem = document.querySelector(selector);
    };
    render() {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add("wrapper");
        const resultDiv = document.createElement('div');
        resultDiv.classList.add("result");
        resultDiv.id = "result";
        wrapperDiv.appendChild(resultDiv);
        this.hostElem.appendChild(wrapperDiv);
        const div = document.createElement("div");
        const button7 = document.createElement("button");
        button7.dataset.number = "7";
        button7.classList.add("button");
        const button7Text = document.createTextNode("7");
        button7.appendChild(button7Text);
        const button8 = document.createElement("button");
        button8.dataset.number = "8";
        button8.classList.add("button");
        const button8Text = document.createTextNode("8");
        button8.appendChild(button8Text);
        const button9 = document.createElement("button");
        button9.dataset.number = "9";
        button9.classList.add("button");
        const button9Text = document.createTextNode("9");
        button9.appendChild(button9Text);
        div.appendChild(button7);
        div.appendChild(button8);
        div.appendChild(button9);
        wrapperDiv.appendChild(div);




        // const button4 = document.createElement("button");
        // button4.dataset.number = "4";
        // button4.classList.add("button");
        // const button4Text = document.createTextNode("4");

        // const button5 = document.createElement("button");
        // button5.dataset.number = "5";
        // button5.classList.add("button");
        // const button5Text = document.createTextNode("5");

        // const button6 = document.createElement("button");
        // button6.dataset.number = "6";
        // button6.classList.add("button");
        // const button6Text = document.createTextNode("6");


        // const button1 = document.createElement("button");
        // button1.dataset.number = "1";
        // button1.classList.add("button");
        // const button1Text = document.createTextNode("1");

        // const button2 = document.createElement("button");
        // button2.dataset.number = "2";
        // button2.classList.add("button");
        // const button2Text = document.createTextNode("2");

        // const button3 = document.createElement("button");
        // button3.dataset.number = "3";
        // button3.classList.add("button");
        // const button3Text = document.createTextNode("3");

        // const button0 = document.createElement("button");
        // button0.dataset.number = "0";
        // button0.classList.add("button");
        // const button0Text = document.createTextNode("0");

        // const periodButton = document.createElement("button");
        // periodButton.dataset.number = ".";
        // periodButton.classList.add("button");
        // const periodButtonText = document.createTextNode(".");
    };
}
const calculator1 = new Calculator(".wrapper");
calculator1.render();