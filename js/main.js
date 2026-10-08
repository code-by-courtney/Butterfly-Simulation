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

    // Draw butterfly body
    ctx.beginPath();
    ctx.ellipse(x, y, 8, 25, 0, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // Keep the animation going
    requestAnimationFrame(animate);
}

// Start animation
animate();