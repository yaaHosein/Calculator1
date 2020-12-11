let button = document.getElementById("result");

document.getElementById('button0').innerHTML = "0";

button0.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 0;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button1.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 1;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button2.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 2;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});


button3.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 3;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button4.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 4;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button5.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 5;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button6.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 6;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button7.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 7;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button8.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 8;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button9.addEventListener("click", function() {
    const currentValueOfResult = result.textContent;
    const newValue = currentValueOfResult + 9;
    console.log(parseInt(newValue));
    result.textContent = newValue;
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

let lastValue;
let operator;

addingButton.addEventListener("click", function() {
    operator = "+";
    lastValue = result.textContent;
    result.textContent = "";
});
subtractingButton.addEventListener("click", function() {
    operator = "-";
    lastValue = result.textContent;
    result.textContent = "";
});

multiplyingButton.addEventListener("click", function() {
    operator = "*";
    lastValue = result.textContent;
    result.textContent = "";
});
dividingButton.addEventListener("click", function() {
    operator = "/";
    lastValue = result.textContent;
    result.textContent = "";
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
clearingButton.addEventListener("click", function() {
    result.textContent = '';
});