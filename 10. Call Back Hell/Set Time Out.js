// console.log('Hello World');

// setTimeout(() => {
//     console.log('This is exeute leter');
// }, 3000);

// console.log('Hello World');



function getcheese(callback) {
    setTimeout(() => {
        const cheese = "🍕";
        console.log("Here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

getcheese((cheese) => {
        console.log("Got the cheese", cheese);
    });