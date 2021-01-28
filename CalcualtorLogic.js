 let numBtns = document.querySelectorAll("[data-number]")
 let operBtns = document.querySelectorAll("[data-operator]")

 class CalcualtorLogic {
     add(number1, number2) { number1 + number2 };
     subtract(number1, number2) { number1 - number2 };
     divide(number1, number2) { number1 / number2 };
     multiply(number1, number2) { number1 * number2 };
 };