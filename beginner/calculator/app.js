// Events listeners
document.getElementById('zero').addEventListener('click', onZeroClick);
document.getElementById('one').addEventListener('click', onOneClick);
document.getElementById('two').addEventListener('click', onTwoClick);
document.getElementById('three').addEventListener('click', onThreeClick);
document.getElementById('four').addEventListener('click', onFourClick);
document.getElementById('five').addEventListener('click', onFiveClick);
document.getElementById('six').addEventListener('click', onSixClick);
document.getElementById('seven').addEventListener('click', onSevenClick);
document.getElementById('eight').addEventListener('click', onEightClick);
document.getElementById('nine').addEventListener('click', onNineClick);
document.getElementById('clear-all').addEventListener('click', onClearAllClick);
document.getElementById('clear').addEventListener('click', onClearClick);
document.getElementById('divide').addEventListener('click', onDivideClick);
document.getElementById('for').addEventListener('click', onForClick);
document.getElementById('plus').addEventListener('click', onPlusClick);
document.getElementById('minus').addEventListener('click', onMinusClick);
document.getElementById('equal').addEventListener('click', calculate);

const display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operation = null;
let currDisplay = '';

function onZeroClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '0';
      currDisplay += '0';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '0';
      currDisplay += '0';
   }

   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onOneClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '1';
      currDisplay += '1';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '1';
      currDisplay += '1';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onTwoClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '2';
      currDisplay += '2';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '2';
      currDisplay += '2';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onThreeClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '3';
      currDisplay += '3';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '3';
      currDisplay += '3';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onFourClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '4';
      currDisplay += '4';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '4';
      currDisplay += '4';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onFiveClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '5';
      currDisplay += '5';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '5';
      currDisplay += '5';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onSixClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '6';
      currDisplay += '6';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '6';
      currDisplay += '6';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onSevenClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '7';
      currDisplay += '7';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '7';
      currDisplay += '7';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onEightClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '8';
      currDisplay += '8';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '8';
      currDisplay += '8';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onNineClick() {
   if (firstNumber.length < 8 && operation === null) {
      firstNumber += '9';
      currDisplay += '9';
   }
   if (operation !== null && secondNumber.length < 8) {
      secondNumber += '9';
      currDisplay += '9';
   }
   display.innerHTML = `<h1>${currDisplay}</h1>`;
}

function onClearAllClick() {
   operation = null;
   firstNumber = '';
   secondNumber = '';
   display.innerHTML = '';
   currDisplay = '';
   display.innerHTML = '<h1>0</h1>';
}

function onClearClick() {}

function onDivideClick() {
   if (operation === null) {
      operation = 'divide';
      currDisplay += ' / ';
      display.innerHTML = `<h1>${currDisplay}</h1>`;
   }
}

function onForClick() {
   if (operation === null) {
      operation = 'for';
      currDisplay += ' x ';
      display.innerHTML = `<h1>${currDisplay}</h1>`;
   }
}

function onPlusClick() {
   if (operation === null) {
      operation = 'plus';
      currDisplay += ' + ';
      display.innerHTML = `<h1>${currDisplay}</h1>`;
   }
}

function onMinusClick() {
   if (operation === null) {
      operation = 'minus';
      currDisplay += ' - ';
      display.innerHTML = `<h1>${currDisplay}</h1>`;
   }
}

function calculate() {
   console.log(firstNumber);
   console.log(secondNumber);
   console.log(operation);
   let result;
   if (operation === 'plus') {
      result = parseInt(firstNumber) + parseInt(secondNumber);
   } else if (operation === 'minus') {
      result = parseInt(firstNumber) - parseInt(secondNumber);
   } else if (operation === 'for') {
      result = parseInt(firstNumber) * parseInt(secondNumber);
   } else if (operation === 'divide') {
      result = (parseInt(firstNumber) / parseInt(secondNumber)).toFixed(2);
   }

   console.log(result);

   display.innerHTML = `<h1>${result}</h1>`;
}
