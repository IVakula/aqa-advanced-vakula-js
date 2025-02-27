const person = {
    firstName: 'Ivan',
    lastName: 'Beck',
    age: 32
}
person.email = 'ivanb@gmail.com';
delete person.age;

console.log(person);