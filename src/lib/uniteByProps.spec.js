import { properties } from '../__mocks__/dataset';
import uniteByProps from './uniteByProps';

test('should unite all the properties', () => {
  const obj = uniteByProps(properties)();

  expect(obj).toEqual({
    id: ['1', '2'],
    name: ['User 1', 'User 2'],
    rating: [3, 2],
    properties: [
      [
        { name: 'Duplex Flat', neighborhood: 'Friderichshain' },
        { name: 'Cozy Apartment', neighborhood: 'Friderichshain' }
      ],
      [{ name: 'Single Room', neighborhood: 'Lichtenberg' }]
    ]
  });
});

test('should unite the properties name and id and perform mutation on name ', () => {
  const obj = uniteByProps(properties)(['name', 'id'], {
    name: val => `${val}-test`
  });

  expect(obj).toEqual({ name: ['User 1-test', 'User 2-test'], id: ['1', '2'] });
});

test('should unite all properties and perform a math operation on rating', () => {
  const obj = uniteByProps(properties)([], {
    rating: val => val * val
  });

  expect(obj).toEqual({
    id: ['1', '2'],
    name: ['User 1', 'User 2'],
    rating: [9, 4],
    properties: [
      [
        { name: 'Duplex Flat', neighborhood: 'Friderichshain' },
        { name: 'Cozy Apartment', neighborhood: 'Friderichshain' }
      ],
      [{ name: 'Single Room', neighborhood: 'Lichtenberg' }]
    ]
  });
});
