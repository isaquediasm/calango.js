import { getMethods } from './lib/methods';
import validate from './helpers/validate';
/**
 *
 *
 * @param {*} [arr=[]]
 * @param {*} [config={}]
 * @returns
 */
function calango(arr, config) {
  validate.expectArray(arr);
  !!config && validate.expectObject(config);

  const methods = {};

  Object.defineProperties(methods, getMethods(arr, config));
  return methods;
}

export default calango;
