var x = prompt("Pabloya Eded Ver ");
var num = parseInt(x);
var z = num;
var y = "";
var num2 = "";

while (z > 0) {
  y = y + (z % 10);
  z = (z - y) / 10;
  num2 = num2 + y;
  y = "";
}

if (num2 == num) {
  console.log("Pablo Deyirki Eded Palindromdu");
} else {
  console.log("Pablo Deyirki Eded Palindrom Deyil");
}
