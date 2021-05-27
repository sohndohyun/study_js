//everything is same with C
let x, y;
x = 3;
y = 5;

alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);
alert(x % y);

//but one thing added

let p = x ** y;
alert(`3 ** 5 : ${p}`);


//string operator
let str = "Hello " + "World";
alert(str);

str = "1" + 2;
alert(str);

//+can be caster of integer
alert(+true);
alert(+"");

let two = "2";
let three = "3";

alert(+two + +three); // 5
alert(two + three); // 23
