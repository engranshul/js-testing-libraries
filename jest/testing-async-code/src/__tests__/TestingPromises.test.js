import axios from 'axios';

/* 
this will fail coz assertion never gets executed coz of async nature of code
*/
describe('testing promises', () => {
  it('should be able to handle getData', () => {
       expect.hasAssertions();
       axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then((data) => expect(data).toBeDefined());
  });
});


/* 
Simply add return before the promise. Since it returns a promise, 
the test will wait for the promise to be resolved or rejected.
Therefore, the expect statement in the then and catch methods gets a 
chance to execute the callback.
*/

describe('testing promises', () => {
  it('should be able to handle getData', () => {
    expect.hasAssertions();
    return axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then((data) => expect(data).toBeDefined());
  });
});