const makeCase = function(input, style) {
  // Put your solution here
  let newLine = "";
  if (Array.isArray(style) === true) {
    newLine = input;
    for (let i = 0; i < style.length; i++) {
      switch (style[i]) {
      case "camel":
        newLine = camelCase(newLine);
      case "pascal":
        newLine = pascalCase(newLine);
      case "snake":
        newLine = snakeCase(newLine);
      case "kebab":
        newLine = kebabCase(newLine);
      case "title":
        newLine = titleCase(newLine);
      case "vowel":
        newLine = vowelCase(newLine);
      case "consonant":
        newLine = consonantCase(newLine);
      case "upper":
        newLine = upperCase(newLine);
      }
    }
  } else {
    switch (style) {
    case "camel":
      newLine = camelCase(input);
      break;
    case "pascal":
      newLine = pascalCase(input);
      break;
    case "snake":
      newLine = snakeCase(input);
      break;
    case "kebab":
      newLine = kebabCase(input);
      break;
    case "title":
      newLine = titleCase(input);
      break;
    case "vowel":
      newLine = vowelCase(input);
      break;
    case "consonant":
      newLine = consonantCase(input);
      break;
    case "upper":
      newLine = upperCase(input);
      break;
    }
  }
  return newLine;
};

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

let pascalCase = function(input) {
  let gap = [];
  let line = "";
  gap = input.split(" ");
  for (let i = 0; i < gap.length; i++) {
    let word1 = gap[i].substring(0, 1);
    let word2 = gap[i].substring(1);
    word1 = word1.toUpperCase();
    word1 = word1.concat(word2);
    line += word1;
  }
  return line;
};

let snakeCase = function(input) {
  let line = input;
  let gap = 0;
  for (let i = 0; i < line.length; i++) {
    if (line.charAt(i) === " ") {
      gap++;
    }
  }
  for (let j = 0; j < gap; j++) {
    line = line.replace(" ", "_");
  }
  return line;
};

let kebabCase = function(input) {
  let line = input;
  let gap = 0;
  for (let i = 0; i < line.length; i++) {
    if (line.charAt(i) === " ") {
      gap++;
    }
  }
  for (let j = 0; j < gap; j++) {
    line = line.replace(" ", "-");
  }
  return line;
};

let titleCase = function(input) {
  let gap = [];
  let line = "";
  gap = input.split(" ");
  for (let i = 0; i < gap.length; i++) {
    let word1 = gap[i].substring(0, 1);
    let word2 = gap[i].substring(1);
    word1 = word1.toUpperCase();
    word1 = word1.concat(word2);
    line += word1;
    if (i === gap.length - 1) {
      break;
    } else {
      line += " ";
    }
  }
  return line;
};

let vowelCase = function(input) {
  let vowels = "aeiou";
  let line = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        line += input[i].toUpperCase();
        break;
      } else if (j === 4) {
        line += input[i];
      }
    }
  }
  return line;
};

let consonantCase = function(input) {
  let vowels = "aeiou";
  let line = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        line += input[i];
        break;
      } else if (j === 4) {
        line += input[i].toUpperCase();
      }
    }
  }
  return line;
};

let upperCase = function(input) {
  let line = "";
  for (let i = 0; i < input.length; i++) {
    line += input[i].toUpperCase();
  }
  return line;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));