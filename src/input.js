export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        case 38:
          paddle.moveUp();
          break;

        case 40:
          paddle.moveDown();
          break;

        case 65:
          paddle.moveLeft();
          break;

        case 68:
          paddle.moveRight();
          break;

        case 87:
          paddle.moveUp();
          break;

        case 83:
          paddle.moveDown();
          break;
      }
    });
  }
}
