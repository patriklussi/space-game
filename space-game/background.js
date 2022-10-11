import stars from "./star.js";

export default class Star {
  constructor(amount, color, height, width) {
    this.amount = amount;
    this.color = color;
    this.height = height;
    this.width = width;
    
  }
  starDraw(ctx) {
   let levelNum = 1;
    for (let i = 0; i < stars.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = "yellow";
      if (stars[i].y < 800) {
        stars[i].y += levelNum;
      
      } else {
        stars[i].y = 0;
      }

      ctx.fillRect(stars[i].x, stars[i].y, this.width, this.height);
    }
  }
}
