var context;
var x = 100;
var y = 200;
var dx = 5;
var dy = 5;

function init() {
    let canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;
    context = canvas.getContext("2d");
    setInterval(draw, 10);
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
    if (x < 0 || x > window.innerWidth) dx = -dx;
    if (y < 0 || y > window.innerHeight) dy = -dy;
    x += dx;
    y += dy;
}