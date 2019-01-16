import group from './lib/group';
import toMap from './lib/toMap';

const methods = {
  group,
  toMap
};

function sloth(arr = [], config = {}) {
  if (!Array.isArray(arr)) {
    throw new Error(
      `Sloth expected an array as first argument and ${typeof arr} was received instead`
    );
  }

  if (typeof config !== 'object') {
    throw new Error(
      `Sloth expected an object as second argument and ${typeof arr} was received instead`
    );
  }

  const self = arr;
  const prototype = self.__proto__;

  prototype.group = group(arr);
  prototype.toMap = toMap(arr);

  return self;
}

export default sloth;
