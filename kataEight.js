const multiplicationTable = function(maxValue) {
  let line = "";
  for (let i = 1; i <= maxValue; i++) {
    let array1 = [];
    for (let j = 1; j <= maxValue; j++) {
      let num = i * j;
      array1.push(num);
    }
    for (let k = 0; k < array1.length; k++) {
      line += array1[k] + " ";
    }
    line = line + "\n";
  }
  return line;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));