const jsFile = "https://raw.githubusercontent.com/mdespain35/mdespain.github.io/master/final-project/json/businesses.json";

fetch(jsFile).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    const biz = jsonObject['business'];

    for (let i = 0; i < biz.length; i++) {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let link = document.createElement('a');
        let industry = document.createElement('h3');
        let phone = document.createElement('p');
        let address = document.createElement('p');

        let alt = "Logo for " + biz[i].name;
        logo.setAttribute('src', biz[i].logo);
        logo.setAttribute('alt', alt);

        link.setAttribute('href', biz[i].website);
        link.appendChild(logo);

        card.appendChild(link);

        industry.textContent = "- " + biz[i].industry + " -";
        card.appendChild(industry);

        phone.textContent = biz[i].phone;
        card.appendChild(phone);

        address.innerHTML = biz[i].streetaddress + "<br>" + biz[i].city + ", " + biz[i].state + " " + biz[i].zipcode;
        card.appendChild(address);

        document.querySelector('#businesses').appendChild(card);
}
})
