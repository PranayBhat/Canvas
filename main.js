canvas=document.getElementById("firstCanvas");
 ctx=canvas.getContext("2d");
canvas.addEventListener("click", my_notepadlick);
function my_notepadlick(e){ color = document.getElementById("color1").value;
touchpadlick_x = e.clientX - canvas.offsetLeft;
touchpadlick_y = e.clientY - canvas.offsetTop;
circle(touchpadlick_x,touchpadlick_y);}
function circle(touchpadlick_x,touchpadlick_y)
{ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.arc(touchpadlick_x, touchpadlick_y,50,0 , 2*Math.PI);
 ctx.stroke();}


 canvas2=document.getElementById("secondCanvas");
 ctx2=canvas2.getContext("2d");
canvas2.addEventListener("click", my_notepadlick2);
function my_notepadlick2(e){ color2 = document.getElementById("color2").value;
console.log(color2);
touchpadlick_x2 = e.clientX - canvas2.offsetLeft;
touchpadlick_y2 = e.clientY - canvas2.offsetTop;
squre(touchpadlick_x2,touchpadlick_y2);}
function squre(touchpadlick_x2,touchpadlick_y2)
{ctx2.beginPath(); 
ctx2.strokeStyle = color2;
ctx2.rect(touchpadlick_x2,touchpadlick_y2, 20, 20);
ctx2.stroke();}