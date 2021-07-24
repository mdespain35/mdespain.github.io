const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=32.7153&lon=-117.1573&exclude=current,minutely,hourly&appid=79ada910be24866f994eac62790cdc83&units=imperial"

fetch(alertURL).then((response) => response.json()).then((jsObject) => {
    try {
        let message = jsObject.alerts.description;
        alert(message);
    } catch {}
});