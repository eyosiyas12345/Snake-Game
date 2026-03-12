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
let gameOver = false;

// css Styles
body.style.backgroundColor = 'lightblue';
body.style.textAlign = 'center';
body.style.margin = '10px';
canva.style.backgroundColor = 'black';

score.style.fontSize = '30px';
resetBtn.style.padding = '10px 20px';
resetBtn.style.cursor = 'pointer';

// Program
let snake = [{
  x: Math.floor(Math.random()*canvaRow)*scale,
  y: Math.floor(Math.random()*canvaColumn)*scale
}];

let food = {
  x: Math.floor(Math.random()*canvaRow)*scale,
  y: Math.floor(Math.random()*canvaColumn)*scale
};

let d ='right';
let playGame = setInterval(drawSnake, 200);
body.addEventListener("keydown", changeDirection);
let hi = setInterval(drawFood,0);

// functions
function drawSnake(){
  ctx.clearRect(0,0,canvaWidth,canvaHeight);
for (let i = 0; i<snake.length; i++){
      ctx.fillStyle = snakeColor;
    ctx.strokeStyle = 'white';
    ctx.fillRect(snake[i].x,snake[i].y, scale, scale);

    if (d == 'right')  snake[i].x +=scale;
    if (d == 'left') snake[i].x -=scale;
    if (d == 'down')  snake[i].y +=scale;
    if (d == 'up') snake[i].y -=scale;
    
    if(snake[i].x > canvaWidth) snake[i].x = 0;
    else if(snake[i].x < 0) snake[i].x = canvaWidth;
    else if(snake[i].y > canvaHeight) snake[i].y = 0;
    else if(snake[i].y < 0) snake[0].y = canvaHeight;
}
  eat();
}

function drawFood(){
      ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, scale, scale);
}

function changeDirection(event){
  console.log(event);
  
  for(let i=0; i<snake.length; i++){
  if(snake[i].x>=0 && snake[i].x<=canvaWidth && snake[i].y>=0 && snake[i].y<=canvaHeight){
  if(event.key === 'ArrowDown') d= 'down';
  if(event.key === 'ArrowUp') d= 'up';
  if(event.key === 'ArrowLeft') d= 'left';
  if(event.key === 'ArrowRight') d= 'right';
  }
}
}

function eat(){
  if(snake[0].x === food.x && snake[0].y === food.y){
score.innerHTML = parseInt(score.innerHTML) + 1;
food.x = Math.floor(Math.random()*canvaRow)*scale;
food.y = Math.floor(Math.random()*canvaColumn)*scale;

grow();
  }
}
function grow(){
  if (d == 'right')  snake[0].x +=scale;
  if (d == 'left') snake[0].x -=scale;
  if (d == 'down')  snake[0].y +=scale;
  if (d == 'up') snake[0].y -=scale;

  let newHead = {
    x: snake[0].x,
    y: snake[0].y
  }
  snake.unshift(newHead);

}
/*
function drawSnake(){

}
*/