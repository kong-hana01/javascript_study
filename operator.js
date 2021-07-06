// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('I\'m Hanbin.\nWhat your name?');

// 2. Numberic operators
// 대부분의 다른 프로그래밍과 같다.
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // more than
console.log(10 >= 6); // more than or equal

// 6. Logical operator || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value 
// - 첫번째 값부터 확인한다. 따라서 heavy한 함수같은 경우는 최대한 뒤로 미루는 것이 좋다.(연산 시간이 더 오래걸리기 때문)
console.log(`or: ${value1 || value2 || check()}`); // True


// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // False

// often used tot compress long if-statement
// nullableObject && nullableObject.somthing
// if (nullableObject != null) {
//     nullableOhect.something;
// }

// ! (not)
console.log(!value1); // True

function check(){
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('Hi');
    }
    return true;
}



// 7. Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive); // True
console.log(stringFive != numberFive); // False

// === stricet equlity, no type conversion
console.log(stringFive === numberFive); // False
console.log(stringFive !== numberFive); // True

// object equlity by reference
// 오브젝트가 가리키고 있는 레퍼런스를 기준으로 생각한다.
const hanbin1 = {name: 'hanbin'};
const hanbin2 = {name: 'hanbin'};
const hanbin3 = hanbin1;
console.log(hanbin1 == hanbin2); // False
console.log(hanbin1 === hanbin2); // False
console.log(hanbin1 === hanbin3); // True


// equlity - puzzler
console.log(0 == false); // True
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'coder') {
    console.log('Welcome Hanbin');
} else if (name === 'coder') {
    console.log('You are amazing coder'); // 동작
} else {
    console.log('unkwnon');
}

// tenrary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no')

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox': // 위와 같이 두 케이스에 모두 같은 값을 할당한다면 연달아서 사용하면 된다.
        console.log('love you'); 
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy.
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while ${i}`);
    i--;
}

// do while loop, body code is excuted first
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 12. for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3;  i < 10; i = i + 2) {
    // inline variable declaration
    console.log(`for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break continue
// Q1. iterate from 0 to 10 and pring only even numbers (use continue)
console.log('Q1')
for (i = 0; i <= 10; i++){
    if (i % 2 == 1) {
        continue;
    }
    console.log(`${i}`)
}

// Q2. iterate from 0 to 10 and pring numbers until reaching 8 (use break)
console.log('\nQ2')
for (i = 0; i < 10; i++){
    if (i == 8) {
        break;
    }
    console.log(`${i}`);
}