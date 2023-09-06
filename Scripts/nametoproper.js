var yourName = prompt("What is your name?").slice(0, 15);
var FirstLetter = yourName.slice(0, 1);
var capitalFirstLetter = FirstLetter.toUpperCase();
var restofyourname = yourName.slice(1, yourName.length);
var restofyourname = restofyourname.toLowerCase();
var properName = capitalFirstLetter + restofyourname;
alert("Hello " + properName + " how are you? ");