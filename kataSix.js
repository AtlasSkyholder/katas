let repeatNumbers = function(data) {
  let line = "";
  if (data.length === 1) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i][1]; j++) {
        line += data[i][0];
      }
    }
  } else {
    for (let m = 0; m < data.length; m++) {
      if (m === data.length - 1) {
        for (let n = 0; n < data[m][1]; n++) {
          line += data[m][0];
        }
      } else {
        for (let p = 0; p < data[m][1]; p++) {
          line += data[m][0];
        }
        line += ", ";
      }
    }
  }
  return line;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));