//async - Question 1
console.log('A');

setTimeout(function() {
    console.log('B');
}, 1000);//we are executing setTimeout() here, internally at sometime its executing fn,
//it can take minimum of 1 secs.

[T,T].forEach(function(item) {
    console.log(item);
});

console.log('C');

for(var i=0;i<3;i++) {
    console.log('D');
}

console.log('E');
//ans-ATTCDDDEB

//Question-2
console.log('A');

setTimeout(function() {
    console.log('B');
}, 2000);

console.log('C');

setTimeout(function() {
    console.log('D');
}, 1000);

console.log('E');
//ans- ACEDB

//Question-3
function fn1() {
    fn2();
    console.log('C');
}

function fn2() {
    fn3();
    console.log('B');
}

function fn3() {
    console.log('A');
}

fn1();
//ans-ABC

//Question - 4

