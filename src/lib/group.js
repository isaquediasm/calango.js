import arrayToObject from '../utils/array/arrayToObject';
import createObject from '../utils/object/createObject';
import omit from '../utils/object/omit';

function groupByProp(arr, prop) {
  return arrayToObject(arr, item =>
    createObject(item[prop], arr.filter(val => val[prop] === item[prop]))
  );
}

function groupByChild(arr, prop, childProp) {
  const childrenNames = arr
    .map(item =>
      item[prop].map(val => Object.assign(val, { parent: omit(item, prop) }))
    )
    .reduce((prev, current) => {
      return [...prev, ...current.map(val => val)];
    }, []);

  return groupByProp(childrenNames, childProp);
}

function group(arr) {
  return (prop, childProp) => {
    if (!arr[0].hasOwnProperty(prop)) {
      return arr;
    }

    if (!Array.isArray(arr[0][prop])) {
      return groupByProp(arr, prop);
    }

    if (Array.isArray(arr[0][prop]) && childProp) {
      return groupByChild(arr, prop, childProp);
    }
  };
}

export default group;
