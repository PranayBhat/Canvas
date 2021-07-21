var canvas=document.getElementById("firstcanvas");
var ctx=canvas.getContext("3d");
canvas.addEventListener("click", my_notepadlick);
function my_notepadlick(e){ color = document.getElementById("colour1").value;
canvas.addEventListener("click", my_notepadlick);
touchpadlick_x = e.clientX - canvas.offsetLeft;
touchpadlick_y = e.clientY - canvas.offsetTop;
circle(touchpadlick_x,touchpadlick_y)}
function circle(touchpadlick_x,touchpadlick_y)
{ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.arc(touchpadlick_x, touchpadlick_y,50,0 , 2*Math.PI);
 ctx.stroke();

}

