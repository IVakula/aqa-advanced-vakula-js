const users = [
    { name: 'Ivanov', age: 21, student: true },
    { name: 'Beck', age: 41, student: false },
    { name: 'Petrenko', age: 27, student: false },
];

for (const user of users) {
    console.log(`${user.name} (${user.age} years old) is student: ${user.student}.`);
};
console.log('=================');

for (const { name, age } of users) {
    console.log(`${name} is ${age} years old`);
};