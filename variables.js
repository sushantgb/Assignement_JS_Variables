//script for first task
let declare = "Hello"; //declaration global
{
    let declare = "Hello People"; //declaration local
}
//value of declare outside brackets is still "hello"

//prinitng the final value of the declare
document.getElementById("para1").innerHTML=declare;
document.body.style.fontFamily="Candara";
