/* eslint-disable no-undef */
import { calango, createSchema } from './index';
import { properties, posts } from './__mocks__/dataset';

const methods = ['value', 'group', 'toMap', 'limit', 'uniteByProps'];

test('should throw error when the first argument is not an array', () => {
  const instance = () => calango('string');
  expect(instance).toThrowError();
});

test('should throw error when the second argument (options) is not an object', () => {
  const instance = () => calango(properties, 'string');
  expect(instance).toThrowError();
});

test('should return methods', () => {
  const obj = calango(properties);
  expect(Object.keys(obj)).toEqual(methods);
});

test('', () => {
  /*   const authors = createSchema('authors', posts.author).authors;
   */
  const comments = createSchema('comments', posts.comments, item => ({
    ...item,
    author: authors.byId[item.author.id].id
  })).comments;

  const finalPosts = createSchema('posts', posts.posts, item => ({
    content: item.content,
    author: authors.byId[item.author.id].id,
    comments: item.comments.map(item => item.id),
    likes: item.likes.map(item => item.id)
  })).posts;

  const finalSchema = {
    authors,
    comments,
    posts: finalPosts
  };

  /*   console.log(JSON.stringify(authors));
  console.log(JSON.stringify(comments));
  console.log(JSON.stringify(likes)); */
  /*  console.log(JSON.stringify(finalSchema)); */
});
