const blocksAway = function(directions) {
  // Put your solution here
  let taxi = [7,0];
  let start = "";
  let adding = "";
  let place = "";
  let compass = "";
  for (let i = 0; i < directions.length; i++) {
    if (Number.isInteger(directions[i])) {
      if (adding === "add" && place === "1") {
        taxi[1] = taxi[1] + directions[i];
      } else if (adding === "add" && place === "0") {
        taxi[0] = taxi[0] + directions[i];
      } else if (adding === "minus" && place === "1") {
        taxi[1] = taxi[1] - directions[i];
      } else if (adding === "minus" && place === "0") {
        taxi[0] = taxi[0] - directions[i];
      }
    } else {
      if (start === "") {
        start = directions[i];
        if (start === "right") {
          adding = "add";
          place = "1";
          compass = "east";
        } else {
          adding = "minus";
          place = "0";
          compass = "north";
        }
      } else if (compass === "east" && adding === "add" && place === "1" && directions[i] === "left") {
        adding = "minus";
        place = "0";
        compass = "north";
      } else if (compass === "east" && adding === "add" && place === "1" && directions[i] === "right") {
        place = "0";
        compass = "south";
      } else if (compass === "south" && adding === "add" && place === "0" && directions[i] === "right") {
        place = "1";
        adding = "minus";
        compass = "west";
      } else if (compass === "south" && adding === "add" && place === "0" && directions[i] === "left") {
        place = "1";
        compass = "east";
      } else if (compass === "west" && adding === "minus" && place === "1" && directions[i] === "left") {
        place = "0";
        adding = "add";
        compass = "south";
      } else if (compass === "west" && adding === "minus" && place === "1" && directions[i] === "right") {
        place = "0";
        compass = "north";
      } else if (compass === "north" && adding === "minus" && place === "0" && directions[i] === "left") {
        place = "1";
        compass = "west";
      } else if (compass === "north" && adding === "minus" && place === "0" && directions[i] === "right") {
        place = "1";
        adding = "add";
        compass = "east";
      }
    }
  }
  let objTaxi = {};
  objTaxi.east = taxi[1];
  objTaxi.north = 7 - taxi[0];
  return objTaxi;
};
  
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));