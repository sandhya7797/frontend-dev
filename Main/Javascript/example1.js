//basics
console.log("Hellow Javascript!");

//If-else block
var price=100;
if(price>300) {
    console.log('You are eligible for free-delivery');
} else {
    console.log('Add more to get free-delivery');
}

//switch block
var quantity=10;
switch(quantity) {
    case 1 : 
        console.log('case 1 executed');
        break;
    case 2 :
        console.log('case 2 executed');
        break;
    case 3 :
        console.log('case 3 executed');
        break;
    default :
        console.log('default case executed');
}

//for-loop

for(var i=1;i<=10;i++) {
    console.log(`2x${i}=${2 * i}`);
}

//while loop
var j=1;
while(j<=10) {
    console.log(`3x${j}=${3*j}`);
    j++;
}

//do-while loop
var k=1;
do {
    console.log(`4x${k}=${4*k}`);
} while(k>1);

//object
var bioData = {
    name:"Vishal",
    age:21,
    salary:20000
}
console.log(bioData.name);
bioData.age=27;
console.log(bioData.age);
bioData['age']=28;
console.log(bioData.age);
bioData.city="Vishakapatnam";
console.log(bioData.city);
bioData['state']="AndhraPradesh";
console.log(bioData.state);

//Arrays
var arr = ["one",1,false,"",{a:1}];
console.log(arr[2]);
arr[2]="Mango";
console.log(arr);

arr.unshift("Zero");
console.log(arr);
arr.shift();
console.log(arr);
arr.push("lastone");
console.log(arr);
arr.pop();
console.log(arr);

console.log('splice methods on array');

//slice methods
arr.splice(3,1,"banana");
console.log(arr);//replaces

arr.splice(0,2);
console.log(arr);//deletes

//named function
function sum(a,b) {
    return a+b;
}
console.log("Named function res :" + sum(5,5));

//Anonymous function
var sum = function (a,b) { return a+b};
console.log("Anonynous res: "+ sum(10,10));

//scope
function global() {
    var global="global";
    console.log(global);
    function outer() {
        var outer="outer";
        console.log(global+" "+outer);

        function inner() {
            var inner="inner";
            console.log(global+" "+outer+" "+inner);
        }
        inner();
    }
    outer();    
}

global();

//let
let a = 1;
// let a = "apple";
a = "banana";
console.log(a);

//const
const z = 100;
// const z = "banana";
// z = "1000";
console.log(z);


//homework prblm
console.log(sum(100,200));
function sum(a,b) { return a+b};

// console.log(total(1,2));
// var res = function (a,b) { return a+b};
