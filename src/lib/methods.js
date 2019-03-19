import group from './group';
import toMap from './toMap';
import arrayToObject from '../utils/array/arrayToObject';

const methods = arr => ({
  value: {
    value: arr,
    writable: false,
    enumerable: true
  },
  group: {
    value: group(arr),
    writable: false,
    enumerable: true
  },
  toMap: {
    value: toMap(arr),
    writable: false,
    enumerable: true
  }
});

function filterBasedOnList(config) {
  const { whitelist = [], blacklist = [] } = config;

  if (whitelist.length) {
    return method => whitelist.includes(method);
  }

  if (blacklist.length) {
    return method => !blacklist.includes(method);
  }

  return Boolean;
}

function getMethods(arr = [], config = {}, methodsList = methods(arr)) {
  if (!config.whitelist && !config.blacklist) return methodsList;

  return arrayToObject(
    Object.keys(methodsList).filter(filterBasedOnList(config)),
    key => ({ [key]: methodsList[key] })
  );
}

export { getMethods, methods };
