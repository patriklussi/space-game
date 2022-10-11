export default class Asteroid {
  constructor(x, y, largeRadius, roidPos) {
    this.x = x;
    this.y = y;
    this.largeRadius = largeRadius;

    this.roidPos = roidPos;
  }
  checkColision(ctx, roidRay, TX) {
    for(let i = 0;i < roidRay.length; i++){
      console.log(roidRay[i].x == TX.x)
    }
  }
  drawMeteor(ctx, roidRay) {
  
    for (let i = 0; i < roidRay.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = "green";

      // ctx.arc(this.x, this.y,this.largeRadius,0,  2 * Math.PI);
      roidRay[i].y += 1.3;

      ctx.arc(
        roidRay[i].x,
        roidRay[i].y,
        this.largeRadius,
        0,
        25 * 2 * Math.PI
      );
      ctx.fill();
      ctx.closePath();
    }
  }
}

//Ha en array med meteor koordinater som ny generas varje sekund och skickas in som en variabel i drawMeter(ctx,roids) med en counter som maxar ut och slutar skicka in nya efter ett tag.
