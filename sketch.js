var ballx = 300;
var bally = 300;
var ballSize = 45;
var score = 0;
var song;
var gameState = "L1";

function preload(){
  grammy = loadImage('https://joshoowuhhh.github.io/ye/grammy.png');
  dropout = loadImage('https://joshoowuhhh.github.io/ye/dropout.jpg');
  late = loadImage('https://joshoowuhhh.github.io/ye/late.jpg');
  latebear = loadImage('https://joshoowuhhh.github.io/ye/latebear.png');
  grad = loadImage('https://joshoowuhhh.github.io/ye/graduation.jpg');
  gradbear = loadImage('https://joshoowuhhh.github.io/ye/gradbear.png');
  heartbreak = loadImage('https://joshoowuhhh.github.io/ye/heartbreak.jpg');
  hearticon = loadImage ('https://joshoowuhhh.github.io/ye/heartbreakicon.png');
  dtf = loadImage('https://joshoowuhhh.github.io/ye/dtf.jpg');
  dtficon = loadImage('https://joshoowuhhh.github.io/ye/dtff.jpg');
  yeezus = loadImage('https://joshoowuhhh.github.io/ye/yeezus.jpg');
  yeezusye = loadImage('https://joshoowuhhh.github.io/ye/yeezusye.png');
 pablo = loadImage('https://joshoowuhhh.github.io/ye/pablo.jpg');
 pabloye = loadImage('https://joshoowuhhh.github.io/ye/pabloyee.png');
 donda = loadImage('https://joshoowuhhh.github.io/ye/donda.jpg');
 dondaye = loadImage('https://joshoowuhhh.github.io/ye/dondaye.png');
 happyye = loadImage('https://joshoowuhhh.github.io/ye/kanyesmile.gif');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(24);
  textStyle(BOLDITALIC);
text('Font Style Bold Italic', 10, 90);
} // end of seutup

function draw() {
  background(dropout);
  if(gameState == "L1"){
    levelOne();
  } 
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
  }
  if(gameState == "L5"){
    levelFive();
  }
   if(gameState == "L6"){
    levelSix();
  }  
   if(gameState == "L7"){
    levelSeven();
  }   
    if(gameState == "L8"){
    levelEight();
  }
     if(gameState == "L9"){
    Win();
  }
  text(("Ye Symbols Collected: " + score),width/2,40);
} // end of draw ===================================

function levelOne(){
  background(dropout);
  text("2004: The College Dropout", width/2,height-25);
  fill(219, 18, 18);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/1){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
  }
  if(score>= 5){
   gameState = "L2";
  }
  
  image(grammy,ballx,bally, ballSize, ballSize);
  line(ballx,bally, mouseX, mouseY);
  
} // end of Level 1 ================================

function levelTwo(){
  background(late);
  text("2005: Late Registration", width/2,height-25);
  fill(255, 205, 5);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
  }
  if(score>= 10){
   gameState = "L3";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(latebear,ballx,bally, ballSize, ballSize);
  
} // end of Level 2 ================================

function levelThree(){
  background(grad);
  text("2007: Graduation", width/2,height-25);
  fill(5, 255, 234);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
  }
  
  if(score>= 15){
    gameState = "L4";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(gradbear,ballx,bally, ballSize, ballSize);
  
} // end of Level 3 ================================

function levelFour(){
  background(heartbreak);
  text("2008: 808s & Heartbreak", width/2,height-25);
  fill(255, 3, 3);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
    ballSize = ballSize - 1;
  }
  
  if(score>= 20){
    gameState = "L5";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(hearticon,ballx,bally, ballSize, ballSize);
  
} // end of Level 4 ================================

function levelFive(){
  background(dtf);
  text("2010: My Beautiful Dark Twisted Fantasy", width/2,height-25);
  fill(227, 190, 23);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
    ballSize = ballSize - 1;
  }
  
  if(score>= 25){
    gameState = "L6";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(dtficon,ballx,bally, ballSize, ballSize);
  
} // end of Level 5 ================================

function levelSix(){
  background(yeezus);
  text("2013: Yeezus", width/2,height-25);
  fill(255, 3, 3);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
    ballSize = ballSize - 1;
  }
  
  if(score>= 25){
    gameState = "L7";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(yeezusye,ballx,bally, ballSize, ballSize);
  
} // end of Level 6 ================================

function levelSeven(){
  background(pablo);
  text("2016: The Life of Pablo", width/2,height-20);
  fill(255, 255, 255);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
    ballSize = ballSize - 1;
  }
  
  if(score>= 30){
    gameState = "L8";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(pabloye,ballx,bally, ballSize, ballSize);
  
} // end of Level 7 ================================

function levelEight(){
  background(donda);
  fill(255, 255, 255);
  text("2021: Donda", width/2,height-25);
  var distToBall = dist(ballx,bally, mouseX, mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
    ballSize = ballSize - 1 ;
  }
  
  if(score>= 35){
    gameState = "L9";
  }
  //line(ballx,bally, mouseX, mouseY);
  image(dondaye,ballx,bally, ballSize, ballSize);
  
} // end of Level 8 ================================

function Win(){
  background(happyye);
  fill(255, 255, 255);
  textSize(25);
 text("Happy Ye! You win!", width/2,height-20);
}