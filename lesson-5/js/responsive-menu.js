const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');
const navresponse = document.querySelector('nav');

menubutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')
navresponse.classList.toggle('responsive')}, false);

//To handle window resize while menu is open in small mode
window.onresize = () => {if (window.innerWidth > 760) 
    mainnav.classList.remove('responsive')};