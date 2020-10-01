const app0 = document.getElementById("app0");
app0.addEventListener("click", function() {
    console.log("0")
});
document.getElementById('app0').innerHTML = "0"
const app1 = document.getElementById("app1");
app1.addEventListener("click", function() {
    console.log("1")
});
const app2 = document.getElementById("app2");
app2.addEventListener("click", function() {
    console.log("2")
});
const app3 = document.getElementById("app3");
app3.addEventListener("click", function() {
    console.log("3")
});
const app4 = document.getElementById("app4");
app4.addEventListener("click", function() {
    console.log("4")
});
const app5 = document.getElementById("app5");
app5.addEventListener("click", function() {
    console.log("5")
});
const app6 = document.getElementById("app6");
app6.addEventListener("click", function() {
    console.log("6")
});
const app7 = document.getElementById("app7");
app7.addEventListener("click", function() {
    console.log("7")
});

const app8 = document.getElementById("app8");
app8.addEventListener("click", function() {
    console.log("8")
});
const app9 = document.getElementById("app9");
app9.addEventListener("click", function() {
    console.log("9")
});


var result = 0;
var increaseButton = document.getElementById("increase-button");
var result1 = document.getElementById("result1");
result1.textContent = result;
increaseButton.addEventListener("click", function() {
    result++;
    result1.textContent = result;
});