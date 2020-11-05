var colorleft=document.querySelector(".color1");
var colorRight=document.querySelector(".color2");
css=document.querySelector("h3");
body=document.getElementById("gradiant");

function setGradient(){
    body.style.background="linear-gradient(to right,"+colorleft.value+","+colorRight.value+")"
    css.textContent=body.style.background;
}
colorleft.addEventListener("input",setGradient)
colorRight.addEventListener("input",setGradient)


module.exports= function add(a, b){
    return a+b;
}