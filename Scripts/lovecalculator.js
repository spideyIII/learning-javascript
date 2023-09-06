var yourName = prompt("What is your name");
var FirstLetter = yourName.slice(0,1);
var capitalFirstLetter = FirstLetter.toUpperCase();
var restofyourname = yourName.slice(1,yourName.length);
var restofyourname = restofyourname.toLowerCase();
var properName = capitalFirstLetter+restofyourname;
var loveName = prompt("who is your love interest");
var FirstloveLetter = loveName.slice(0,1);
var capitalFirstloveLetter = FirstloveLetter.toUpperCase();
var restoflovename = loveName.slice(1,yourName.length);
var restoflovename = restoflovename.toLowerCase();
var properLoveName = capitalFirstloveLetter+restoflovename;
var n = Math.random();
n = Math.round(n*100)+1;
if(properName == "Scott" && properLoveName == "Sonja" || properName == "Sonja" && properLoveName == "Scott"){
alert("Scott and your love interest Sonja were born to love each other at 100% compatible")
} else {
alert(properName + " and your love interest " + properLoveName+ " are " + n + "% compatible")
}
//var nperc = (n/100).toLocaleString("en", {style: "percent", minimumFractionDigits: 2});
console.log(n);

