import groupByProp from '../utils/group/groupByProp';
import groupByChild from '../utils/group/groupByChild';

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
