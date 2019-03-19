import groupByProp from './groupByProp';
import addParentAndOmitProp from '../object/addParentAndOmitProp';

function groupByChild(arr, prop, childProp) {
  const childrenNames = arr
    .map(item => item[prop].map(addParentAndOmitProp(item, prop)))
    .reduce((prev, current) => [...prev, ...current.map(val => val)], []);

  return groupByProp(childrenNames, childProp);
}

export default groupByChild;
