// Find the canvas element in our HTML
const canvas = document.getElementById("canvas");

// Get its 2D drawing tools
const ctx = canvas.getContext("2d");

// Make the canvas match the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//circle
let x = 100;
let y = 250;
let speed = 2;

// ------
//Animation
// ------

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Move the circle
    x = x + speed;

    //draw the cicle
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, Math.PI * 2);

    ctx.fillStyle = "deepskyblue";
    ctx.fill();

    requestAnimationFrame(animate);
}

//start of animatioin
animate();