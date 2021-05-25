"use strict"

//create variable : let
let message;

//save data 
message = 'Hello';

//print variable
alert(message);

//in one line
let message1 = 'Hello';

//old keyworld : var
var message2 = 'Hello';

//change data, cant be "helloworld"
message = 'world';
alert(message);

//copy data
message1 = message;

//variable name only can be alphabet, number, $, and _
let test123;
let $$;
let __;

$$ = 1;
__ = 2;
test123 = $$ + __;
alert(test123);

//create constant : const
const birthday = '04.02.1999';

//constant can't be change
//birthday = 'hello' <-- error!

