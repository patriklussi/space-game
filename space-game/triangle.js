import Asteroid from "./asteroid.js";
export default class Ship {
  constructor(
    x,
    y,
    height,
    width,
    angle,
    accSpeed,
    color,
    rotate,
    ax,
    ay,
    drag,
    vx,
    vy,
    downForce
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.angle = angle;
    this.accSpeed = accSpeed;
    this.color = color;
    this.rotate = rotate;
    this.ax = ax;
    this.ay = ay;
    this.drag = drag;
    this.vx = vx;
    this.vy = vy;
    this.downForce = downForce;
  }
  draw(ctx, roidArray) {
    let tester = {};
    let asteroids = new Asteroid(50, 50, 25);
    tester.x = this.x;
    tester.y = this.y;
  
    asteroids.drawMeteor(ctx, roidArray);
    asteroids.checkColision(ctx, roidArray, tester);
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.moveTo(this.height, 0);
    ctx.lineTo(-this.height, this.width);
    ctx.lineTo(-this.height, -this.width);
    ctx.closePath();
    ctx.fillStyle = "#950101";
    ctx.fill();
    ctx.restore();
  }
  accelerateForward() {
    this.ay -= this.accSpeed;
  }
  accelerateReverse() {
    // this.downForce = true;
    this.ay += this.accSpeed;
  }
  accelerateLeft() {
    this.ax -= this.accSpeed;
  }
  accelerateRight() {
    this.ax += this.accSpeed;
  }
  move(roidRay) {
    if (!this.downForce) {
      this.ay += 0.01;
    }

    this.vy += this.ay;
    this.vx += this.ax;
    this.ax *= this.drag;
    this.ay *= this.drag;
    this.vx *= this.drag;
    this.vy *= this.drag;

    this.x += this.vx;
    this.y += this.vy;

    // if (this.y < 0) {
    //   this.y = 800;
    // } else if (this.y > 800) {
    //   this.y = 0;
    // }

    if (this.x < 0) {
      this.x = 1500;
    } else if (this.x > 1500) {
      this.x = 0;
    }
  }
  // drawLaser(ctx){
  //   console.log(this.y)
  //   ctx.beginPath();
  //   ctx.fillStyle = "green";
  //   ctx.fillRect(this.x + 10,this.y,5,15);

  //   ctx.closePath();

  // }
}
