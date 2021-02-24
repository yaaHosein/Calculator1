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
        const div2 = document.createElement("div");
        const button4 = document.createElement("button");
        button4.dataset.number = "4";
        button4.classList.add("button");
        const button4Text = document.createTextNode("4");
        button4.appendChild(button4Text);
        const button5 = document.createElement("button");
        button5.dataset.number = "5";
        button5.classList.add("button");
        const button5Text = document.createTextNode("5");
        button5.appendChild(button5Text);
        const button6 = document.createElement("button");
        button6.dataset.number = "6";
        button6.classList.add("button");
        const button6Text = document.createTextNode("6");
        button6.appendChild(button6Text);
        div2.appendChild(button4);
        div2.appendChild(button5);
        div2.appendChild(button6);
        wrapperDiv.appendChild(div2);
        const div3 = document.createElement("div");
        const button1 = document.createElement("button");
        button1.dataset.number = "1";
        button1.classList.add("button");
        const button1Text = document.createTextNode("1");
        button1.appendChild(button1Text);
        const button2 = document.createElement("button");
        button2.dataset.number = "2";
        button2.classList.add("button");
        const button2Text = document.createTextNode("2");
        button2.appendChild(button2Text);
        const button3 = document.createElement("button");
        button3.dataset.number = "3";
        button3.classList.add("button");
        const button3Text = document.createTextNode("3");
        button3.appendChild(button3Text);
        div3.appendChild(button1);
        div3.appendChild(button2);
        div3.appendChild(button3);
        wrapperDiv.appendChild(div3);
        const div4 = document.createElement("div");
        const button0 = document.createElement("button");
        button0.dataset.number = "0";
        button0.classList.add("button");
        const button0Text = document.createTextNode("0");
        button0.appendChild(button0Text);
        const periodButton = document.createElement("button");
        periodButton.classList.add("button");
        const periodButtonText = document.createTextNode(".");
        periodButton.appendChild(periodButtonText);
        const negativeValueButton = document.createElement("button");
        negativeValueButton.classList.add("button");
        const negativeValueButtonText = document.createTextNode("±");
        negativeValueButton.appendChild(negativeValueButtonText);
        div4.appendChild(button0);
        div4.appendChild(periodButton);
        div4.appendChild(negativeValueButton);
        wrapperDiv.appendChild(div4);
        const div5 = document.createElement("div");
        const multiplyingButton = document.createElement("button");
        multiplyingButton.dataset.operator = "*";
        multiplyingButton.classList.add("button");
        const multiplyingButtonText = document.createTextNode("*");
        multiplyingButton.appendChild(multiplyingButtonText)
        const addingButton = document.createElement("button");
        addingButton.dataset.operator = "+";
        addingButton.classList.add("button");
        const addingButtonText = document.createTextNode("+");
        addingButton.appendChild(addingButtonText)
        const subtractingButton = document.createElement("button");
        subtractingButton.dataset.operator = "-";
        subtractingButton.classList.add("button");
        const subtractingButtonText = document.createTextNode("-");
        subtractingButton.appendChild(subtractingButtonText);
        div5.appendChild(multiplyingButton);
        div5.appendChild(addingButton);
        div5.appendChild(subtractingButton);
        wrapperDiv.appendChild(div5);
        const div6 = document.createElement("div");
        const dividingButton = document.createElement("button");
        dividingButton.dataset.operator = "/";
        dividingButton.classList.add("button");
        const dividingButtonText = document.createTextNode("/");
        dividingButton.appendChild(dividingButtonText);
        const equalButton = document.createElement("button");
        equalButton.classList.add("button");
        const equalButtonText = document.createTextNode("=");
        equalButton.appendChild(equalButtonText);
        const clearingButton = document.createElement("button");
        clearingButton.classList.add("button");
        const clearingButtonText = document.createTextNode("Clear");
        clearingButton.appendChild(clearingButtonText)
        div6.appendChild(dividingButton);
        div6.appendChild(equalButton);
        div6.appendChild(clearingButton);
        wrapperDiv.appendChild(div6);
        this.hostElem.appendChild(wrapperDiv);
        const div1 = this.getButtonsRow(["7", "8", "9"]);
        const div2 = this.getButtonsRow(["4", "5", "6"]);
        const div3 = this.getButtonsRow(["1", "2", "3"]);
    };
    getButtonsRow(buttons) {
        const div = document.createElement("div");
        for (let button of buttons) {
            var buttonElement = document.createElement("button");
            buttonElement.dataset.number = this.getButtonsRow(["7", "8", "9"]);
            const buttonElementText = document.createTextNode(this.getButtonsRow(["7", "8", "9"]));
            buttonElement.appendChild(buttonElementText);
            div.appendChild(buttonElement);
        }
        return div
    }
};
const calculator1 = new Calculator(".wrapper");
calculator1.render();