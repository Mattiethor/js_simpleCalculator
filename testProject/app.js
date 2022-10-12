// + 1 to original number
function add() {
  calculate("+");
  document.getElementById("number").innerHTML = appNumber;
}
// - 1 to original number
function subtract() {
  calculate("-");
  document.getElementById("number").innerHTML = appNumber;
}
// multiplies number with itself
function multiply() {
  calculate("*");
  document.getElementById("number").innerHTML = appNumber;
}
//Resets to 0
function reset() {
  calculate("reset");
  document.getElementById("number").innerHTML = appNumber;
  document.getElementById("numberLog").innerHTML = "";
}
//Creates a log to show the last calculation. runs each time one of the calculate function is called.
function saveToLog(firstNumber, operator, secondNumber) {
  const numberObj = {
    operator: operator,
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    result: appNumber,
  };
  //Displaying the last calculation
  calculationLog = `${numberObj.firstNumber} ${numberObj.operator} ${numberObj.secondNumber} = ${numberObj.result}`;
  document.getElementById("numberLog").innerHTML = calculationLog;
}
//Takes a opperator from the above functions and makes a calculation and runs the saveToLog function.
function calculate(operator) {
  lastResult = appNumber;
  if (operator == "+") {
    appNumber++;
    saveToLog(lastResult, operator, 1);
  } else if (operator == "-") {
    appNumber--;
    saveToLog(lastResult, operator, 1);
  } else if (operator == "*") {
    appNumber = appNumber * appNumber;
    saveToLog(lastResult, operator, lastResult);
  } else if ((operator = "reset")) {
    appNumber = 0;
  }
}
let calculationLog = "";
let initialNumber = 0;
let lastResult = 0;
let appNumber = 0;
let numberLog = [];
