//forEach(), map(), filter(), reduce()
//map - return new array same as input size
//filter
//forEach
//reduce

//eg-1
let arr=[1,2,3,4,5];

function sum(arr1) {
    let sum=0;
    //Imperative Code - you have to take the whole control and there are chances of making mistakes.
    // for(let el of arr1) {
    //     sum+=el;
    // }

    //Declarative Code
    arr1.forEach(function(item,index) {
        sum += item;
    });
    return sum;
}
console.log(sum(arr));

//eg-2 create a function that doubles every item in the array
function double(arr1) {
    const result=[];
    arr1.forEach(function(item,idx) {
        result.push(2*item);
    });
    return result;
}
console.log(double(arr));//[ 2, 4, 6, 8, 10 ]

let arr2=[2,4,6,8,10];
//alterate option is map
function double(arr) {
    const res = arr.map(function(item,idx) {
        return 2*item;
    });
    return res;
}
console.log(double(arr2));

//ex-3 convert everything to uppercase
let arr3 = ["jana","saxena","tapi"];
function toUpperCase(arr3) {
    return arr3.map(function(item,idx) {
        return item.toUpperCase();
    });

}
console.log(toUpperCase(arr3));

//ex-4 (imperative)
let arr4 = [1,2,3,4,5,6,7,8];
function filterEvenNumbers(arr) {
    const res = [];
    for(let el of arr) {
        if(el%2==0) {
            res.push(el);
        }
    }
    return res;
}
console.log(filterEvenNumbers(arr4));

//alternative (declarative)
let arr5 = [1,2,3,4,5,6,7,8];
function filterEvenNumbers(arr) {
    const res = [];
    arr.forEach(function(item,idx) {
        if(item%2===0) {
            return res.push(item);
        }
    });
    return res;
}
console.log(filterEvenNumbers(arr5));

//alternative (declarative) using filter
let arr6 = [1,2,3,4,5,6,7,8];
function filterEvenNumbers(arr) {
    return arr.filter(function(item,idx) {
        return item%2===0;
    });
}
console.log(filterEvenNumbers(arr6));

//ex-5 return only position nums
let arr7 = [-1,2,-3,4,-5,6,7,-8];
function getPositiveNumbers(arr) {
    return arr.filter(function(item,idx) {
        return item>0;
    });
}
console.log(getPositiveNumbers(arr7));

//ex-6
let arr8 = [{amount:100},{amount:200},{amount:500},{amount:700}];
function accountSummary1(arr) {
    let total=0;
    arr.forEach(function(item,idx) {
        total += item.amount;
    });
    return total;
}
console.log(accountSummary1(arr8));

//alternate is reduce - accumulation, transformation
function accountSummary2(arr) {
    return arr.reduce(function(acc,item,idx) {
        acc += item.amount;
        return acc;
    },0);
}
console.log(accountSummary2(arr8));

//ex-7
const letters = ['C','H','A','M','P','S'];
function combineLetter(arr) {
    return arr.reduce(function(acc,item,idx) {
        return acc+=item;
    },'');
}
console.log(combineLetter(letters));