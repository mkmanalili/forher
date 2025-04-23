var starfish;

function preload(){
  img = loadImage("STARFISH.png")
}

function setup() {
background(0,0,0);
  createCanvas(windowWidth, windowWidth);
  
}

function draw() {

}

function mousePressed(){
  
  image(img, mouseX, mouseY);
}