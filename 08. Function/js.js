function sum_of_two_number(x, y) {
    const sum = x + y;
    console.log('result', sum);
    return sum;
}

const a = 23;
const b = 34;
const result = sum_of_two_number(a, b);
console.log('returned result', result);

const c = 345;
const d = 342;
sum_of_two_number(c, d);

// function expression
const square = function (num) {
    return num * num;
}
console.log(square(9));


// Nested Function
console.log('Nested Function');

function addsqures(a, b) {
    const sa = square(a);
    const sb = square(b);
    function square(num) {
        return num * num;
    }
    return sa + sb;
}

console.log(addsqures(4,5));