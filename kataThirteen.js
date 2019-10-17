const urlDecode = function(text) {
  let objText = {};
  if (text.includes("&")) {
    let textArr = text.split("&");
    for (let i = 0; i < textArr.length; i++) {
      let tempArr = textArr[i].split("=");
      while (tempArr[1].includes("%20")) {
        tempArr[1] = tempArr[1].replace("%20", " ");
      }
      objText[tempArr[0]] = tempArr[1];
    }
  } else {
    let tempArr = text.split("=");
    while (tempArr[1].includes("%20")) {
      tempArr[1] = tempArr[1].replace("%20", " ");
    }
    objText[tempArr[0]] = tempArr[1];
  }
  return objText;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);