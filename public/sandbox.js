"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet('kuba', 'siema');
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(9, 3, 'ff'));
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " yers old");
};
logDetails({ name: "kuba", age: 309 });
// or
var logDetails2;
logDetails2 = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " yers old");
};
logDetails2({ name: "kuba", age: 309 });
