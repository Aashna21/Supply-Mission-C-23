var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, side1, side2, side3;
var side1_options, side2_options, side3_options, ground_options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	packageSprite.velocityY = 2; 

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10), ground_options;
	groundSprite.shapeColor=color(255)

	side1Sprite=createSprite(width/2, height-50, 200, 20), side1_options;
	side1Sprite.shapeColor=color(235, 158, 52)

	side2Sprite=createSprite(300, height-90, 20, 100), side2_options;
	side2Sprite.shapeColor=color(235, 158, 52)

	side3Sprite=createSprite(500, height-90, 20, 100), side3_options;
	side3Sprite.shapeColor=color(235, 158, 52)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Creates the box
	side1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, side1);

	side2 = Bodies.rectangle(width/2, 650, 20, 100 , {isStatic:true} );
	World.add(world, side2);

	side3 = Bodies.rectangle(width/2, 650, 20, 100 , {isStatic:true} );
 	World.add(world, side3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  keyPressed(packageBody, side1Sprite, side2Sprite, side3Sprite); 

  drawSprites();
 
}

function keyPressed(packageBody, side1Sprite, side2Sprite, side3Sprite) {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	if(packageSprite.isTouching((groundSprite && side1Sprite) || (groundSprite && side2Sprite) || groundSprite && side3Sprite) > 0) {
		Matter.Body.setStatic(packageBody, true);
	}
}



