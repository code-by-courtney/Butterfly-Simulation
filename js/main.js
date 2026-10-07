// Find the canvas element in our HTML
const canvas = document.getElementById("canvas");

// Get its 2D drawing tools
const ctx = canvas.getContext("2d");

// Make the canvas match the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(400, 250, 60, 0, Math.PI * 2);
ctx.fillStyle = "cyan";
ctx.fill();