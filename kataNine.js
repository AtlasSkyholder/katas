let talkingCalendar = function(date) {
  let arrayDate = date.split("/");
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = arrayDate[2];
  let month = arrayDate[1];
  let year = arrayDate[0];
  let newDay = "";
  let newDate = "";
  if (day.charAt(1) === "1") {
    newDay = day.charAt(0) + "1st";
  } else if (day.charAt(1) === "2") {
    newDay = day.charAt(0) + "2nd";
  } else if (day.charAt(1) === "3") {
    newDay = day.charAt(0) + "3rd";
  } else {
    newDay = day + "th";
  }
  if (newDay.charAt(0) === "0") {
    newDay = newDay.replace("0", "");
  }
  newDate = monthArray[parseInt(month) - 1] + " " + newDay + ", " + year;
  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));