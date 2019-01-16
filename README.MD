# [WORK IN PROGRESS] sloth.js

A modern javascript library that empowers native Array's functionality with extra methods that everyone loves.

```javascript
import sloth from 'sloth';

const arr = sloth([]);
const arr = sloth([], { whitelist: ['group'] });
const arr = sloth([], { blacklist: ['group'] });

arr.group('rating');
arr.group('properties', 'neighborhood');
arr.toSet();
```

### .group

```javascript
const players = sloth([
  {
    name: 'Ronaldinho',
    stars: 5
  },
  {
    name: 'Neymar',
    stars: 5
  },
  {
    name: 'David Luiz',
    stars: 4
  }
]);

players.group('stars');

/*
output: 

{
  5: [
    {
      name: 'Ronaldinho',
      stars: 5
    },
    {
      name: 'Neymar',
      stars: 5
    }
  ],
  4: [
    {
      name: 'David Luiz',
      stars: 4
    }
  ]
}

*/
```

### .toMap

### .removeDuplicates

### .clean

Removes all extra methods from array's proptype
