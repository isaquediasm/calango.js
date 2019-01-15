import omit from '../object/omit';

function addParentAndOmitProp(parentObj, prop) {
  return val => Object.assign(val, { parent: omit(parentObj, prop) });
}

export default addParentAndOmitProp;
