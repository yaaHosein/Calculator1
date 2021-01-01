let lastValue;
let operator;
let lastButtonClicked = null;


let button = document.getElementById("result");

document.getElementById('button0').innerHTML = "0";

clearingButton.addEventListener("click", function() {
    result.textContent = '';
});

button0.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 0;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button1.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 1;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button2.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 2;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button3.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 3;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button4.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 4;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button5.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 5;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button6.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 6;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    console.log(result.textContent = newValue);
    lastButtonClicked = "Number";
});

button7.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 7;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    // lastButtonClicked = 7;
    lastButtonClicked = "Number";
});

button8.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 8;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

button9.addEventListener("click", function() {
    if (lastButtonClicked === "Operator") result.textContent = "";
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 9;
    console.log(parseInt(newValue));
    result.textContent = newValue;
    lastButtonClicked = "Number";
});

periodButton.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    if (currentValueOfResult.includes('.') !== true)
        result.textContent = currentValueOfResult + ".";
});

negativeValueButton.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    if (currentValueOfResult !== "" && currentValueOfResult[0] !== "-") { result.textContent = "-" + currentValueOfResult };
    if (currentValueOfResult !== "" && currentValueOfResult[0] === "-") { result.textContent = currentValueOfResult.slice(1) };
});

addingButton.addEventListener("click", function() {
    if (lastValue && result.textContent && operator !== null) {
        let firstOperand = parseFloat(lastValue);
        let secondOperand = parseFloat(result.textContent);
        let _result;
        if (operator === "+") _result = firstOperand + secondOperand;
        result.textContent = _result;
    }
    operator = "+";
    lastButtonClicked = "Operator";
    lastValue = result.textContent;
});

subtractingButton.addEventListener("click", function() {
    operator = "-";
    lastButtonClicked = "Operator";
    lastValue = result.textContent;
});
multiplyingButton.addEventListener("click", function() {

    operator = "*";
    lastButtonClicked = "Operator";
    lastValue = result.textContent;
});
dividingButton.addEventListener("click", function() {
    operator = "/";
    lastButtonClicked = "Operator";
    lastValue = result.textContent;
});
equalButton.addEventListener("click", function() {
    let firstOperand = parseFloat(lastValue);
    let secondOperand = parseFloat(result.textContent);
    let _result;
    console.log("opertator", operator);
    if (operator === "+")
        _result = firstOperand + secondOperand;

    if (operator === "-")
        _result = firstOperand - secondOperand;

    if (operator === "*")
        _result = firstOperand * secondOperand;

    if (operator === "/")
        _result = firstOperand / secondOperand;

    result.textContent = _result;
});