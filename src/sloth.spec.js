import sloth from './sloth';
import { properties } from './__mocks__/dataset';

test('should throw error when the first argument is not an array', () => {
  const instance = () => sloth('string');
  console.log(sloth([]));
  console.log(sloth([], { whitelist: ['value'] }));
  console.log(sloth([], { blacklist: ['group'] }));
  expect(instance).toThrowError();
});

test('should throw error when the second argument (options) is not an object', () => {
  const instance = () => sloth(properties, 'string');
  expect(instance).toThrowError();
});
