//closures examples

// //lexical-scoping example-1
// function global(a) {
//     var g = 'g';
//     console.log(g);
//     function outer(b) {
//         var o='o';
//         console.log(g);
//         console.log(o);
//         function inner(c) {
//             var i='i';
//             console.log(g);
//             console.log(o);
//             console.log(i);
//         }
//         inner();//for logging we have to call explicitly
//     }
//     outer();//for logging we have to call explicitly
// }
// global(10);

// //closures
// //example-1
// function x() {
//     var outer = 'outer';
//     return function() {
//         console.log(outer);//lexical scoping
//     }
// }

// const innerFn = x();//closure (gets inner function and it knows its surroundings env)
// console.log(innerFn);//prints inner function
// console.log(innerFn.outer);//undefined bec inner function is not yet executed to get closure capabilities first we have to execute inner function.
// innerFn();//closure
// console.log(innerFn.outer);//undefined


//example-2
// function x(a) {
//     function y(b) {
//         return a+b;
//     }
//     return y;
// }

// const innerFn = x(1);//gets inner function
// console.log(innerFn(2));//closure - ans 3

//example-4
// console.log(multiply(1)(2)(3));//6

// function multiply(a) {
//     return function multiplyB(b) {
//         return function multiplyC(c) {
//             return a*b*c;
//         }
//     }
// }

// //example-5
// console.log(multiply(1)(2));//inner most method is returned

// //example-6 , impl memoizeFn should remember value 10 and it shld incr everytime we call sum10() with passed value.
// function memoizeFn(x) {
//     return function (y) {
//         return x+y;
//     }
// }

// const sum10 = memoizeFn(10);
// console.log(sum10(1));//11
// console.log(sum10(2));//12
// console.log(sum10(3));//13

//ES6 -features
// function sum(a,b=0) {
//     return a+b;
// }
// console.log(sum(1));//NAN bec 1+undefined
// console.log(sum(1,2));//3

// //we can overcome NAN by making b=0 (suma,b=0) in that case ans is 1.

// //example-2
// var arr1=[1,2,3];
// var arr2=arr1;
// arr2[0]=10;
// console.log(arr1,arr2);//ans-[10,2,3],[10,2,3]

//sol is we can clone or use ES6 syntax
// var arr1=[1,2,3];
// var arr2=arr1.slice();
// arr2[0]=10;
// console.log(arr1,arr2);//ans-[1,2,3],[10,2,3]

// //another sol using ES6 feature
var arr1=[1,2,3];
var arr2=[...arr1];
arr2[0]=10;
console.log(arr1,arr2);//ans-[1,2,3],[10,2,3]