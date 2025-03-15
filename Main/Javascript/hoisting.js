//hoisting Examples

// //Example 1 - Anonymous Function - variable hoisting
// var result = sum(1,2);
// console.log(result);
// var sum = function(a,b) {
//     return a+b;
// }
// //output - error : sum is not a function.


// //Example 2 - Named Function hoisting
// var result = sum(1,2);
// console.log(result);
// function sum(a,b)  {
//     return a+b;
// }
// //ans - 3

//Example-3
// function sum(a,b) {
//     total = a+b;//global variable since its not declared inside local
//     return total;
// }
// var result = sum(1,2);
// console.log(result,total);//3,3

// //Example-4
// function sum(a,b) {
//     let total = a+b;
//     return total;
// }
// console.log(result,sum);//TDZ error:cannot access 'result'
// let result = sum(1,2);

// //After hoisting code will be as it is

// //Example-5
// let result = sum(1,2);//error cannot access sum before initialization
// console.log(result);
// let sum = function(a,b) {
//     var total = a+b;
//     return total;
// }
// //there are no var and named methods for hositing