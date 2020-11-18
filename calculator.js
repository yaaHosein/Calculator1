let lastValue;
let operator;

let button = document.getElementById("result");

document.getElementById('button0').innerHTML = "0";

clearingButton.addEventListener("click", function() {
    result.textContent = '';
})


button0.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 0;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});

button1.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 1;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});

button2.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 2;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});


button3.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 3;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});


button4.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 4;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});


button5.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 5;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});

button6.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 6;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});

button7.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 7;
    console.log(parseInt(newValue));
    result.textContent = newValue;

});

button8.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 8;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

button9.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + 9;
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

periodButton.addEventListener("click", function() {
    const CurrentValueOfresult = result.textContent;
    const newValue = CurrentValueOfresult + ".";
    console.log(parseInt(newValue));
    result.textContent = newValue;
});

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
    let firstOperand = parseInt(lastValue);
    let secondOperand = parseInt(result.textContent);
    let _result;
    console.log("opertator", operator);
    if (operator === "+") {
        _result = firstOperand + secondOperand;
    }
    if (operator === "-") {
        _result = firstOperand - secondOperand;
    }
    if (operator === "*") {
        _result = firstOperand * secondOperand;
    }
    if (operator === "/") {
        _result = firstOperand / secondOperand;
    }
    result.textContent = _result;
});