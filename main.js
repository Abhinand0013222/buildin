function getparagraph1();
var input= [];
for(var i=1; i<=6;i++)
{
    input.push(document.getElementById("para1"+i).value);
}
inputs.join(".")
document.getElementById("showparagraph1").innerHTML=inputs.join(".");