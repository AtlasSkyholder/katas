let sumLargestNumbers = function(data) {
  let x = 0;
  let y = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (x < data[i]) {
      x = data[i];
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (y < data[j] && data[j] !== x) {
      y = data[j];
    }
  }
  sum = x + y;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));