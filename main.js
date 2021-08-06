canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastx;
var lasty;
var color="pink";
var width=3;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent="mouseUp";
    }

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent="mouseLeave";
    }

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
       ctx.arc(currentx, currenty, radius, 0, 2*Math.PI)
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}

function cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}