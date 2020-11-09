document.getElementById('button0').innerHTML = "0";
let button = document.getElementById("result1");

clearButton.addEventListener("click", function() {
    result1.textContent = '';
})

button0.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 0;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});

button1.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 1;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});


button2.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 2;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});


button3.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 3;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});


button4.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 4;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});


button5.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 5;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});

button6.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 6;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});

button7.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 7;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});

button8.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 8;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});


button9.addEventListener("click", function() {
    const theCurrentValueOfResult1 = result1.textContent;
    const newValue = theCurrentValueOfResult1 + 9;
    console.log(parseInt(newValue));
    result1.textContent = newValue;

});

addingButton.addEventListener("click", function() {
    const thePreviousNumber1 = 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0;
    const theLastNumber1 = 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0;
    const theAddedvalue = thePreviousNumber1 + theLastNumber1;
    result1.textContent = theAddedvalue;

});
equalButton.addEventListener("click", function() {

});