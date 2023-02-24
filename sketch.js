var box;

function setup() {
  createCanvas(2000,2000);
 
box= createSprite(200,200,30,30)  
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+4}
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-4
  
  }
  drawSprites();


}




