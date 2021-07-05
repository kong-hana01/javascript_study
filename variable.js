// 자주 참고할 수 있는 사이트 : developer.mozilla.org
// 자바 스크립트는 유연하지만 위험할 수 있다. 
// 특히 선언하지 않은 변수를 사용할 경우 에러가 발생하지 않는 경우가 있다.
// 이를 방지하기 위해 use strick을 쓴다.
// added ECMAscript 5
'use strick';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';

{
let name = 'hanbin';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

//  var (don't ever use this!)
//  var hoisting
//  has no block scope
{
console.log(age);
age = 4;
var age;
}

console.log(age);


// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;


// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) (hanbin에서 hanbon으로 바꿀 경우 i만 바꾸는 것이 아닌 hanbin -> hanbon으로 바꾸기 때문에 string은 immutable data type이다.)
// Mutable data types: all objects by defaults are mutable in JS (Object의 내부 값을 바꿀 수 있다.)
// 둘의 차이는 내부적으로 변경이 가능한지를 판단.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function


// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // >>> value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // >>> value: 17.1, type: number

// number - special numeric values: infinnity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123567123123123123n; // over (-2**53 ~ 2**53)
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brendan ='brendan';
const greeting = 'hello';
console.log(`value: ${greeting}, type: ${typeof greeting}`) // >>> value: hello, type: string
const helloBob = `hi ${brendan}!`; // template literals (string)

// `` 포맷팅
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)
console.log('value: ' + helloBob + 'type: ' + typeof helloBob)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // >>> value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // >>> value: false, type: boolean

// null
let nothing = null; // null로 값이 할당되어있는 경우
console.log(`value: ${nothing}, type: ${typeof nothing}`); // >>> value: null, type: object

// undefined
let x; // 아무것도 할당되지 않은 경우
console.log(`value: ${x}, type: ${typeof x}`); // >>> value: undefined, type: undefined

// symbol, create unique identifiers for objects
// 맵이나 다른 구간에서 고유한 식별자가 필요하거나 우선순위를 주고 싶을 때 사용한다.
// string으로 줄 경우 값이 중복될 수 있지만 Symbol은 고유한 값을 가지고 있다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2)

// 같은 식별자를 가지게 하는 경우
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// object, real-life object, data structure
// hanbin은 const여서 변경이 불가능하지만 hanbin object 내부의 값(name, age)은 변경이 가능하다.
const hanbin = {name: 'hanbin', age: 20};
hanbin.age = 25;

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자와 숫자의 더하기 연산자는 문자끼리의 합으로 됨
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 문자와 문자의 나누기 연산자는 숫자끼리의 나누기로 됨
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); > 에러 / 자바 스크립트는 런타임에서 데이터 타입이 정해지기때문에 에러가 발생하는 경우가 많다.
// 이를 보완한게 타입 스크립트이다.