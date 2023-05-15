// DOCUMENTATION https://developer.mozilla.org/es/docs/Web/API/Canvas_API  AND https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

// DOM Selector
const canvas = document.querySelector('#canvas');

// Variales
const ctx = canvas.getContext('2d');
let size =  20;
let mouseIsPressed = false;
let color =  'black';
let x;
let y;

// Event Listeners
canvas.addEventListener('mousedown', mousePress);
canvas.addEventListener('mouseup', mousePress);
canvas.addEventListener('mousemove', mouseMove);

// Functions
function mousePress(e) {
    let eventType = e.type;

    if( eventType === 'mousedown')  {
        mouseIsPressed = true;

        // provides the offset in the X/Y coordinate of the mouse pointer
        x = e.offsetX;
        y = e.offsetY;
    } else {
        mouseIsPressed = false;
        x = undefined;
        y = undefined;
    }
}

function mouseMove(e) {
    if(mouseIsPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x, y, x2,y2);

        x = x2;
        y = y2;
    }
}

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
    ctx.lineWidth = size * 2;
    ctx.stroke();
}