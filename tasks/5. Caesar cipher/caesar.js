export function encryptCaesar(inputString, key) {
  // TODO: write your code here
 const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
   const map = getMap(legend, key);
   return inputString
   .toLowerCase()
   .split('')
   .map(char => map[char] || char)
   .join('');
}
const getMap = (legend, shift) => {
   return legend.reduce((charsMap, currentChar, charIndex) => {
      const copy = { ...charsMap };
      let ind = (charIndex + shift) % legend.length;
      if (ind < 0) {
         ind += legend.length;
      };
      copy[currentChar] = legend[ind];
      return copy;
   }, {});
};
