const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Butterfly position
let x = 100;
let y = 250;

// Butterfly speed
let speed = 2;

function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the butterfly
    x += speed;

    //butterfly wings

    //top left wing
    ctx.beginPath();
    ctx.ellipse(x - 20, y - 15, 20, 30, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "purple";
    ctx.fill();

    // top right wing
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 15, 20, 30, 0.5, 0, Math.PI * 2);
    ctx.fill();

    //left bottom wing
     ctx.beginPath();
    ctx.ellipse(x + 20, y - 15, 20, 30, -0.5, 0, Math.PI * 2);
    ctx.fill();

    //bottom right wing
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 15, 20, 30, 0.5, 0, Math.PI * 2);
    ctx.fill();

    //butterfly body
    ctx.beginPath();
    ctx.ellipse(x, y, 8, 25, 0, 0, Math.PI * 2);
    ctx.fillStyle = "skyblue";
    ctx.fill();

    // Keep the animation going
    requestAnimationFrame(animate);
}

// Start animation
animate();