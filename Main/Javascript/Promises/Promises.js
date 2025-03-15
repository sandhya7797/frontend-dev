//Promises
//Call back hell (F3.txt dependent on F2.txt and F2.txt dependent on F1.txt)
//Below code is called ' callback hell' because one callback is dependent on other and continous.
const fs = require('fs');
console.log('start');
//reading is asynchronous
const data_F1 = fs.readFile('f1.txt', function(err1,data1) {
    //callback executes here
    if(err1) {
        console.log('Error reading file1');
    } else {//success
        console.log(data1.toString());
        fs.readFile('f2.txt', function(err2,data2) {
            //callback executes here
            if(err2) {
                console.log('error reading file2');
            } else {
                console.log(data2.toString());
                 fs.readFile('f3.txt', function(err3,data3) {
                    //callback executes here
                    if(err3) {
                        console.log('error reading file3');
                    } else {
                        console.log(data3.toString());
                    }
                })
            }
        })
    }
});
console.log(data_F1);//undefined
console.log('end');


//Promises - avoids callback hell and provides chaining capability. Promises handle async tasks. Pending -> Fulfilled -> Rejected.
//creating promise based on result

const boardPromise = new Promise(function(resolve,reject) {
    const passingScore = 95;
    const studentScore = 99;
    if(studentScore>=95) {
        resolve('promise completed');
    } else {
        reject('promise failed');
    }
});

//promises allow you to chain the things, then is for success and catch for failure.
//with the help of promises we can chain all tasks or things instead of creating callbacks.
//consume
console.log('start');
const p = boardPromise
.then(function(data) {
    //success
    console.log(data);
    return data;
}).then(function(data) {
    console.log(data.toUpperCase());
}).catch(function(error) {
    //failure
    console.log(error);
});
console.log(p);//Promise pending
console.log('end');

//Adding delay in above promise object response which it is going to send. (use set timeout)
const boardPromise_1 = new Promise(function(resolve,reject) {
    const passingScore = 95;
    const studentScore = 99;
    setTimeout(function() {
        if(studentScore>=95) {
            resolve('promise completed');
        } else {
            reject('promise failed');
        }
    },5000);
});

boardPromise_1
.then(function(data) {
    console.log(data);
    return data;
}).then(function(data) {
    console.log(data.toUpperCase());
}).catch(function(error) {
    console.log(error);
});

//convert above callback hell code to promise









