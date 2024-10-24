/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector(`#calculator`);
const display = document.querySelector(`.display`);
// const operators = [`*`, `+`, `/`, `-`, `=`]
// const numbers = [`1`, `2`, `3`, `4`, ]

/*-------------------------------- Variables --------------------------------*/
let storedNum1
let storedNum2
let operator = ``
// let storedNum1Num = +storedNum1
// let storedNum2Num = +storedNum2

/*------------------------ Cached Element References ------------------------*/
// console.dir(calculator)
console.dir(display)
console.dir(buttons)
// console.log(operators)  


/*----------------------------- Event Listeners -----------------------------*/

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });

calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        display.innerHTML += event.target.innerText;
        if (operator === ``) {
            storedNum1 += event.target.innerText;
        } else {
            storedNum2 += event.target.innerText;
        }
    }
    if (event.target.classList.contains('operator')) {
        if (event.target.innerText === '=') {
            display.innerHTML = calculate(storedNum1, storedNum2, operator);
            storedNum1 = display.innerHTML;
            storedNum2 = '';
            operator = '';
        } else {
            operator = event.target.innerText;
            display.innerHTML +=  ` ` + operator + ` ` ;
        }
    }
    if (event.target.innerText === 'C') {
        clear();
    }
});

/*-------------------------------- Functions --------------------------------*/
function calculate(num1, num2, op) {
    const number1 = parseFloat(num1);//learned parseFloat from Microsoft copilot
    const number2 = parseFloat(num2);
    
    if (op === '+') {
        return number1 + number2;
    } else if (op === '-') {
        return number1 - number2;
    } else if (op === '*') {
        return number1 * number2;
    } else if (op === '/') {
        return number1 / number2;
    } else {
        return 0;
    }
}
///there are a few times where I get NaN as a result of the calculation function, and I am not sure why I am getting that

function clear() {
    display.innerHTML = '';
    storedNum1 = '';
    storedNum2 = '';
    operator = '';
}



