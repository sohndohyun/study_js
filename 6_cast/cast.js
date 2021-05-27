// String cast
// String(value)

let value = true;
let strValue = String(value);
alert(typeof strValue);

// Number(str) string to number
let str = "42";
alert(typeof Number(str));

//Boolean(value) 0, "", null, undefined, Nan -> false else true

//Number cast
//undefined -> NaN
//null->0
//true -> 1 false -> 0
//same with atoi;