function lastModified() {
    var modiDate = new Date(document.lastModified);
    var showAs = (modiDate.getMonth() + 1) + "-" + modiDate.getDate() + "-" + modiDate.getFullYear();
    return showAs
}

function GetTime() {
    var modiDate = new Date(document.lastModified);
    var Seconds

    if (modiDate.getSeconds() < 10) {
        Seconds = "0" + modiDate.getSeconds();
    } else {
        Seconds = modiDate.getSeconds();
    }

    var modiDate = new Date(document.lastModified);
    var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
    return CurTime
}

document.getElementById("last-modified").innerHTML = "Last Modified: " + lastModified() + " @ " + GetTime();