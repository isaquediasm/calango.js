/**
 * Create a key based object
 *
 * @param {string} hash - the key to create the object
 * @param {any} props
 */

function createObject(hash, props) {
  return { [hash]: props };
}

module.exports = createObject;
