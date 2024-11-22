const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size/////
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;


let isDrawing = false;
let brushColor = "#008080";
let brushSize = 5;


const colorPicker = document.getElementById("color");
const sizePicker = document.getElementById("size");
const clearButton = document.getElementById("clear");


canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

colorPicker.addEventListener("input", (e) => (brushColor = e.target.value));
sizePicker.addEventListener("input", (e) => (brushSize = e.target.value));
clearButton.addEventListener("click", clearCanvas);


function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
