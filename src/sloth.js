import group from 'lib/group';

function sloth(arr) {
  const self = arr;
  const prototype = self.__proto__;

  prototype.group = group(arr);

  return _arr;
}

export default sloth;
