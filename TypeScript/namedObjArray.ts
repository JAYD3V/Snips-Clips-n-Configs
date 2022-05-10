type NamedObj = {
  name: string;
  [key: string]: any;
}

type Obj = {
  [key: string]: {
    [key: string]: any
  }
}

type NamedObjArr = NamedObj[];

/**
 * @param arr Takes an array that contains all objects. Each of the object must have a
 * `name` property, with a string assigned to it. The name will be used as a key to reference the object from which it came.
 * @returns An object that can be used to reference the arrays properties by name.*/
export function nameArray(arr: NamedObjArr){
  let obj: Obj = {};

  arr.forEach((item, index)=>{
    obj[item.name] = item;
  });

  return obj;
}
