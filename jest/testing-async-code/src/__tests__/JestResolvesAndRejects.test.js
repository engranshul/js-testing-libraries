import axios from 'axios';
/* 
  See how in one describe we have provided two testcases..
  Jest provides .resolves and .rejects matchers for expect 
  statements.
*/
describe('test json placeholder api', () => {
  it('should be able to handle success call', () => {
    expect.hasAssertions();
    return expect(
      axios.get('https://jsonplaceholder.typicode.com/todos/')
    ).resolves.toBeDefined();
  });

/* this testcase will fail with below msg:
   Received promise resolved instead of rejected 
*/
  it('should be able to handle failed call', () => {
    return expect(
      axios.get('https://jsonplaceholder.typicode.com/todos/')
    ).rejects.toThrowError('Unknown case');
  });
});
