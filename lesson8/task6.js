const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const numbersListNew = [...numbersList].sort((a,b)=> a-b);

console.log(`Source array: \[${numbersList}\].`);
console.log(`New array: \[${numbersListNew}\].`);
