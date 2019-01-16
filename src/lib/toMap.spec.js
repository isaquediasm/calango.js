import { properties, toMapMock } from '../__mocks__/dataset';
import toMap from './toMap';

test('should parse array into a key: value object based on the prop `id`', () => {
  const obj = toMap(properties)('id');

  expect(obj).toEqual(toMapMock);
});
