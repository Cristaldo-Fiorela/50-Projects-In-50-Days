// DOCUMENTATION https://developer.mozilla.org/es/docs/Web/API/Canvas_API  AND https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

// DOM Selector
const canvas = document.querySelector('#canvas');

// Variales
const ctx = canvas.getContext('2d');
let size =  20;
let color =  'black';
let x;
let y;

// Functions
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); // circle
    ctx.fillStyle = color;
    ctx.fill();
}

// x1 and y1 = from where the mouse starts to move.
// x2 and y2 = refers to the mouse path that draws the line.
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

drawCircle(100, 200)
drawLine(300, 300, 300, 500)