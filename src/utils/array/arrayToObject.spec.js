import arrayToObject from './arrayToObject';

const arr = [1, 2, 3];
const parsedArr = { 1: true, 2: true, 3: true };

test('should create an object based on the array passed', () => {
  const obj = arrayToObject(arr, val => ({ [val]: true }));

  expect(typeof obj === 'object').toBe(true);
  expect(obj).toEqual(parsedArr);
});
