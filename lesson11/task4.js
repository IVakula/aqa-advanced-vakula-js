class Fetchhelper {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetchUrl(subPath) {
        return fetch(`${this.baseUrl}${subPath}`);
    }

}

class ToDoFetcher extends Fetchhelper {
    async fetchToD(id) {
        try {
            const fetchResponse = await this.fetchUrl(`/todos/${id}`);
            const toDo = await fetchResponse.json();
            return Promise.resolve(toDo);
        } catch (e) {
            console.log(e);
        }
    }
}
class UserFetcher extends Fetchhelper {
    async fetchUser(id) {
        try {
            const fetchResponse = await this.fetchUrl(`/users/${id}`);
            const user = await fetchResponse.json();
            return Promise.resolve(user);
        } catch (e) {
            console.log(e);
        }
    }
}
const baseUrl = "https://jsonplaceholder.typicode.com";
const fetchUser = new UserFetcher(baseUrl).fetchUser(1);
const fetchToDo = new ToDoFetcher(baseUrl).fetchToD(1);

const callAll = async ()=> {
    Promise.all([fetchUser,fetchToDo])
        .then(x => JSON.stringify(x, null, 2))
        .then(console.log);
}
 
const callRace = async() =>{
    Promise.race([fetchUser,fetchToDo])
            .then(x => console.log('Fulfilled: ', x))
            .catch(x => console.log('Rejected: ', x));
}

callAll();
callRace();