let date = new Date();
let day = "";
let dayNum = date.getDate();
let month = "";
let year = date.getFullYear();

switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
       month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }


let todayDate = `${day}, ${dayNum} ${month} ${year}`;
document.querySelector('#update').innerHTML = todayDate;

let copy = document.querySelector("#copyright").innerHTML;
copy = copy.replace("Year", year);
document.querySelector("#copyright").innerHTML = copy;