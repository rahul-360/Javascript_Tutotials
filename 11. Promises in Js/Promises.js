const ticket = new Promise(function (resolve, reject) {
    const isBoarded = false;
    if (isBoarded) {
        resolve('You Are not in the Flight');
    } else {
        reject('Your Flight has been cancelled')
    }
});

ticket.then((data) => {
    console.log("wohoo", data);
})
    .catch((data) => {
        console.log('oh no', data);
    })
  
    .finally(() =>{
        console.log('I will Always be executed');
    })