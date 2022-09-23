let gamePiece;
startGame = () => {
    gamePiece = new component(50, 50, "blue", 0, 250);
    gameArea.start();
}

let gameArea = {
    canvas: document.createElement("canvas"),
    start () {
        this.canvas.width = 1200;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear () {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}

function component (width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = () => {
        card = gameArea.context;
        card.fillstyle = color;
        card.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPosition = () => {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

updateGameArea = () => {
    gameArea.clear();
    gamePiece.newPosition();
    gamePiece.update();
}

function moveUp () {
    gamePiece.speedY -= 1;
}

moveDown = () => {
    gamePiece.speedY += 1;
}

moveRight = () => {
    gamePiece.speedX += 1;
    console.log(gamePiece.speedX);
}

moveLeft = () => {
    gamePiece.speedX -= 1;
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
            moveLeft();
          console.log("Left key is pressed.");
          break;
       case 38:
            moveUp();
          console.log("Up key is pressed.");
          break;
       case 39:
            moveRight();
          console.log("Right key is pressed.");
          break;
       case 40:
            moveDown();
          console.log("Down key is pressed.");
          break;
    }
};

