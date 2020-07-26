export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == undefined) {
    throw('Creating list from undefined array');
  }
  if(array.length === 0) {
    throw('Creating list from empty array');
  }

  const head = {next: null, value: array[0]};
  let curr = head;

  for(let i=1; i < array.length; i++) {
    let node = {next: null, value: array[i]};
    curr.next = node;
    curr = node;
  }
  return head;
}
