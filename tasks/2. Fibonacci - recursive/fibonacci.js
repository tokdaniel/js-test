export function getFibonacciUntil(n) {
  function getFibonacci(i) {
    if (i === 0 || i === 1) return i;
    if (i >= 2) return getFibonacci(i - 2) + getFibonacci(i - 1);
  }
  if (typeof n !== 'number') return false;
  return Array.from({ length: n }, (_, index) => getFibonacci(index));
}
