/**
 * Create an object, spreads and maps an array
 *
 * @param {array} arr
 * @param {function} fn
 */

function arrayToObject(arr, fn) {
  return Object.assign(...arr.map(fn));
}

module.exports = arrayToObject;
