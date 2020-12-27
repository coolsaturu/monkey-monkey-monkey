var backImage,backgr;
var player,player_running;
var ground,groundImage;

var Foodgroup,bananaImage;
var obstaclesGroup,obstaclesImage;
var gamesOver;
var score  = 0;

function preload()
{
  backImage = loadImage("jungle.jpg");
  //player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //bananaImage = loadImage("banana.png");
  //obstaclesImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  backgr = createSprite(200,200,400,400);
  backgr.addImage(backImage);
}

function draw() {
  background("white");
  drawSprites();
}