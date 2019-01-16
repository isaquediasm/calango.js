import arrayToObject from '../utils/array/arrayToObject';
import createObject from '../utils/object/createObject';

/**
 *  Transform an array into a key:value object
 *
 * @param {array} arr Array to be passed
 * @param {string} key The property to be used as key
 */
function toMap(arr) {
  return key => arrayToObject(arr, item => createObject(item[key], item));
}

export default toMap;
