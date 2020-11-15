let lastValue;
let operator;
let currentValue;


let button = document.getElementById("result");

document.getElementById('button0').innerHTML = "0";

clearButton.addEventListener("click", function() {
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

addButton.addEventListener("click", function() {
    lastValue = document.getElementById("result").innerHTML;
    operator = "+";
    let currentValue = lastValue + "+";
    result.textContent = currentValue;
    result.textContent = "";

});




equalButton.addEventListener("click", function() {
    if (operator === "+")
        console.log(parseInt(lastValue));
    console.log(parseInt(currentValue));
    let result1 = lastValue + currentValue;
    result1.textContent = result;
});