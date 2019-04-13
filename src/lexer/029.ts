export function objEqual(obj1: any, obj2: any) {
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    console.log('not an object');
    return false;
  }

  let keyOfObj1 = Object.keys(obj1);
  let keyOfObj2 = Object.keys(obj2);
  if (keyOfObj1.length !== keyOfObj2.length) {
    console.log('length not equal');
    return false;
  }

  let result = keyOfObj1.every(keyEntity => {
    return obj1[keyEntity] === obj2[keyEntity];
  });

  return result;
};

export function arrayEqual(arr1: Array<any>, arr2: Array<any>) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = arr1.every((arrEntity: any, index: number) => {
    return arrEntity === arr2[index];
  });

  return result;
}

/**
 *
 * @param obj1
 * @param obj2
 */
export function mixEqual(obj1: any, obj2: any) {
  let keyOfObj1 = Object.keys(obj1);
  let keyOfObj2 = Object.keys(obj2);
  if (keyOfObj1.length !== keyOfObj2.length) {
    return false;
  }

  const obj1Array = Array.isArray(obj1);
  const obj2Array = Array.isArray(obj2);

  if (obj1Array !== obj2Array) {
    return false;
  }

  if (obj1Array === true) {
    // deep check
  } else {
    // return arrayEqual(obj1, obj2);
  }
}
