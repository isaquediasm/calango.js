# calango.js [![Build Status](https://travis-ci.org/isaquediasm/calango.js.svg?branch=master)](https://travis-ci.org/isaquediasm/calango.js)

A modern javascript library that empowers native Array's functionality with helpers that facilitates data structure manipulations.

## Motivation

Even though there are a couple of nice libraries for data manipulation in javascript, such as lodash, I've decided to go simple and build a small and compact lib with the functionalities I use the most in my daily routine.

## Usage

First, install the `calango` module:

`npm install calango --save`

or install with yarn

`yarn add calango`

## API

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

### .toMap

Transforms an array of objects into a key:value object, based on the passed property.

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
  }
};

*/
```

### `.group(prop)`

Groups objects with the same value for a given property

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
    properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
  },
  {
    id: '3',
    name: 'User 3',
    rating: 2,
    properties: [{ name: 'Single Room', neighborhood: 'Mitte' }]
  }
]);

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

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License
