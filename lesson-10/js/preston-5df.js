const foreURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&exclude=current,minutely,hourly,alerts&appid=79ada910be24866f994eac62790cdc83&units=imperial"

function getDayName(day) {
    switch (day) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
           return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
      }
}