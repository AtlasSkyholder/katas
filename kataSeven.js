let camelCase = function(input) {
  let gap = [];
  let line = "";
  gap = input.split(" ");
  line = gap[0];
  for (let i = 1; i < gap.length; i++) {
    let word1 = gap[i].substring(0, 1);
    let word2 = gap[i].substring(1);
    word1 = word1.toUpperCase();
    word1 = word1.concat(word2);
    line += word1;
  }
  return line;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));