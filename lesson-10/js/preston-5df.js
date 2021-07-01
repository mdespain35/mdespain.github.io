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

fetch(foreURL).then((response) => response.json()).then((jsObject) => {
    console.log(jsObject);
    for(let i = 0; i < 5; i++) {
        let day = parseFloat(jsObject.daily[i].dt) * 1000;
        let nDay = new Date(day);
        let card = document.createElement('div');
        let h4 = document.createElement('h4');
        let icon = document.createElement('img');
        let p = document.createElement('p');

        h4.textContent = getDayName(nDay.getDay());
        card.appendChild(h4);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
        const desc = jsObject.daily[i].weather[0].description;
        icon.setAttribute('src', imagesrc);
        icon.setAttribute('alt', desc);
        card.appendChild(icon);

        if (jsObject.daily[i].dt > jsObject.daily[i].sunrise && jsObject.daily[i].dt < jsObject.daily[i].sunset) {
            p.innerHTML = parseFloat(jsObject.daily[i].temp.day).toFixed(0).toString() + " &deg;F";
        } else {
            p.innerHTML = parseFloat(jsObject.daily[i].temp.eve).toFixed(0).toString() + " &deg;F";
        }
        card.appendChild(p);

        document.getElementById('forecast-imgs').appendChild(card);
    }
});