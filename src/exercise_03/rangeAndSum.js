export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];
  
  if(start === end) {
    return arr;
  } else if(start > end) {
    for(; start > end; start--) {
      arr.push(start);
    }
  } else {
    for(; start < end; start++) {
      arr.push(start);
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  return [...numbers].reduce((total, curr)=>total+curr, 0);
}
