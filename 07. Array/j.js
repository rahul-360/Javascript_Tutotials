const arry=["ram",'shyam', "abc",'true', 12, {name:'rahul'}];

console.log(arry);
console.log(arry[1]);
console.log(arry[10]);

arry[1]="rohan";
console.log(arry);

const numbs=[1, 2,99, 3, 4, 5, 6]

numbs.shift();
console.log(numbs);
numbs.sort();
console.log(numbs);

console.log(numbs.indexOf(5));
console.log(numbs.indexOf(4));
console.log(numbs.indexOf(6));
console.log(numbs.indexOf(1));

numbs.push("Rahul");

numbs.sort();

console.log(numbs);

console.log(numbs.includes(6));

function greeting() {
    console.log("hello world");
}

greeting();

const greet=() =>{
console.log("Hello Rahul");
}
greet();



const vare= () =>{
    console.log("var");
}

vare();



const variable = (count) => {
    for (let i = 0; i <=count; i++)
    console.log(count);
}
variable(5);
console.log("Hello");

