import { properties as flats } from '../__mocks__/dataset';
import uniteByProps from './uniteByProps';

test('should unite all the properties', () => {
  const obj = uniteByProps(flats)();

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
  const obj = uniteByProps(flats)(['name', 'id'], {
    name: val => `${val}-test`
  });

  expect(obj).toEqual({ name: ['User 1-test', 'User 2-test'], id: ['1', '2'] });
});

test('should unite all properties and perform a math operation on rating', () => {
  const obj = uniteByProps(flats)([], {
    rating: val => val * val
  });

  const obj2 = uniteByProps([
    {
      id: '1',
      content: 'Here it comes a nice post',
      author: { id: '4', name: 'Nathan' },
      comments: [
        { id: '1', comment: 'Nice', author: { id: '3', name: 'Isaque' } },
        { id: '2', comment: 'Horrible', author: { id: '1', name: 'Oleg' } },
        {
          id: '3',
          comment: 'I think thats bullshit',
          author: { id: '2', name: 'Fernando' }
        }
      ],
      likes: [{ id: '3', name: 'Isaque' }, { id: '1', name: 'Oleg' }]
    },
    {
      id: '2',
      content: 'Here it comes another nice post',
      author: { id: '3', name: 'Isaque' },
      comments: [
        { id: '1', comment: 'Nice', author: { id: '2', name: 'Fernando' } }
      ],
      likes: [{ id: '3', name: 'Isaque' }, { id: '1', name: 'Oleg' }]
    }
  ])();

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
