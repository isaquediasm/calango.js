/**
 * Filter an array based on the passed arguemtns
 *
 * @param {array} arr
 * @param {string} key
 * @param {model} string
 */

function filter(arr, key, model) {
  return arr.filter(val => val[key] === model);
}

module.exports = filter;
