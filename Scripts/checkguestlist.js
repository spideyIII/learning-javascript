var guestList = ["Scott", "Sonja", "Sera", "Scotty", "Gabe", "Karina"];
var guestName = prompt("What is your name");
if (guestList.includes(guestName)) {
    alert("Come on in " + guestName + " welcome to my the party.");
} else { alert("Not on the list " + guestName + " nice try!") }