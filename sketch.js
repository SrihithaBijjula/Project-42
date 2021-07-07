// create variable for hr, mn anf sc

var hr;
var min;
var sec;

function setup() {
  createCanvas(800,400);
  
  // assign values


  angleMode(DEGREES);
}

function draw() {
  background("purple"); 
  translate(200,200)
  rotate(-90) 

  hr=hour()
  hrAngle=map(hr,0,12,0,360);
  
  sec=second();
  secAngle=map(sec,0,60,0,360);
  
  min=minute();
  minAngle=map(min,0,60,0,360),
  // min hand
  push()
  stroke("pink");
  strokeWeight(7);
  rotate(minAngle);
  line(0,0,100,0);
  pop()
  // Hr angle
  push()
  stroke("blue");
  strokeWeight(7);
  rotate(hrAngle);
  line(0,0,70,0);
  pop()

push()
  stroke("black");
  strokeWeight(4);
  rotate(secAngle);
  line(0,0,100,0);
  pop()
//
  console.log(sec)
}