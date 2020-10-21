document.getElementById('button0').innerHTML = "0";

let button = document.getElementById("result1");

const button0 = document.getElementById("button0");
button0.addEventListener("click", function() {
    result1.textContent = 0;
});


const button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    const theCurrentValueOfResult1 = document.getElementById("result1").innerHTML;
    const newValue = 1 + theCurrentValueOfResult1;
    result1.textContent = newValue;
});


const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    result1.textContent = 2;

});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
    result1.textContent = 3;
});


const button4 = document.getElementById("button4");
button4.addEventListener("click", function() {
    result1.textContent = 4;
});

const button5 = document.getElementById("button5");
button5.addEventListener("click", function() {
    result1.textContent = 5;
});

const button6 = document.getElementById("button6");
button6.addEventListener("click", function() {
    result1.textContent = 6;
});

const button7 = document.getElementById("button7");
button7.addEventListener("click", function() {
    result1.textContent = 7;
});

const button8 = document.getElementById("button8");
button8.addEventListener("click", function() {
    result1.textContent = 8;
});

const button9 = document.getElementById("button9");
button9.addEventListener("click", function() {
    result1.textContent = 9;
});