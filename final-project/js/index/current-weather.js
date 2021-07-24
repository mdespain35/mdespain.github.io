const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5391811&appid=79ada910be24866f994eac62790cdc83&units=imperial";

fetch(apiURL).then((response) => response.json()).then((jsObject) => {

    let weather = document.createElement('div');
    let desc = document.createElement('p');
    let temp = document.createElement('p');
    let humid = document.createElement('p');

    desc.textContent = jsObject.weather[0].main;

    temp.innerHTML = parseFloat(jsObject.main.temp).toFixed(1).toString() + " &deg;F";
    humid.textContent = jsObject.main.humidity + "%";

    weather.appendChild(desc);
    weather.appendChild(temp);
    weather.appendChild(humid);
    weather.setAttribute('class', 'current');
    document.getElementById("current-weather").appendChild(weather);
});