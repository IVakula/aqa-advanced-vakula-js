let age1 = 25;
let age2 = 15;

function checkAdult(age) {
    return age >= 18;
}

console.log(`The age is ${age1}. Is this person adult? ${checkAdult(age1)}.`);
console.log(`The age is ${age2}. Is this person adult? ${checkAdult(age2)}.`);