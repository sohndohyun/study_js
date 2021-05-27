
//dynamically typed
let message = "hello";
message = 123456;

//number type, float, int
let n = 123;
n = 12.445;
n = Infinity;
alert(1 / 0); // same with infinity

alert("string" / 1); // NaN

//bigint
const bigInt = 1234567890123456789012345678901234567890n; // add n after integer

//string
let str = "Hello";
let str2 = 'World';

let str3 = `Hello ${str}`; // use backtick to insert other var

//boolean
let bool1 = true;
let bool2 = false;
let bool3 = 4 > 2;

//null
let myNull = null; // null equal with nothing

//undefined
let ud = 100;
ud = undefined;
alert(ud);

//typeof x == typeof(x) // return type of var
alert(typeof 10n); 
alert(typeof null); // null is object, alert is function
