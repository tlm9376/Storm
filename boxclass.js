
//create the class for the little buildings
class Box {

  constructor(spot, xSize, ySize, hue, otherHue,vel, acc){
  this.spot =createVector(random(width),random(height))

  this.xSize = random(19,23);
  this.ySize = random(9,19);
  this.hue = [random(87,156), random(0,26), random(35,52),];
   //the color for the windows
  this.otherHue = [random(252,255), random(158,192), random(15,84), random(39,139)];
     
    this.vel = createVector(0,0);
  this.acc = createVector(10,30);

    
}

display(){
  noStroke()
      fill(this.hue,7);
  rect(this.spot.x,this.spot.y, this.xSize+10, this.ySize+10);
  fill(this.hue);
  rect(this.spot.x,this.spot.y,this.xSize, this.ySize);
  
  //windows!
  fill(this.otherHue);
  rect(this.spot.x + 3, this.spot.y+4, 5,5);
  rect(this.spot.x + 13, this.spot.y+4, 5,5);
  rect(this.spot.x + 3, this.spot.y+14, 5,5);
   rect(this.spot.x + 13, this.spot.y+14, 5,5);

}

//make the buildings move when the tornado becomes close because of the "wind"
//the move function of this class was assisted by Prof A. Cotter of NYUIDM and natureofcode's simple particle attraction p5 example at https://editor.p5js.org/natureofcode/sketches/SyFkDVCwx
move() {
//measure the distance from the bottom of the tornado to the little buildings
  let distance = dist(mouseX, mouseY, this.spot.x, this.spot.y);
  //if the distance is less than 39, blow the buildings around
  if (distance <39) {
    this.acc = p5.Vector.sub(createVector(mouseX, mouseY), this.spot);


// rotate(frameCount * 0.0001);


  }
//if buildings are not close to the tornado, make them stop
  else {
    this.acc = createVector(0, 0);
  }
  this.acc.setMag(5);
  this.vel.add(this.acc.div(33,33));
  this.vel.limit(9);
  this.vel = this.vel.mult(2);
  this.spot.add(this.vel);

}




// method for the detected edges function for the box class learned from Particles: Mouse Repel by marynotari https://editor.p5js.org/marynotari/sketches/gmdK1KwgJ

detectEdges(){

  // If the Particle touches the left or right edges of the canvas,
  // it will reverse direction.
  if(this.spot.x < 0 || this.spot.x > width) {
    this.vel.x *= -1;
  }

  // If the house touches the top or bottom edges of the canvas,
  // it will reverse direction.
  if(this.spot.y < 0 || this.spot.y > height) {
    this.vel.y *= -1;
  }
}



}
