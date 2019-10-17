const instructorWithLongestName = function(instructors) {
  let nameLen = 0;
  let namePos = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (nameLen < instructors[i].name.length) {
      nameLen = instructors[i].name.length;
      namePos = i;
    }
  }
  return instructors[namePos];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));