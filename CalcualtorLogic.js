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
            if (number2 === 0) result = 'Cannot divide by zero'
            return result;
        };
    }
    class Calculator {
        //instance
        calculatorLogic = new CalculatorLogic();
        currentResult = 0;
        resultElement = null;
        operator = null;
        // for making the first operand remove after clicking on the operator button
        lastButtonClicked = null;
        // for storing the current result and clicked operator 
        lastValue = null;

        constructor(selector) {
            this.hostElem = document.querySelector(selector);
            // controling this property 
            this.onButtonNumberClick = this.onButtonNumberClick.bind(this);
            this.onOperatorButtonClick = this.onOperatorButtonClick.bind(this);
            this.onPeriodButtonClick = this.onPeriodButtonClick.bind(this);
            this.onNegativeValueButtonClick = this.onNegativeValueButtonClick.bind(this);
            this.onEqualButtonClick = this.onEqualButtonClick.bind(this);
            this.onClearButtonClick = this.onClearButtonClick.bind(this);
        };
        render() {
            const wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add("wrapper");
            const resultDiv = document.createElement('div');
            resultDiv.classList.add("result");
            resultDiv.id = "result";
            resultDiv.appendChild(
                document.createTextNode(this.currentResult)
            );
            this.resultElement = resultDiv;
            wrapperDiv.appendChild(resultDiv);
            const row1 = this.getButtonsRow(["7", "8", "9"]);
            const row2 = this.getButtonsRow(["4", "5", "6"]);
            const row3 = this.getButtonsRow(["1", "2", "3"]);
            wrapperDiv.appendChild(row1);
            wrapperDiv.appendChild(row2);
            wrapperDiv.appendChild(row3);
            const div4 = document.createElement("div");
            const button0 = document.createElement("button");
            button0.dataset.number = "0";
            button0.classList.add("button");
            const button0Text = document.createTextNode("0");
            button0.appendChild(button0Text);
            button0.addEventListener("click", this.onButtonNumberClick);
            const periodButton = document.createElement("button");
            periodButton.classList.add("button");
            const periodButtonText = document.createTextNode(".");
            periodButton.appendChild(periodButtonText);
            periodButton.addEventListener("click", this.onPeriodButtonClick);
            const negativeValueButton = document.createElement("button");
            negativeValueButton.classList.add("button");
            const negativeValueButtonText = document.createTextNode("±");
            negativeValueButton.appendChild(negativeValueButtonText);
            negativeValueButton.addEventListener("click", this.onNegativeValueButtonClick);
            div4.appendChild(button0);
            div4.appendChild(periodButton);
            div4.appendChild(negativeValueButton);
            wrapperDiv.appendChild(div4);
            const row4 = this.getOperatorsRow(["*", "+", "-"]);
            wrapperDiv.appendChild(row4);
            const dividingButton = document.createElement("button");
            dividingButton.dataset.operator = "/";
            dividingButton.classList.add("button");
            const dividingButtonText = document.createTextNode("/");
            dividingButton.appendChild(dividingButtonText);
            wrapperDiv.appendChild(dividingButton);
            dividingButton.addEventListener("click", this.onOperatorButtonClick);
            const equalButton = document.createElement("button");
            equalButton.classList.add("button");
            const equalButtonText = document.createTextNode("=");
            equalButton.appendChild(equalButtonText);
            wrapperDiv.appendChild(equalButton);
            equalButton.addEventListener("click", this.onEqualButtonClick);
            const clearingButton = document.createElement("button");
            clearingButton.classList.add("button");
            const clearingButtonText = document.createTextNode("Clear");
            clearingButton.appendChild(clearingButtonText);
            wrapperDiv.appendChild(clearingButton);
            clearingButton.addEventListener("click", this.onClearButtonClick);
            this.hostElem.appendChild(wrapperDiv);
        };
        getButtonsRow(buttons) {
            const div = document.createElement("div");
            for (let button of buttons) {
                var buttonElement = document.createElement("button");
                buttonElement.dataset.number = button;
                buttonElement.classList.add("button");
                const buttonElementText = document.createTextNode(button);
                buttonElement.appendChild(buttonElementText);
                div.appendChild(buttonElement);
                buttonElement.addEventListener("click", this.onButtonNumberClick);
            }
            return div;
        }
        getOperatorsRow(buttons) {
            const div = document.createElement("div");
            for (let button of buttons) {
                var buttonElement = document.createElement("button");
                buttonElement.dataset.operator = button;
                buttonElement.classList.add("button");
                const buttonElementText = document.createTextNode(button);
                buttonElement.appendChild(buttonElementText);
                div.appendChild(buttonElement);
                buttonElement.addEventListener("click", this.onOperatorButtonClick);
            }
            return div
        };
        onButtonNumberClick(event) {
                // for making the first operand remove after clicking on the opertaor button so I can add the next operands only 
                if (this.lastButtonClicked === "operator") this.currentResult = "";
                const currentResultAndclickedNumButton = this.currentResult + event.target.dataset.number;
                this.currentResult = currentResultAndclickedNumButton;
                // for copying the content of current result to the result div 
                this.updateResultElement();
            }
            // copying current result to resultElement
        updateResultElement() {
            this.resultElement.textContent = this.currentResult;
        }
        onOperatorButtonClick(event) {
            this.evaluate();
            // for selecting the clicked operator 
            this.operator = event.target.dataset.operator;
            // a flag helping in clearing the current result after clicking the next operands after operator buttons 
            this.lastButtonClicked = "operator";
            // assigning the current result which includes the first operand and the operator in new var for some purposes later
            this.lastValue = this.currentResult;
        }
        onPeriodButtonClick() {
            const currentValueOfResult = this.currentResult;
            if (currentValueOfResult.includes('.') !== true)
                this.currentResult = currentValueOfResult + ".";
            this.updateResultElement();
        }
        onNegativeValueButtonClick() {
            const currentValueOfResult = this.currentResult;
            if (currentValueOfResult !== "" && currentValueOfResult[0] !== "-") { this.currentResult = "-" + currentValueOfResult };
            if (currentValueOfResult !== "" && currentValueOfResult[0] === "-") { this.currentResult = currentValueOfResult.slice(1) };
            this.updateResultElement();
        }
        onEqualButtonClick() {
            this.evaluate();
        }
        onClearButtonClick() {
            this.lastValue = "";
            this.currentResult = "";
            this.updateResultElement();
        }
        evaluate() {
            if (this.lastValue && this.currentResult && this.operator !== null) {
                let firstOperand = parseFloat(this.lastValue);
                let secondOperand = parseFloat(this.currentResult);
                let _result;
                if (this.operator === "+") _result = this.calculatorLogic.add(firstOperand, secondOperand);
                if (this.operator === "-") _result = this.calculatorLogic.subtract(firstOperand, secondOperand);
                if (this.operator === "*") _result = this.calculatorLogic.multiply(firstOperand, secondOperand);
                if (this.operator === "/") _result = this.calculatorLogic.divide(firstOperand, secondOperand);
                this.currentResult = _result;
                this.updateResultElement();
            }
        }
    }
    const calculator1 = new Calculator(".wrapper");
    calculator1.render();