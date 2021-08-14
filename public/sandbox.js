"use strict";
// let greet = () => {
//     console.log('hello world')
// }
// greet();
var greet;
// greet = "hello"
greet = function () {
    console.log("hello, again");
};
greet();
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 7);
var minus = function (a, b) {
    return a + b;
};
var result = minus(4, 5);
console.log(result);
// result = 'kub';
