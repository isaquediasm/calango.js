/**
 * Create an object from an array
 *
 * @param {array} arr
 * @param {function} fn
 */

function arrayToObject(arr, fn) {
  return Object.assign(...arr.map(fn));
}

module.exports = arrayToObject;

