var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Sup Ma Boi evening to ya.";
} else if (hourNow > 12) {
    greeting = "Gooooood afternoooon siiiir.";
} else if (hourNow > 0) {
    greeting = "Bonjourno amici.";
} else {
    greeting = "What you talking about wilis.";
}

document.write("<h3 class=>" + greeting + "</h3>");

