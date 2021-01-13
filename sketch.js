var box
var pic

function preload(){
  pic = loadImage("download.jpg")
  
}
function setup() {
createCanvas(400,400)
  
  
  box = createSprite(200,200,10,10)

}

function draw() {
  background("white");
  box.addImage(pic)

drawSprites();
}

function mouseDragged() {

}

function mouseReleased() {
 
}

