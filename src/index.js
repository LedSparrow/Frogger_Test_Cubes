import Paddle from "/src/paddle.js";
import Obsticle from "/src/obsticle.js";
import InputHandler from "/src/input.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

//make canvas flexible
//width = "528" height= "576">

const GAME_WIDTH = 800;
const GAME_HIGHT = 600;

//context.clearRect (0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HIGHT);
let obsticle = new Obsticle(GAME_WIDTH, GAME_HIGHT);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  obsticle.update(deltaTime);
  paddle.draw(context);
  obsticle.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop();
