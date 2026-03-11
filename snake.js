// selection
const body = document.querySelector("body");
const canva = document.getElementById('canva');
const ctx = canva.getContext('2d');
const score = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn")
const canvaWidth = canva.clientWidth;
const canvaHeight = canva.clientHeight;
const snakeColor = 'lightgreen';
const foodColor = 'red';
const scale = 20;
const canvaRow = canvaWidth/scale;
const canvaColumn = canvaHeight/scale;
console.log(ctx);
let gameOver = false;

// css Styles
body.style.backgroundColor = 'lightblue';
body.style.textAlign = 'center';
body.style.margin = '10px';
canva.style.backgroundColor = 'black';

score.style.fontSize = '30px';
resetBtn.style.padding = '10px 20px';
resetBtn.style.cursor = 'pointer';
// canva.style.position = 'absolute';
// canva.style.top = '50%';
// canva.style.left = '50%';
// canva.style.transform = 'translate(-50%,-50%)';


// Program

let snake = {
  x: Math.floor(Math.random()*canvaRow)*scale,
  y: Math.floor(Math.random()*canvaColumn)*scale
};
let food = {
  x: Math.floor(Math.random()*canvaRow)*scale,
  y: Math.floor(Math.random()*canvaColumn)*scale
};

let d ='right';
let playGame = setInterval(drawSnake, 200);
body.addEventListener("keydown", changeDirection);
let hi = setInterval(drawFood,200);

// functions
function drawSnake(){
  ctx.clearRect(0,0,canvaWidth,canvaHeight);

    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = 'white';
    ctx.fillRect(snake.x,snake.y, scale, scale);

  if (d == 'right')  snake.x +=scale;
  if (d == 'left') snake.x -=scale;
  if (d == 'down')  snake.y +=scale;
  if (d == 'up') snake.y -=scale;

  if(snake.x > canvaWidth) snake.x = 0;
  else if(snake.x < 0) snake.x = canvaWidth;
  else if(snake.y > canvaHeight) snake.y = 0;
  else if(snake.y < 0) snake.y = canvaHeight;

  eat();
}
function drawFood(){
      ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, scale, scale);
}
function changeDirection(event){
  console.log(event);
  if(snake.x>=0 && snake.x<=canvaWidth && snake.y>=0 && snake.y<=canvaHeight){
  if(event.key === 'ArrowDown') d= 'down';
  if(event.key === 'ArrowUp') d= 'up';
  if(event.key === 'ArrowLeft') d= 'left';
  if(event.key === 'ArrowRight') d= 'right';
  }
}
function eat(){
  if(snake.x === food.x && snake.y === food.y){
score.innerHTML = parseInt(score.innerHTML) + 1;
food.x = Math.floor(Math.random()*canvaRow)*scale;
food.y = Math.floor(Math.random()*canvaColumn)*scale;
graw();
  }
}
function graw(){
  
}