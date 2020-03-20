var context;
var x = 100;
var y = 200;
var dx = 5;
var dy = 5;
var speedBall = 10;
var myVar;

$(document).ready(function () {
    $(document).keydown(function (keyCode) {
        if (keyCode.which === 38) {
            speedBall = speedBall - 10;
            clearInterval(myVar);
            init();
        }
        if (keyCode.which === 40) {
            speedBall = speedBall + 10;
            clearInterval(myVar);
            init();
        }
    })
});

function init() {
    let canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;
    context = canvas.getContext("2d");
    myVar = setInterval(draw, speedBall);
}

function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.beginPath();
    context.fillStyle = "#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    context.arc(x, y, 20, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    // Boundary Logic
    if (x < 0 || x > window.innerWidth) {
        dx = -dx;
    }
    if (y < 0 || y > window.innerHeight) {
        dy = -dy;
    }
    if (x > window.innerWidth) {
        x = window.innerWidth;
    }
    if (y > window.innerHeight) {
        y = window.innerHeight;
    }
    x += dx;
    y += dy;
}