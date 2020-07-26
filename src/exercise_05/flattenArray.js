export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == undefined)
    throw('Flatten undefined or null array');
  
  if(array.length === 0) 
    return [];

  return array.reduce((flattenArr, curr)=> flattenArr.concat(curr), []);
}
