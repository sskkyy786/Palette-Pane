

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set initial stroke color and thickness
let strokeColor = document.getElementById("colorPicker").value;
let strokeWidth = document.getElementById("myRange").value;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

document.querySelector(".eraser").addEventListener("click", setEraser);
document.querySelector(".pencil").addEventListener("click", setPencil);
document.getElementById("colorPicker").addEventListener("input", setColor);
document.getElementById("myRange").addEventListener("input", setThickness);

function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.strokeStyle = strokeColor;
    context.lineWidth = strokeWidth;
    context.lineCap = "round";
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

function setEraser() {
    strokeColor = "#ffffff"; // Set color to white for eraser
}

function setPencil() {
    strokeColor = document.getElementById("colorPicker").value;
}

function setColor() {
    if (!document.querySelector(".eraser").classList.contains("active")) {
        strokeColor = document.getElementById("colorPicker").value;
    }
}

function setThickness() {
    strokeWidth = document.getElementById("myRange").value;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
