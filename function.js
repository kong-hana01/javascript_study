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
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

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