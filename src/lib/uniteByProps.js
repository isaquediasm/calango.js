function spreadProps(props, func) {
  return Object.assign(...props.map(func));
}

/**
 * uniteByProperties
 *
 * @export
 * @param {Array} arr
 * @returns {Object}
 */
export default function uniteByProps(arr) {
  return (attributes = [], formatting = {}) => {
    const props = attributes.length ? attributes : Object.keys(arr[0]);
    const initialAccumulator = spreadProps(props, val => ({ [val]: [] }));

    return arr.reduce(
      (acc, next) =>
        spreadProps(props, val => ({
          [val]: [
            ...acc[val],
            formatting[val] !== undefined
              ? formatting[val](next[val], acc, next)
              : next[val]
          ]
        })),
      initialAccumulator
    );
  };
}

/* x
calango([]).uniteByProperties([], { prod: val => val })

calango([]).uniteByProperty({
  rank: (val) => val * val,
  prod: val => val
})

calango([]).uniteByProperty([], {
  rank: (val) => val * val,
  kv: (val, obj) => val * val,
})

//v1
calango([]).uniteByProperties()
calango([]).uniteByProperties([])
calango([]).uniteByProperties([], { prod: val => val })
//v2
calango([]).uniteByProperties()
calango([]).uniteByProperties({ 
  include: []
}
calango([]).uniteByProperties({ 
  include: [],
  transform: [prod: val => val] 
}

 */
