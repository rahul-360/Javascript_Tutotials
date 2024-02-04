function greet() {
    console.log("Hello World");
}
greet();

// Arrow Function

greet = (count) => {
    for (let i = 0; i < count; i++) {

        console.log("Hello World");
    }
}
greet(3);

// Function

const calculate = (a, b, function_operation) => {
    return function_operation(a, b);
}

// method 1

const Addition = calculate(4, 5, function (num1, num2) {
    return num1 + num2;
})
console.log(Addition);

// method 2

const subtraction = (a, b) => a - b;
const subresult = calculate(9, 4, subtraction);

console.log(subresult);

// method 3

function multiply(a,b){
return a*b;
}

const mulresult= calculate(3,5, multiply);;
console.log(mulresult);
