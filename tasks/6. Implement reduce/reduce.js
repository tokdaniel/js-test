export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  let accumulator = (initialValue === undefined) ? 0 : initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
}
