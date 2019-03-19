import calango from './index';
import { properties } from './__mocks__/dataset';

test('should throw error when the first argument is not an array', () => {
  const instance = () => calango('string');
  expect(instance).toThrowError();
});

test('should throw error when the second argument (options) is not an object', () => {
  const instance = () => calango(properties, 'string');
  expect(instance).toThrowError();
});
