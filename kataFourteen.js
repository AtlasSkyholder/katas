const squareCode = function(message) {
  // Put your solution here
  let textArr = [];
  let crypArr = [];
  while (message.includes(" ")) {
    message = message.replace(" ", "");
  }
  let num = message.length;
  let sqr = Math.ceil(Math.sqrt(num));
  for (let i = 0; i < num; i += sqr) {
    if (i + sqr > num) {
      textArr.push(message.slice(i, num));
    } else {
      textArr.push(message.slice(i, i + sqr));
    }
  }
  for (let j = 0; j < textArr[0].length; j++) {
    let text = "";
    for (let k = 0; k < textArr.length; k++) {
      if (textArr[k].charAt(j)) {
        text += textArr[k].charAt(j);
      } else {
        break;
      }
    }
    crypArr.push(text);
  }
  let crypText = "";
  for (let l = 0; l < crypArr.length; l++) {
    if (l === crypArr.length - 1) {
      crypText += crypArr[l];
    } else {
      crypText += crypArr[l] + " ";
    }
  }
  return crypText;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));