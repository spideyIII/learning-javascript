function inputAge(age){
    var days = Math.floor(90*365)-(age*365);
    var weeks = Math.floor(90*52)-(age*52);
    var months = Math.floor(90*12)-(age*12)
    console.log("You have " + days + " days, " + weeks +" weeks, and " + months +" months left.")
}
inputAge(47)