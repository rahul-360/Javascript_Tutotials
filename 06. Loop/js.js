// For Loop
console.log('For Loop');

for (let x = 0; x <= 10; x++) {
    console.log("For Loop", x);
}
console.log('For Loop');
for (let x = 0; x <= 20; x += 5) {
    console.log("For Loop", x);
}
//  While Loop

console.log('While Loop');
let num = 0;

while (num < 10) {
    console.log('While loop', num);
    num += 1;
}

// Do While Loop
console.log('Do while loop');
num = 0;
do {
    console.log('Do whole loop', num);
    num++;

} while (num < 10);


// Break & countinue

num = 0;
while (num < 5) {
    console.log('num', num);
    num++;
    if (num==3) {
        break;
    }
}

num=0;
while (num < 10) {
    console.log('num', num);
    num++;
    if (num==3) {
        continue;
    }
}