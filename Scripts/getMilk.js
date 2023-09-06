function getMilk(money) {
    var cost = Math.floor(money/1.5);
  console.log("leaveHouse");
    console.log("Take $" + money + " which will allow you to buy " + cost + " bottles of milk.");
    console.log("bringHome")
 return money % 1.5;
}
var change = getMilk(4)
console.log("that means you owe me $"+change)