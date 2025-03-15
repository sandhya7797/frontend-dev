const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product'
    }, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product'
    }, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product'
    }];

// //write a function that takes delay and limit as input and returns data with limit. If limit exceeds throw error.

const myFetch = function(delay,limit) {
    //code goes here
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            if(limit>list.length) {
                reject('error');
            } else {
                const res = list.slice(0,limit);
                resolve(res);
            }
        },delay);
    });
}

// //Promise chaining
// myFetch(3000,2)
//             .then((data)=>console.log(data));//product1 & product2 array


// //try-catch
// async function fetchListData() {
//     try {
//         const res = await myFetch(3000,2);
//         console.log(res);
//     } catch {
//         console.log('error');
//     }
// }

// fetchListData();

//Question 1 : Fetch below data in sequence using chaining and async/await.

// myFetch(3000,3);
// myFetch(1000,1);
// myFetch(2000,2);

//Using chaining
// myFetch(3000,3)
//       .then(function(data) {
//         console.log(data);
//         return myFetch(1000,1);
//       })
//       .then(function(data) {
//         console.log(data);
//         return myFetch(2000,2);
//       })
//       .then(function(data) {
//         console.log(data);
//         console.log('Done');
//       })
//       .catch(() => {
//         console.log('error');
//       });

// //Using async/await
// async function getData() {
//     try {
//         const data1 = await myFetch(3000,3);
//         console.log(data1);

//         const data2 = await myFetch(1000,1);
//         console.log(data2);

//         const data3 = await myFetch(2000,2);
//         console.log(data3);

//     } catch {
//         console.log('error');
//     }
// }

// getData();

//Question - 2 Fetch below data in parallel. (terminate asap)

// myFetch(3000,3);
// myFetch(1000,1);
// myFetch(2000,2);

// Promise.all([myFetch(3000,3),myFetch(1000,1),myFetch(2000,2)])
//         .then(function(data) {
//             console.log(data);//array of results
//         })
//         .catch(function(e) {

//         });


//Question - 3 list of success and failure

// Promise.allSettled([myFetch(3000,3),myFetch(1000,5),myFetch(2000,2)])
//         .then(function(data) {
//             console.log(data);//array of results
//         });

//Scenario - 4 Fetch below data in promise and return result asap.

// Promise.race([myFetch(10000,3),myFetch(2000,5),myFetch(2000,2)])
//         .then(function(data) {
//             console.log(data);//array of results
//         }).catch(function(e) {
//             console.log(e);
//         })

//scanerio - 5 execute in parallel return any success
Promise.any([myFetch(10000,3),myFetch(2000,5),myFetch(2000,2)])
        .then(function(data) {
            console.log(data);//array of results
        }).catch(function(e) {
            console.log(e);
        })