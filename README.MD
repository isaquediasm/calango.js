# [WIP] sloth.js [![Build Status](https://travis-ci.org/isaquediasm/sloth.js.svg?branch=master)](https://travis-ci.org/isaquediasm/sloth.js)

A modern javascript library that empowers native Array's functionality with extra methods that everyone loves.

## Usage

First, install the `sloth` module:
`npm install sloth --save`

or install with yarn
`yarn add sloth`

## API

### `sloth(arr, config)`

#### Arguments:

- `arr` (Array):
- `config` (Object):
  - `whitelist` (Array):
  - `blacklist` (Array):

### `.value`

Simply retrieve the array

```javascript
const arr = [1, 2, 3];
const instance = sloth(arr);
instance.value(); // [1, 2, 3]
```

### `.group(prop)`

```javascript
import sloth from 'sloth';

const properties = sloth([
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

players.group('rating');

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

```javascript
import sloth from 'sloth';

const properties = sloth([
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

players.group('properties', 'neighborhood');

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

### .toMap

```javascript
import sloth from 'sloth';

const properties = sloth([
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

properties.toMap('id');

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

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License
