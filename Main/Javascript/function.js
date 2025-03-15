//ex:1
var x=1, y=2;
function sum(a,b) {
    return a+b;
}
console.log(sum(x,y));

//ex-2
var z = [1,2];
function total(arr) {
    return arr[0]+arr[1];
}
z[0]=10;
console.log(total(z));

//ex-3
var x=1, y=2;
function sum(a,b) {
    a=10;
    return a+b;
}
console.log(sum(x,y));
console.log(x,y);

//ex-4
var z = [1,2];
function total(arr) {
    arr[0]=10;
    return arr[0]+arr[1];
}
console.log(total(z));
console.log(z);

//ex-5
var x=1, y=2;
function sum(a,b) {
    a=10;
    return a+b;
}
//Pure Function - for same i/p outcome is always same.
console.log(sum(x,y));//12
console.log(sum(x,y));//12
console.log(sum(x,y));//12
console.log(sum(x,y));//12
console.log(sum(x,y));//12
console.log(sum(x,y));//12

//ex-6
let count = 0;
function counter() {
    count++;
    return count;
}
//impure
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3
console.log(counter());//4
console.log(counter());//5

//ex-7
//we can pass functions as arguments in java script. - powerful
function compute(fn, a, b) {
    return fn(a,b);
}
function sum(x,y) {
    return x+y;
}
function substract(x,y) {
    return y-x;
}
//we are passing sum as reference var
console.log(compute(sum,2,3));//5
console.log(compute(substract,2,3));//1


//ex-8
//function can take another function and return another function in java script.
function x(a) {
    return function y(b) {
        return a+b;
    }
}
console.log(x(1)(2));

//ex-9


