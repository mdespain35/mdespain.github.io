const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    const tinfo = jsonObject['towns'];
    let eventDiv = document.getElementById('events');

    for (let i = 0; i < tinfo.length; i++) {
        if (tinfo[i].name == "Fish Haven"){
            for (t = 0; t < tinfo[i].events.length; t++){
                console.log(tinfo[i].events[t]);
                let p = document.createElement('p');
                p.textContent = tinfo[i].events[t];
                eventDiv.appendChild(p);
            }
            break;
        }
    }

});