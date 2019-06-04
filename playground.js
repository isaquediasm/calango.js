import { normalize, createEntity } from 'calango';

const posts = [
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
];

normalize(posts, data => {});
