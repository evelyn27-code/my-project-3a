var canvas, backgroundImage;
var gameState;
var form, player, game;

var ground,invisibleGround;

var boy,boyImage,boy1;
var girl,girlImage,girl1;

var bg1,bg2;
var girl_running;
var boy_running;

    function preload(){

      boyImage = loadImage("yellow boy.jpg");
      girlImage = loadImage("girl.jpg");
      bg1 = loadImage("city.jpg");
      bg2 = loadImage("cityRoad.jpg");
      
      girl_running = loadAnimation("girl1.jpg","girl2.jpg","girl3.jpg","girl4.jpg","girl5.jpg","girl6.jpg","girl7.jpg","girl8.jpg")
      boy_running = loadAnimation("boy1.jpg","boy2.jpg","boy3.jpg","boy4.jpg","boy5.jpg","boy6.jpg","boy7.jpg","boy8.jpg")

    }

    function setup(){
      canvas = createCanvas(displayWidth - 20, displayHeight-30);

    // game = new Game();
      
    // game.start();

    boy = createSprite(displayWidth/2-190,displayHeight/2+60,100,100)
    boy.addImage(boyImage);
    boy.scale = 0.6;

    girl = createSprite(displayWidth/2+210,displayHeight/2+60,100,100)
    girl.addImage(girlImage);
    girl.scale = 0.2;

    ground = createSprite(displayWidth/2,displayHeight/2,displayWidth+500,displayWidth-30);
    ground.velocityX = -2;
    ground.visible = false;
    ground.addImage(bg2)
    ground.scale = 3;

    invisibleGround = createSprite(displayWidth/2,displayHeight/2+230,displayWidth,10);
    //ground.velocityX = -2;
    invisibleGround.visible = false;
    //ground.addImage(bg2)
    //ground.scale = 3;
   
    form = new Form()


    }


    function draw(){
      background(bg1);
      //boy1.collide(invisibleGround);
     // girl1.collide(invisibleGround);

    if (mousePressedOver(boy) && !mousePressedOver(girl)) {
      girl.destroy();
      boy.x = displayWidth/2-450;
      boy.y = displayHeight/2+10
      gameState = "B";
      

    }
    if (mousePressedOver(girl) && !mousePressedOver(boy)) {
      boy.destroy();
      girl.x = displayWidth/2+450;
      girl.y = displayHeight/2+10
      gameState = "G";

    }

    if(ground.x<displayWidth/2-200){
      ground.x = ground.width/2+300;
    }
    ground.depth = boy.depth-1;

    
    form.display();
    
      drawSprites()
    }


