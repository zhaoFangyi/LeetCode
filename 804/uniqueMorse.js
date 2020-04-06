/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const aCode = 'a'.charCodeAt(0);
  let retSet = new Set();
  words.forEach(word => {
    let res = ''
    for (let i = 0; i < word.length; i ++) {
      res += code[word.charCodeAt(i)-aCode];
    }
    retSet.add(res);
  })
  return retSet.size;
};