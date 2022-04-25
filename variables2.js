//script for first task

//array declaration
const mobiles = [ " Nokia " , " Iphone " , " Samsung " ];

//prinitng the first array
document.getElementById("para2").innerHTML = mobiles;

//changing the array items
mobiles[1] = " Motorola ";
//adding items in the array
mobiles.push(" Redmi ", " Sony ")

//printing the updated array
document.getElementById("para3").innerHTML = mobiles;