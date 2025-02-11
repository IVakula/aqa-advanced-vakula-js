const number = 7;

//for
for (let i = 0; i <= 10; i++) {
    let result = number * i;
    console.log(` ${number} x ${i} = ${result}`);
}
console.log("_____________________\n");

//while 
let count = 1;
while (count <= 10) {
    let result = number * count;
    console.log(` ${number} x ${count} = ${result}`);
    count++;
}