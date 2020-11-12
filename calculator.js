document.getElementById('button0').innerHTML = "0";
let button = document.getElementById("result");

clearButton.addEventListener("click", function() {
    result.textContent = '';
})


let currentResult = 01;
let anotherOperand = 1;

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

addingButton.addEventListener("click", function() {
    result.textContent = "";
});

equalButton.addEventListener("click", function() {

    let addedresult = currentResult + anotherOperand;
    result.textContent = addedresult;

});