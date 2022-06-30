var ball;
var database;
var position;
var canvas;
var bg;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var distance = 0;
var cars, car1;
var car1Img;
var ground, groundx2, groundx3, groundx5, groundx10, groundx10Two, groundx10Three, groundx3Two, groundx10Four, groundTwo, wallx5, wallx5Two, wallx10, ceilingx5, ceiling, wallx3;
var Iground, Igroundx2, Igroundx3, Igroundx5, Igroundx10, Igroundx10Two, Igroundx10Three, Igroundx3Two, Igroundx10Four, IgroundTwo;
var groundImage, groundx2Image, groundx3Image, groundx5Image, groundx10Image;
var groundTest;
var knight, knightImage;
var platform, platform2, platform3, platform4, platformImage;
var Iplatform, Iplatform2, Iplatform3, Iplatform4;
var invisibleGround;
var knightIdleLeft, knightIdleRight, knightJumpingLeft, knightJumpingRight, knightWalkingLeft, knightWalkingRight;
var spikeImage, spike, spike1, spike2, spike3;
var cloud, cloud2, cloudImage, cloudImage2;
var coin1, coin2, coin3, coinImage;
var goal, goalImage;
var youWinImage;

function preload(){
    car1Img = loadImage("sprites/car1.png");
    groundImage = loadImage("sprites/Ground.png");
    groundx2Image = loadImage("sprites/Ground2.png");
    groundx3Image = loadImage("sprites/Ground3.png");
    groundx5Image = loadImage("sprites/Ground5.png");
    groundx10Image = loadImage("sprites/Ground10.png");
    platformImage = loadImage("sprites/Platform.png");
    spikeImage = loadImage("sprites/Spike.png")
    knightIdleLeft = loadAnimation("sprites/KnightIdleLeft.png");
    knightIdleRight = loadAnimation("sprites/KnightIdleRight.png");
    knightJumpingLeft  = loadAnimation("sprites/KnightJumpingLeft.png");
    knightJumpingRight  = loadAnimation("sprites/KnightJumpingRight.png");
    knightWalkingLeft = loadAnimation("sprites/KnightWalking1Left.png", "sprites/KnightWalking2Left.png");
    knightWalkingRight = loadAnimation("sprites/KnightWalking1Right.png", "sprites/KnightWalking2Right.png");
    cloudImage = loadImage("sprites/Cloud1.png");
    cloudImage2 = loadImage("sprites/Cloud2.png");
    coinImage = loadImage("sprites/Coin.png");
    goalImage = loadImage("sprites/Goal.png");
    youWinImage = loadImage("sprites/YouWinText.png");
}

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth - 10, displayHeight-150);

    groundTest = new Ground(200,200, groundImage);
    groundx2Test = new Ground(600,600, groundx2Image);
    groundx10Test = new Ground(400,400, groundx10Image)
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount == 1){
        game.update(1);
    }
    if(gameState == 1){
        clear();
        game.play();
    }

    if(gameState == 3){
        //you win image appears
    }
}