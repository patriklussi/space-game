import Star from "./background.js";
import Ship from "./triangle.js";
import Asteroid from "./asteroid.js";
let canvas = document.querySelector("#space-canvas");

canvas.width = 1500;
canvas.height = 800;

let ctx = canvas.getContext("2d");
let paused = false;
let controllerForward = false;
let controllerBackward = false;
let controllerLeft = false;
let controllerRight = false;
let roidArray = [];
let stars = new Star(50, "yellow", 2, 2);

let ship = new Ship(
  canvas.width / 2,
  canvas.height / 2,
  25,
  15,
  (-45 * Math.PI) / 2,
  0.09,
  "yellow",
  0,
  0,
  0,
  0.9,
  0,
  0,
  false
);

for (var x = 0; x < 1; x++) {
  roidArray[x] = {
    x: Math.floor(Math.random() * 1500),
    y: Math.floor(Math.random() * -10),
  };
}

drawTriangle();

function drawTriangle() {
  if (paused) {
    return;
  }
  canvas.width = 1500;
  canvas.height = 800;
  stars.starDraw(ctx);
  ship.move(roidArray);
  ship.draw(ctx, roidArray);
  if (controllerForward) ship.accelerateForward();
  if (controllerBackward) ship.accelerateReverse();
  if (controllerLeft) ship.accelerateLeft();
  if (controllerRight) ship.accelerateRight();
  requestAnimationFrame(drawTriangle);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      controllerForward = true;
      break;
    case "a":
      controllerLeft = true;
      break;
    case "s":
      controllerBackward = true;
      break;
    case "d":
      controllerRight = true;
      break;
    case "Escape":
      paused = !paused;
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      controllerForward = false;
      break;
    case "a":
      controllerLeft = false;
      break;
    case "s":
      controllerBackward = false;
      break;
    case "d":
      controllerRight = false;
      break;
  }
});
// const triangle = {
//   x: canvas.width / 2,
//   y: canvas.height / 2,
//   height: 25,
//   width: 15,
//   angle: (-45 * Math.PI) / 2,
//   accSpeed: 1,
//   color: "blue",
//   rotate: 0,
//   ax: 0,
//   draw(ctx) {
//     ctx.save();

//     ctx.beginPath();
//     ctx.translate(this.x, this.y);
//     ctx.rotate(this.angle);
//     ctx.moveTo(this.height, 0);
//     ctx.lineTo(-this.height, this.width);
//     ctx.lineTo(-this.height, -this.width);
//     ctx.closePath();
//     ctx.fillStyle = "yellow";
//     ctx.fill();
//     ctx.restore();
//   },
//   moveForward() {
//     this.y -= 5;
//   },
//   moveBackward() {
//     this.y += 5;
//   },
//   moveLeft() {
//     this.x -= 5;
//   },
//   moveRight() {
//     this.x += 5;
//   },
// };

// function drawShot() {
//   canvas.width = 1500;
//   canvas.height = 800;

//   ctx.beginPath();
//   ctx.fillStyle = "yellow";
//   ctx.fillRect(x, y, 20, 10);
//   if (x < 1500) {
//     x += 8;
//   } else {
//     x = 100;
//     ctx.clearRect(x, y, 20, 10);
//     cancelAnimationFrame(drawShot);
//     return;
//   }
//   requestAnimationFrame(drawShot);
// }
