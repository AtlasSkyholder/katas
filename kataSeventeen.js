let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = parseInt(prompt("Guess a number from 1 to 10: \n"));
let ranNum = Math.floor((Math.random() * 10) + 1);
let count = [];

while (answer !== ranNum) {
  if (Number.isInteger(answer)) {
    if (answer > ranNum) {
      count.push(answer);
      console.log("Too High!");
      answer = parseInt(prompt("Guess a number from 1 to 10: \n"));
    } else if (answer < ranNum) {
      count.push(answer);
      console.log("Too Low!");
      answer = parseInt(prompt("Guess a number from 1 to 10: \n"));
    } else if (answer === ranNum) {
      count.push(answer);
    }
  } else {
    console.log("Not a number. Try again!");
    answer = parseInt(prompt("Guess a number from 1 to 10: \n"));
  }
}
let newCount = [...new Set(count)]; // this removes the repeated guesses from the array into a new array
console.log("You got it! You took " + newCount.length + " attemps!");