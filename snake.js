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

let snake = [{
  x: Math.floor(Math.random()*canvaRow)*scale,
  y: Math.floor(Math.random()*canvaColumn)*scale
}];
ctx.fillStyle = snakeColor;
ctx.strokeStyle = 'white';
ctx.fillRect(snake[0].x,snake[0].y, scale, scale);
