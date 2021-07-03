const windSpeed = document.querySelector('.wind-speed');
const temperature = document.querySelector('.high');
const windChill = document.querySelector('.wind-chill');

let speed = parseInt(windSpeed.innerHTML);
let temp = parseInt(temperature.innerHTML);

if ((speed > 3) && (temp <= 50)) {
    let chill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));

    windChill.innerHTML = chill.toString() + " *F";
} else {
    windChill.innerHTML = "N/A";
}

