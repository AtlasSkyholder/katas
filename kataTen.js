let calculateChange = function(total, cash) {
  // this is an array made of all possible change to be used to build the change Array
  let money = [["twentyDollar", 2000], ["tenDollar", 1000], ["fiveDollar", 500], ["twoDollar", 200], ["oneDollar", 100], ["quarter", 25], ["dime", 10], ["nicklel", 5], ["penny", 1]];
  // this variable is to alocate the change due
  let change = cash - total;
  // here a function changeFunction is called, it's a function to build an array with all individual change
  let changeArray = changeFunction(change, money);
  // here a function objectArray is called where the changeArray is turned from an array of elements to an object
  let finalChange = objectArray(changeArray);
  return finalChange;
};

let changeFunction = function(change, money) {
  let changeArray = [];
  while (change > 0) {
    // an array of change where the elements are all strings is built,
    // while change is subtracted until it reaches 0
    for (let i = 0; i < money.length; i++) {
      if (change >= money[i][1]) {
        changeArray.push(money[i][0]);
        change = change - money[i][1];
        break;
      }
    }
  }
  return changeArray;
};

let objectArray = function(changeArray) {
  let finalObject = {};
  let num = 0;
  let name = "";
  // here the array which was set in order, from highest to lowest change,
  // is set on a loop to count and add the common elements of change,
  // add the element to the object and update its quantity.
  // Object, unlike Array, does not allow to have multiple instances of the same element,
  // this is useful to have it in a loop and just update its value.
  for (let j = 0; j < changeArray.length; j++) {
    if (changeArray[j] !== name) {
      name = changeArray[j];
      num = 1;
    } else {
      num++;
    }
    finalObject[changeArray[j]] = num;
  }
  return finalObject;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));