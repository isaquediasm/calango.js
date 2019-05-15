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
  if (config) validate.expectObject(config);

  const methods = {};
  Object.defineProperties(methods, getMethods(arr, config));
  return methods;
}

function createSchema(name, entity, formatter = a => a) {
  const obj = calango(entity).toMap('id', formatter);

  return {
    [name]: {
      byId: obj,
      allIds: Object.keys(obj)
    }
  };
}

function createEntity(entity, modifier, idProp = 'id') {
  return {
    id: idProp,
    exec: () => {
      const obj = calango(entity.unite()[entity.key]);
      const normalized = obj.toMap('id', modifier);

      return {
        byId: normalized,
        allIds: Object.keys(normalized)
      };
    }
  };
}

function createReference(field, entity) {
  const isObject = typeof field === 'object';
  const isArray = Array.isArray(field);

  if (!isArray && !isObject) return field;

  return isArray ? field.map(item => item[entity.id]) : field[entity.id];
}

function createSchema(objectMap, entities) {}

export default calango;
export { calango, createSchema, createEntity, createReference };
