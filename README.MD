# [WORK IN PROGRESS] sloth.js

A modern javascript library that empowers native Array's functionality with extra methods that everyone loves.

### .group

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

### .group (by children)

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

### .removeDuplicates

### .clean

Removes all extra methods from array's proptype
