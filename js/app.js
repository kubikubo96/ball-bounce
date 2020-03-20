var context;
var x = Math.floor(Math.random() * 2500) + 1; //random original position of ball
var y = Math.floor(Math.random() * 2500) + 1; //random original position of ball
var dx = 5; //stepping increases x
var dy = 5; //stepping increases y
var ballSpeed = 10;
var speedSet;
var canvas;

function init() {
    canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;
    context = canvas.getContext("2d");
    speedSet = setInterval(draw, ballSpeed);
}

function draw() {
    //clearRect method right at the start of our draw() function to erase the old circles
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //The beginPath() method begins a path, or resets the current path.
    context.beginPath();
    // use fillStyle set the color
    context.fillStyle = "#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    context.arc(x, y, 20, 0, Math.PI * 2, true);
    //The closePath() method creates a path from the current point back to the starting point.
    context.closePath();
    //The fill() method fills the current drawing (path)
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

// set width, height canvas when change resize
$(window).resize(function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// handle speed up or down of ball
$(document).ready(function () {
    $(document).keydown(function (keyCode) {
        if (keyCode.which === 38) {
            ballSpeed = ballSpeed - 10;
            //clearInterval() method clears a timer set with the setInterval() method
            clearInterval(speedSet);
            speedSet = setInterval(draw, ballSpeed);
        }
        if (keyCode.which === 40) {
            ballSpeed = ballSpeed + 10;
            clearInterval(speedSet);
            speedSet = setInterval(draw, ballSpeed);
        }
    })
});