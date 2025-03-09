//subtask 2.1
const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((todo) => {
		return Promise.resolve(todo);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

//subtask 2.2
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/1')
	.then((response) => response.json())
	.then((user) => {
		return Promise.resolve(user);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

//subtask 2.3
const promisesCollection = Promise.all([promise1, promise2]);
promisesCollection.then((x) => JSON.stringify(x, null, 2)).then(console.log);

const promiseRace = Promise.race([promise1, promise2]);
promiseRace.then((x) => console.log('Fulfilled: ', x)).catch((x) => console.log('Rejected: ', x));
