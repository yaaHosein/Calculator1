let lastValue;
let operator;

let button = document.getElementById("result");

document.getElementById('button0').innerHTML = "0";

clearingButton.addEventListener("click", function() {
    result.textContent = '';
});

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
    ////%% here I am listening 👌👂 the period-button click 
    // let __result;
    //&& here I am saving the result in a vaiarble 
    const currentValueOfResult = result.textContent;
    ////&& here I am getting the value of result div and saving  it in a variable 
    // if (currentValueOfResult.includes('.' + '.')) { result.textContent == "." } else { result.textContent == "" };
    //&& here i am checking using if statment that if there is double "." in the current value of result div so let it to become only one period otherwise display in the result div empty  
    const newValue = currentValueOfResult + ".";
    //&& here I'm adding "." to the current value of result div and saving it in another variable 
    // if (currentValueOfResult.includes('.' + '.')) { result.textContent == "." }
    //&& here i am checking using if statment that if there is double "." in the current value of result div so let it to become only one period
    // if (currentValueOfResult.includes(".")) {result.textContent == currentValueOfResult + "."}
    // && here i am checking using if statment that if there is one . in the current Value Of Result div let the result div equal to one .
    result.textContent = newValue;
    //&& here i am displaying the last value to result div 
    // if (newValue.includes('.') = false) { result.textContent == currentValueOfResult + "." }
    // && here i am checking using if statment that if there is one . in the new Value Of Result div let rsult div ==  the current value of result div +  .
    // if (currentValueOfResult.includes('.') == false) { result.textContent = currentValueOfResult + "." }
    // && here i am checking using if statment that if there is not  . in the current Value Of Result div let the result div equal to current value of result div + one .
    // if (currentValueOfResult.includes('.') == false) { result.textContent = newValue + "." }
    //&& // && here i am checking using if statment that if there is not . in the current Value Of Result div let the result div equal to new value + one .
    // if (currentValueOfResult.includes('.') == false) { result.textContent = currentValueOfResult + "." }
    // && here i am checking using if statment that if there is not  . in the current Value Of Result div let the result div equal to current value of result div + one .

    // if (currentValueOfResult.includes('.') == false) { result.textContent = newValue + "." }
    // && here i am checking using if statment that if there is not  . in the current Value Of Result div let the result div equal to new value of result div + one .

    // if (currentValueOfResult.includes('.') = false) { result.textContent == newValue + "." }
    // && here i am checking using if statment that if there is not  . in the current Value Of Result div let the result div equal to current value of result div + one .

    //else { result.textContent == "" };
    //&& i think this comment is related to one of the first tries to find the solutions 

    // var __result = newValue;
    //$$ here i am saving the result div in a vairable called new Value ;
    // __result.includes("."++);
    //&& here i am checking if this result has 2 and more "."
    // console.log("");
    //&& here i ma copying the result to console panel 
});

// var input = '';
// $(':button').click(function() {
//     input = $(this).attr("value");
//     if (input === '.') {
//         if (input === '.' + '.') {
//             input = '';
//         }
//     }
// });
// ========================
// function update_input() {

//     input_1 = input1.text;

//     if (input_1.match(".") == false) {
//         input1.restrict = ".0-9";
//     } else {
//         input1.restrict = "0-9";
//     }
// // }
// ===
// === === === === === === ===

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