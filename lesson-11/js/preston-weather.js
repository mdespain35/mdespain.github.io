const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=79ada910be24866f994eac62790cdc83&units=imperial";

fetch(apiURL).then((response) => response.json()).then((jsObject) => {
    document.getElementById('desc').textContent = jsObject.weather[0].main;
    let highT = parseFloat(jsObject.main.temp_max);
    document.getElementById('high').innerHTML = highT.toFixed(1).toString() + " &deg;F";

    let currentT = parseFloat(jsObject.main.temp);
    document.getElementById('current').innerHTML = currentT.toFixed(1).toString() + " &deg;F";

    let speed = parseFloat(jsObject.wind.speed);

    if ((speed > 3) && (currentT <= 50)) {
        let chill = Math.round(35.74 + 0.6215 * currentT - 35.75 * Math.pow(speed, 0.16) + 0.4275 * currentT * Math.pow(speed, 0.16));
    
        document.getElementById('wind-chill').innerHTML = chill.toFixed(1).toString() + " &deg;F";
    } else {
        document.getElementById('wind-chill').textContent = "N/A";
    }

    document.getElementById('humid').textContent = jsObject.main.humidity + "%";
    document.getElementById('wind-speed').textContent = speed.toFixed(1).toString() + " mph";
});

