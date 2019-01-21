export default {
  expectArray(prop) {
    if (!Array.isArray(prop)) {
      throw new TypeError(
        `Expected an array as first argument and ${typeof prop} was received instead`
      );
    }
  },
  expectObject(prop) {
    if (typeof prop !== 'object') {
      throw new TypeError(
        `Sloth expected an object as second argument and ${typeof prop} was received instead`
      );
    }
  }
};
