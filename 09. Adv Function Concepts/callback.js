const a = [23, 45, 6, -2, 67, 35, 4, 56, 34, 645, 66];


const firstneg = (Num) => {
    return Num < 0;
};

const result = a.find(firstneg);

console.log(result);

const result1 = a.findIndex(firstneg);

console.log(result1);

const result2 = a.find(firstneg);

console.log(result2);
