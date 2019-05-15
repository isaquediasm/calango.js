import arrayToObject from '../utils/array/arrayToObject';
import createObject from '../utils/object/createObject';
import uniteByProps from './uniteByProps';

export default function normalize(arr) {
  const keys = arrayToObject(Object.keys(arr[0]), key => ({
    [key]: {
      unite: () => uniteByProps(arr)([key]),
      key
    }
  }));

  return fn => fn(keys);
}
