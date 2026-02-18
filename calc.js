var num1 = '';
var num2 = '';
var operator = '';
var display = document.getElementById('display');

function pressNumber(num) {
  if (operator === '') {
    if (num === '.' && num1.includes('.')) return;
    num1 = num1 + num;
    display.value = num1;
  } else {
    if (num === '.' && num2.includes('.')) return;
    num2 = num2 + num;
    display.value = num2;
  }
}

function pressOperator(op) {
  if (num1 === '') return;
  operator = op;
  display.value = num1 + ' ' + op;
}

function pressEquals() {
  var a = parseFloat(num1);
  var b = parseFloat(num2);
  var result = 0;

  if (operator === '+') { result = a + b; }
  if (operator === '-') { result = a - b; }
  if (operator === '*') { result = a * b; }
  if (operator === '/') { result = a / b; }

  display.value = result;
  num1 = String(result);
  num2 = '';
  operator = '';
}

function pressClear() {
  num1 = '';
  num2 = '';
  operator = '';
  display.value = '0';
}

function pressDel() {
  if (operator === '') {
    num1 = num1.slice(0, -1);
    display.value = num1 === '' ? '0' : num1;
  } else {
    num2 = num2.slice(0, -1);
    display.value = num2 === '' ? num1 + ' ' + operator : num2;
  }
}

document.getElementById('btn-0').addEventListener('click', function () { pressNumber('0'); });
document.getElementById('btn-1').addEventListener('click', function () { pressNumber('1'); });
document.getElementById('btn-2').addEventListener('click', function () { pressNumber('2'); });
document.getElementById('btn-3').addEventListener('click', function () { pressNumber('3'); });
document.getElementById('btn-4').addEventListener('click', function () { pressNumber('4'); });
document.getElementById('btn-5').addEventListener('click', function () { pressNumber('5'); });
document.getElementById('btn-6').addEventListener('click', function () { pressNumber('6'); });
document.getElementById('btn-7').addEventListener('click', function () { pressNumber('7'); });
document.getElementById('btn-8').addEventListener('click', function () { pressNumber('8'); });
document.getElementById('btn-9').addEventListener('click', function () { pressNumber('9'); });
document.getElementById('btn-dot').addEventListener('click', function () { pressNumber('.'); });

document.getElementById('btn-add').addEventListener('click', function () { pressOperator('+'); });
document.getElementById('btn-subtract').addEventListener('click', function () { pressOperator('-'); });
document.getElementById('btn-multiply').addEventListener('click', function () { pressOperator('*'); });
document.getElementById('btn-divide').addEventListener('click', function () { pressOperator('/'); });

document.getElementById('btn-equals').addEventListener('click', function () { pressEquals(); });
document.getElementById('btn-clear').addEventListener('click', function () { pressClear(); });
document.getElementById('btn-del').addEventListener('click', function () { pressDel(); });