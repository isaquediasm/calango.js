export const properties = [
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
];

export const toMapMock = {
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

export const posts = {
  id: ['1', '2'],
  content: ['Here it comes a nice post', 'Here it comes another nice post'],
  author: [
    { id: '2', name: 'Fernando' },
    { id: '1', name: 'Oleg' },
    { id: '4', name: 'Nathan' },
    { id: '3', name: 'Isaque' }
  ],
  comments: [
    [
      { id: '1', comment: 'Nice', author: { id: '3', name: 'Isaque' } },
      { id: '2', comment: 'Horrible', author: { id: '1', name: 'Oleg' } },
      {
        id: '3',
        comment: 'I think thats bullshit',
        author: { id: '2', name: 'Fernando' }
      }
    ],
    [{ id: '1', comment: 'Nice', author: { id: '2', name: 'Fernando' } }]
  ],
  likes: [
    [{ id: '3', name: 'Isaque' }, { id: '1', name: 'Oleg' }],
    [{ id: '3', name: 'Isaque' }, { id: '1', name: 'Oleg' }]
  ],
  posts: [
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
  ]
};
