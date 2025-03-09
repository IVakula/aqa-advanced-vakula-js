//subtask 3.1
async function fetchToDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response) {
            throw new Error('Request failed');
        }
        const todo = await response.json();
        return Promise.resolve(todo);
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
const promise1 = fetchToDo();

//subtask 3.2
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response) {
            throw new Error('Request failed');
        }
        const user = await response.json();
        return Promise.resolve(user);
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
const promise2 = fetchUser();

//subtask 3.3
const promisesCollection = Promise.all([promise1, promise2]);
promisesCollection
    .then((x) => JSON.stringify(x, null, 2))
    .then(console.log)
    .catch((x) => console.log(x));

const promiseRace = Promise.race([promise1, promise2]);
promiseRace.then((x) => console.log('Fulfilled: ', x)).catch((x) => console.log('Rejected: ', x));
