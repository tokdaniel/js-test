export function isPalindrome(inputString) {
  // TODO: write your code here
  var str_regex = /[\W_]/g;
  var str_lowreg = str.toLowerCase().replace(str_regex, ''); 
  var str_reverse = str_lowreg.split('').reverse().join(''); 
  return str_reverse === str_lowreg;
}
