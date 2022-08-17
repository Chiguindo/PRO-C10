var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["770acb33-c48e-4f0d-978c-19c8252bbe71","2ed623f6-9fdf-436e-8830-c892a3da2524","05aefa3b-c2bb-4792-a4a2-ed43d55ecd3d"],"propsByKey":{"770acb33-c48e-4f0d-978c-19c8252bbe71":{"name":"Enemy","sourceUrl":null,"frameSize":{"x":34,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"oAO3Bz9kvuY6U7KaQbqiFBBLxZnhw9z3","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":38},"rootRelativePath":"assets/770acb33-c48e-4f0d-978c-19c8252bbe71.png"},"2ed623f6-9fdf-436e-8830-c892a3da2524":{"name":"Luigi","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"XPs5oPgezJNyuPLK2W9YA7XsHccYAHa1","loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":16},"rootRelativePath":"assets/2ed623f6-9fdf-436e-8830-c892a3da2524.png"},"05aefa3b-c2bb-4792-a4a2-ed43d55ecd3d":{"name":"Princess","sourceUrl":null,"frameSize":{"x":30,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Fylqq6XIrAO_z2nBcoacwdbAzZAyckT","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":47},"rootRelativePath":"assets/05aefa3b-c2bb-4792-a4a2-ed43d55ecd3d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vidas =5;
var enemy1, enemy2, enemy3, enemy4;
var luigi;
var barrera1, barrera2;
var princess;
var minilaser;


luigi = createSprite(20, 190, 13, 13);
luigi.setAnimation("Luigi");
luigi.scale=1.5;

enemy1 = createSprite(80, 130, 10, 10);
enemy1.setAnimation("Enemy");
enemy2 = createSprite(250, 130, 10, 10);
enemy2.setAnimation("Enemy");
enemy3 = createSprite(170, 250, 10, 10);
enemy3.setAnimation("Enemy");
enemy4 = createSprite(330, 250, 10, 10);
enemy4.setAnimation("Enemy");

minilaser=createSprite(355, 190,1, 220);
minilaser.shapeColor=("red");

princess=createSprite(380, 110, 10, 10);
princess.setAnimation("Princess");
princess.scale=1;

 
  enemy1.velocityY = 8;
  enemy2.velocityY = 8;
  enemy3.velocityY = -8;
  enemy4.velocityY = -8;
  
 

barrera1 = createSprite(190,80,420,3);
barrera1.shapeColor="maroon";
barrera2 = createSprite(190,300,420,3);
barrera2.shapeColor="maroon";
  
  function draw() {
  background("white");
textSize(18);
fill("blue");
text("vidas:"+vidas,260,27);

textSize(10);
fill("lightgreen");
text("el laberinto no existe",132, 19);
  
    
  if(vidas==0){
    
    stroke("red");
   strokeWeight(3);
   fill("pink");
   textSize(40);
   text("¡PERDISTE!",150, 365);
  
     
   
  
  enemy1.velocityY = 0;
  enemy2.velocityY = 0;
  enemy3.velocityY = 0;
  enemy4.velocityY = 0;
  luigi.destroy();
  }  
    
  
    
  enemy1.bounceOff(barrera1);
  enemy1.bounceOff(barrera2);
  enemy2.bounceOff(barrera1);
  enemy2.bounceOff(barrera2);
  enemy3.bounceOff(barrera1);
  enemy3.bounceOff(barrera2);
  enemy4.bounceOff(barrera1);
  enemy4.bounceOff(barrera2);
  luigi.bounceOff(barrera1);
  luigi.bounceOff(barrera2);
  luigi.bounceOff(princess);

  if(keyDown("RIGHT_ARROW")){
    luigi.x = luigi.x + 4;
  }
  if(keyDown("LEFT_ARROW")){
    luigi.x = luigi.x - 4;
  }
  if(keyDown("UP_ARROW")){
    luigi.y= luigi.y - 4;
  }
   if(keyDown("DOWN_ARROW")){
    luigi.y= luigi.y + 4;
  }
  
  
     if (luigi.isTouching(enemy1)||
     luigi.isTouching(enemy2)||
     luigi.isTouching(enemy3)||
     luigi.isTouching(enemy4)){
       
     luigi.x = 20;
     luigi.y = 190;
     vidas = vidas - 1;
    playSound("assets/category_explosion/8bit_explosion.mp3");
  }
  
    if (luigi.isTouching(minilaser)){
      
      playSound("assets/category_movement/airy_teleport_or_craft.mp3");
     
      enemy1.destroy();
      enemy2.destroy();
      enemy3.destroy();
      enemy4.destroy();
      barrera1.destroy();
      barrera2.destroy();
      minilaser.destroy();
      
      luigi.x =18;
      luigi.y =20;
  
      princess.x =375;
      princess.y =368;
      
  var muro1=createSprite(60, 48, 120, 10);
  muro1.shapeColor="green";
  var muro2=createSprite(313, 49, 174, 10);
  muro2.shapeColor="green";
  var muro3=createSprite(115, 130, 10, 174);
  muro3.shapeColor="green";
  var muro4=createSprite(30, 92, 60, 10);
  muro4.shapeColor="green";
  var muro5=createSprite(60, 152, 10, 130);
  muro5.shapeColor="green";
  var muro6=createSprite(290, 104, 250, 10);
  muro6.shapeColor="green";
  var muro7=createSprite(287, 347, 10, 174);
  muro7.shapeColor="green";
  var muro8=createSprite(377, 264, 100, 10);
  muro8.shapeColor="green";
  var muro9=createSprite(322, 209, 174, 10);
  muro9.shapeColor="green";
  var muro10=createSprite(231, 262, 10, 174);
  muro10.shapeColor="green";
  var muro11=createSprite(326, 180, 10, 50);
  muro11.shapeColor="green";
  var muro12=createSprite(139, 292, 174, 10);
  muro12.shapeColor="green";
  var muro13=createSprite(132, 374, 10, 60);
  muro13.shapeColor="green";
  var muro14=createSprite(179, 319, 10, 60);
  muro14.shapeColor="green";
  var muro15=createSprite(77, 373, 10, 60);
  muro15.shapeColor="green";
  var muro16=createSprite(68, 248, 174, 10);
  muro16.shapeColor="green";
  var muro17=createSprite(16, 331, 50, 10);
  muro17.shapeColor="green";
  var muro18=createSprite(364, 313, 80, 10);
  muro18.shapeColor="green";
  var muro19=createSprite(324, 375, 10, 50);
  muro19.shapeColor="green";
  var muro20=createSprite(160, 197, 10, 112);
  muro20.shapeColor="green";
  var muro21=createSprite(329, 22, 10, 60);
  muro21.shapeColor="green";
  var muro22=createSprite(230, 24, 10, 60);
  muro22.shapeColor="green";

  }
  if (luigi.isTouching(princess)){
    
    playSound("assets/category_male_voiceover/you_win_male.mp3");true;
    
   stroke("green");
   strokeWeight(3);
   fill("lightgreen");
   textSize(40);
   text("¡Ganaste!",206, 150);
  
  }
  
  
  
  
  createEdgeSprites();  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
