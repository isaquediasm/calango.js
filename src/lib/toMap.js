import arrayToObject from '../utils/array/arrayToObject';
import createObject from '../utils/object/createObject';

/**
 *  Transform an array into a key:value object
 *
 * @param {array} arr Array to be passed
 * @param {string} key The property to be used as key
 */
function toMap(arr) {
  const data = Array.isArray(arr[0])
    ? arr.reduce((acc, curr) => [...acc, ...curr], [])
    : arr;

  return (key = 'id', formatter = a => a) =>
    arrayToObject(data, item => createObject(item[key], formatter(item)));
}

export default toMap;
