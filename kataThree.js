let numberOfVowels = function(data) {
  let numVowel = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (data[i] === vowels[j]) {
        numVowel++;
      }
    }
  }
  return numVowel;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));