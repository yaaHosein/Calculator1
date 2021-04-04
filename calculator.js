//  let lastValue = null;
//  let operator = null;
//  let lastButtonClicked = null;

//  let button = document.getElementById("result");

//  let numBtns = document.querySelectorAll("[data-number]")
//  let operBtns = document.querySelectorAll("[data-operator]")

//  numBtns.forEach(function(button) {
//      button.addEventListener('click', function() {
//          if (lastButtonClicked === "Operator") result.textContent = "";
//          const currentValueOfResult = result.textContent;
//          const newValue = currentValueOfResult + button.dataset.number;
//          console.log(parseInt(newValue));
//          result.textContent = newValue;
//          lastButtonClicked = "Number";
//      });
//  });

//  operBtns.forEach(function(button) {
//      button.addEventListener('click', function() {
//          evaluate();
//          operator = button.dataset.operator;
//          lastButtonClicked = "Operator";
//          lastValue = result.textContent;
//      });
//  });

//  document.getElementById('button0').innerHTML = "0";

//  clearingButton.addEventListener("click", function() {
//      lastValue = "";
//      result.textContent = '';
//  });

//  periodButton.addEventListener("click", function() {
//      const currentValueOfResult = result.textContent;
//      if (currentValueOfResult.includes('.') !== true)
//          result.textContent = currentValueOfResult + ".";
//  });

//  negativeValueButton.addEventListener("click", function() {
//      const currentValueOfResult = result.textContent;
//      if (currentValueOfResult !== "" && currentValueOfResult[0] !== "-") { result.textContent = "-" + currentValueOfResult };
//      if (currentValueOfResult !== "" && currentValueOfResult[0] === "-") { result.textContent = currentValueOfResult.slice(1) };
//  });

//  function evaluate() {
//      if (lastValue && result.textContent && operator !== null) {
//          let firstOperand = parseFloat(lastValue);
//          let secondOperand = parseFloat(result.textContent);
//          let _result;
//          if (operator === "+") _result = firstOperand + secondOperand;
//          if (operator === "-") _result = firstOperand - secondOperand;
//          if (operator === "*") _result = firstOperand * secondOperand;
//          if (operator === "/") _result = firstOperand / secondOperand;
//          result.textContent = _result;
//          if (operator === "/" && secondOperand === 0)
//              result.textContent = 'Cannot divide by zero';
//      }
//  };

//  equalButton.addEventListener("click", function() {
//      evaluate();
//  });