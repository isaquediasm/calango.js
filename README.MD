# Calango.js [![Build Status](https://travis-ci.org/isaquediasm/calango.js.svg?branch=master)](https://travis-ci.org/isaquediasm/calango.js)

> A modern javascript library that empowers native Array's functionality with helpers that facilitates data structure normalizations.

## Motivation

Many applications have to deal with data that is structured in a nested or relational shape, which leads many times to unnecessary filtering in order to perform mutations and duplicates in several places. Normalizing the data into a hash map, making it look like a database, will prevent us from looping through each element in order to find a specific object.

## Installing

First, install the `calango` module:
`npm install calango --save`

or install with yarn
`yarn add calango`

## Usage

### `calango(arr, config)`

Initalizes the object

#### Arguments:

- `arr` (Array): the array to be mutated
- `config` (Object):
  - `whitelist` (Array): define which methods you want to be available
  - `blacklist` (Array): remove one or many specific methods from the object.

### `.value`

Simply retrieve the array

```javascript
const arr = [1, 2, 3];
const instance = calango(arr);
instance.value(); // [1, 2, 3]
```

### `.toMap(prop)`

Transforms an array of objects into a key:value object, based on the passed property.

##### Arguments:

- `prop` (String): property that will be used as key for the normalization.

```javascript
import calango from 'calango';

const houses = calango([
  {
    id: '1',
    name: 'User 1',
    rating: 3,
    properties: [
      { name: 'Duplex Flat', neighborhood: 'Friderichshain' },
      { name: 'Cozy Apartment', neighborhood: 'Friderichshain' }
    ]
  },
  {
    id: '2',
    name: 'User 2',
    rating: 2,
    properties: [{ name: 'Single Room', neighborhood: 'Lichtenberg' }]
  },
  {
    id: '3',
    name: 'User 3',
    rating: 2,
    properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
  }
]);

houses.toMap('id');

/*
output: 
{
  1: {
    id: '1',
    name: 'User 1',
    rating: 3,
    properties: [
      { name: 'Duplex Flat', neighborhood: 'Friderichshain' },
      { name: 'Cozy Apartment', neighborhood: 'Friderichshain' }
    ]
  },
  2: {
    id: '2',
    name: 'User 2',
    rating: 2,
    properties: [{ name: 'Single Room', neighborhood: 'Lichtenberg' }]
  },
  3: {
    id: '3',
    name: 'User 3',
    rating: 2,
    properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
  }
};

*/
```

### `.group(prop)`

Groups objects with the same value for a given property

```javascript
houses.group('rating');

/*
=> {
  3: [
    {
      id: '1',
      name: 'User 1',
      rating: 3,
      properties: [
        { name: 'Duplex Flat', neighborhood: 'Friderichshain' },
        { name: 'Cozy Apartment', neighborhood: 'Friderichshain' }
      ]
    }
  ],
  2: [
    {
      id: '2',
      name: 'User 2',
      rating: 2,
      properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
    },
    {
      id: '3',
      name: 'User 3',
      rating: 2,
      properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
    }
  ]
}

*/
```

### `group(prop, childProp) (by children)`

Groups objects with the same value for a given child property

```javascript
houses.group('properties', 'neighborhood');

/*
=> {
  'Friderichshain': [
    { 
      name: 'Duplex Flat', 
      neighborhood: 'Friderichshain', 
      parent: { 
        id: '1',
        name: 'User 1',
        rating: 3
      }
    },
    { 
      name: 'Cozy Apartment',
      neighborhood: 'Friderichshain',
      parent: { 
        id: '1',
        name: 'User 1',
        rating: 3
      }
    }
  ],
  'Mitte': [
    {
      name: 'Single Room',
      neighborhood: 'Mitte'
      parent: {
        id: '2',
        name: 'User 2',
        rating: 2
      }
    },
    {
      name: 'Single Room',
      neighborhood: 'Mitte'
      parent: {
        id: '3',
        name: 'User 3',
        rating: 2
      }
    }
  ]
}

*/
```

### `uniteByProps(prop, formatter)`

```javascript
houses.uniteByProps();

/*
=> {
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
  }
*/

houses.uniteByProps(['name', 'id'], { name: val => `${val}-foo` });

/*
=> { name: ['User 1-foo', 'User 2-foo'], id: ['1', '2'] }
*/

house.uniteByProps([], { rating: val => val * val });

/*
=> {
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
  }
*/
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License
