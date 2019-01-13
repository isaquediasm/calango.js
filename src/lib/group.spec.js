import { properties } from '../__mocks__/dataset';
import group from './group';

test('should group array', () => {
  console.log(group(properties)('properties', 'neighborhood'));
});
