import axios from 'axios';

/* 
expect’s .resolves and .rejects can be applied to async and await too.
There’s also no need to have return in the statement.
*/
describe('test getData', () => {
  it('should be able to handle success call', async () => {
    expect.hasAssertions();
    await expect(axios
      .get('https://jsonplaceholder.typicode.com/todos/')).resolves.toBeDefined();
  });
});