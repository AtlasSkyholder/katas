const urlEncode = function(text) {
  let newText = text.trim();
  let gap = 0;
  for (let i = 0; i < newText.length; i++) {
    if (newText.charAt(i) === " ") {
      gap++;
    }
  }
  for (let j = 0; j < gap; j++) {
    newText = newText.replace(" ", "%20");
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));