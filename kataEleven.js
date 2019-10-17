const organizeInstructors = function(instructors) {
  // Put your solution here
  let courseObj = {};
  for (let i = 0; i < instructors.length; i++) {
    let newCourse = instructors[i].course;
    if (newCourse in courseObj) {
      courseObj[newCourse].push(instructors[i].name);
    } else {
      courseObj[newCourse] = [instructors[i].name];
    }
  }
  return courseObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));