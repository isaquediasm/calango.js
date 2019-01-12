/**
 * Create a key based object
 *
 * @param {string} key - the key to create the object
 * @param {any} props
 */

function createObject(key, props) {
  return { [key]: props };
}

module.exports = createObject;
