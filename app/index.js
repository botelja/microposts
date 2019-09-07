import Http from './http.js';
import './main.css';

const data = {
  name: 'Jhon Doe',
  username: 'jhondoe',
  email: 'john@doe.com'
};

const http = new Http();

// http
//   .get('https://jsonplaceholder.typicode.com/todos/1')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
