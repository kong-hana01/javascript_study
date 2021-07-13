// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
// 자바스크립트에서는 데이터 타입과 상관없이 사용 가능
// 하지만 타입스크립트는 데이터 타입과 리턴값까지 적어줘야함 -> 훨씬 용이함

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obs) {
    obj.name = 'coder';
};
const ellie = {name: 'ellie'};
// changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
};

showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    for (const arg of args) {
        console.log(arg)
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. local scope
let globalMessage = 'global'; // global vairable
function printMessage() {
    let message = 'hello';
    console.log(message); // local vairable
    function printAnather() {
        console.log(message);
        let childMessage = 'hello!';
        console.log(childMessage);
    };
    // console.log(childMessage); 에러
};
printMessage();
// console.log(message); 에러

// 6. Return a value
// return이 없는 경우는 return undefined 임
function sum(a, b) {
    return a + b;
};
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    };
};
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return ;
    };
    // long upgrade logic ...
};

// First class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other function
// can be returned by another function

// 1. Function expression
// a function decalration can be called earlier than it is defined. (hoisted)
// a function expression is create when the execution reaches it.
const print = function () { // anoymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// named function
// better debugging in debugger's stack traces
// recursions
// const printNo = function print() {
//     console.log('no!');
//     // print(); 에러
// };

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expressiong
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    if (command === 'add') {
        return a + b
    } else if (command === 'substract') {
        return a - b
    } else if (command === 'divide') {
        return a / b
    } else if (command === 'multiply') {
        return a * b
    } else if (command === 'remainder') {
        return a % b
    } else {
        return '값을 다시 입력하세요.'
    }
};