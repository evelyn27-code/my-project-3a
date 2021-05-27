class Form {

  constructor() {
   // bg2 = loadImage("cityRoad.jpg")
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.title1 = createElement('h4');
    this.button1 = createButton('Play Game');
    this.button2 = createButton('Quiz');
    this.button3 = createButton('Fun Facts Of COVID-19 & Precautions');
    
    //this.character = createButton("Boy/Girl");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title1.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
   
  }
  
  display(){
    this.title.html("COVID WARRIOR");
    this.title.position(displayWidth/2 - 120, 0);
    this.title1.html("SELECT YOUR CHARACTER");
    this.title1.position(displayWidth/2 - 90, displayHeight/2-170);
   // this.character.position(displayWidth/2-40,displayHeight/2-120);
  
    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 230);
    this.button.position(displayWidth/2 +  540, displayHeight/2+180);
    
  

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.html("Hello " + this.input.value())
      this.greeting.position(displayWidth/2 - 70, displayHeight/4-90);
      this.button1.position(displayWidth/2-30 , displayHeight/2-110);
      this.button2.position(displayWidth/2-15, displayHeight/2-40);
      this.button3.position(displayWidth/2-105 , displayHeight/2+30);
    });

    if(gameState === "B"){
    this.button1.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
     
     /*
      girl1 = createSprite(displayWidth/4-80,displayHeight/2+100,100,100)
      girl1.addAnimation("running",girl_running)
      girl1.scale = 0.4;
      girl.destroy()
     */
      ground.visible = true;
      boy1 = createSprite(displayWidth/4-80,displayHeight/2+150,100,100)
      boy1.addAnimation("running",boy_running)
      boy1.scale = 0.4;
      boy.destroy()
      console.log(gameState);
     
     // if(keyDown("space") && boy1.y >= displayHeight<displayHeight/2+100) {
     //   boy1.velocityY = -15;
    //  }

    });
  }

  if(gameState === "G"){
    this.button1.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
     ground.visible = true;
      girl1 = createSprite(displayWidth/4-80,displayHeight/2+130,100,100)
      girl1.addAnimation("running",girl_running)
      girl1.scale = 0.4;
      girl.destroy()
      console.log(gameState);
     
      if(keyDown("space") && girl1.y >= 535) {
        girl1.velocityY = -15;
      }

    });
  }

  }
}
