import { posts, toMapMock } from '../__mocks__/dataset';
import { calango, createEntity, createReference, createSchema } from '../index';
import normalize from './normalize';

test('', () => {
  normalize(posts.posts)(data => {
    const users = createEntity(data.author);

    const comments = createEntity(data.comments, fields => ({
      ...fields,
      author: createReference(fields.author, users)
    }));

    console.log(JSON.stringify(comments.exec()));

    /*  const obj = calango(data.comments.unite().comments);

    const normalized = obj.toMap('id', fields => ({
      ...fields,
      author: fields.author.id
    }));

    const comments = {
      byId: normalized,
      allIds: Object.keys(normalized)
    };

    const likesObj = calango(data.likes.unite().likes);

    const normalizedLikes = likesObj.toMap();

    const likes = {
      byId: normalizedLikes,
      allIds: Object.keys(normalizedLikes)
    };
    console.log(
      JSON.stringify({
        comments,
        likes
      })
    ); */
  });
});
