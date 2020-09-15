/* 
this test passes even when it should fail..
Assertion never reaches as setTimeout runs async and before its
completion test finishes
*/

describe('this test will get passed coz assertion will not get executed due to async nature of code', () => {
  it('this should pass', () => {
    setTimeout(() => {
      console.log('hello');
      expect(1).toBe(2);
    });
  });
});


/* 
expect.assertions(number) verifies that a certain number of assertions 
are called during a test. This is often useful when testing asynchronous 
code, in order to make sure that assertions in a callback actually got
called.
*/

describe('this test will fail coz expected one assertion to be called but received zero assertion calls', () => {
  it('this should fail', () => {
    expect.assertions(1);
    setTimeout(() => {
      console.log('hello');
      expect(1).toBe(2);
    });
  });
});

/* 
we invoke done() to tell Jest it can exit now. With the help of the done 
callback, this test case fails as expected.
*/

describe('passing done callback to the testcase..', () => {
  it('this should not pass', (done) => {
    expect.assertions(1);
    setTimeout(() => {
      expect(1).toBe(2);
      done();
    });
  });
});



/* 
These tests get executed by npm run test..
*/
