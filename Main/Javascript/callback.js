//callback - A callback function is a function that is passed as an argument to another function and that is executed later, usually after sometime in future. 
function compute(fn, a,b) {
    //code
    return fn(a,b);
}

function sum(a,b) {
    return a+b;
}

const total = compute(sum,100,200);


