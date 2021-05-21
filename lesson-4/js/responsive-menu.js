const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);

//To handle window resize while menu is open in small mode
window.onresize = () => {if (window.innerWidth > 760) 
    mainnav.classList.remove('responsive')};