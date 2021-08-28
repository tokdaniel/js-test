export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = getFibonacciUntil(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
