import * as app from '../../app';
import * as math from '../../math';

math.add = jest.fn(() => console.log('***mocked add called***'));
math.subtract = jest.fn(() => console.log('***mock subtract called***'));

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

/* 
The most basic strategy for mocking is to reassign a function to the
Mock Function. Then, anywhere the reassigned functions are used,
the mock will be called instead of the original function
*/
