const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    const tinfo = jsonObject['towns'];

    for(let t = 0; t < tinfo.length; t++) {
        if (tinfo[t].name == "Soda Springs" || tinfo[t].name == "Fish Haven" || tinfo[t].name == "Preston") {
            let card = document.createElement('section');
            let town = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let popu = document.createElement('p');
            let rfall= document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = tinfo[t].name;
            town.appendChild(h2);

            motto.textContent = tinfo[t].motto;
            town.appendChild(motto);

            founded.textContent = "Year Founded: " + tinfo[t].yearFounded;
            town.appendChild(founded);

            popu.textContent = "Population: " + tinfo[t].currentPopulation;
            town.appendChild(popu);

            rfall.textContent = "Annual Rain Fall: " + tinfo[t].averageRainfall;
            town.appendChild(rfall);

            card.appendChild(town);

            let alttext = "Picture of " + tinfo[t].name;
            let imgsrc = "images/" + tinfo[t].photo;
            image.setAttribute('src', imgsrc);
            image.setAttribute('alt', alttext);
            card.appendChild(image);

            document.querySelector('div.towns').appendChild(card);
        }
    }
})