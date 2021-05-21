let copy = document.querySelector("#copyright").innerHTML;
let date = new Date();
let year = date.getFullYear();
copy = copy.replace("Year", year);
document.querySelector("#copyright").innerHTML = copy;

document.querySelector("#update").innerHTML = `Last Modified: ${document.lastModified}`;
