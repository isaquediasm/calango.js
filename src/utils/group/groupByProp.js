import arrayToObject from '../array/arrayToObject';
import createObject from '../object/createObject';

function groupByProp(arr, prop) {
  return arrayToObject(arr, item =>
    createObject(item[prop], arr.filter(val => val[prop] === item[prop]))
  );
}

export default groupByProp;
