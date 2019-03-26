export default class Obsticle {
  constructor(gameWidth, gameHeight) {
    this.game_Width = gameWidth;
    this.game_Height = gameHeight;
    this.width = 48;
    this.height = 48;

    this.maxSpeed = 10;
    this.speedX = 0;

    this.position = {
      x: -50,

      y: this.game_Height - 48 * 2
    };
  }

  move() {}

  draw(context) {
    context.fillStyle = "#f0f";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += 50 / deltaTime;
    if (this.position.x > 800) this.position.x = -50;
  }
}
