import * as app from '../../app';
import * as math from '../../math';

/*  
Below line sets all module functions to jest.fn
So, calling jest.mock('./math.js'); essentially sets math.js to:

export const add      = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide   = jest.fn();
*/ 


jest.mock('../../math.js');

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
