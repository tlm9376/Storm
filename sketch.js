//create an array of lightning
let lightning = [];
//how big does the lightning get?
let offset = 90;
//how squiggly is the lightning?
let paths = 5;
//an array of clouds
let storm = [];
//number of clouds
let numClouds= 9
//declare the cloud width

//create the color palette array
let colorPalette = [];
//create an array of boxes
let littleBoxes = [];
//how many little boxes(houses/buildings)
let numBoxes = 339
// //create the noise scale for the tornado
let noiseScale=0.02;


//SET IT UP

function setup() {
  createCanvas(windowWidth, windowHeight);


  for (let i = 0; i < numBoxes; i++){
    littleBoxes.push(new Box());
  }
  //add the colors to the palette
  colorPalette[1] = (random(89,106),random(84,102), random(150,158));
  colorPalette[2] = (random(252,255), random(158,192), random(15,84));
  colorPalette[3] = (random(140,156), random(0,26), random(44,52));

  
  //make the starting point for the lighting some random spot on the top
  let startPoint = createVector(random(width), 0);
  let endPoint = createVector(random(width), random(height));
  
  generateLightning(startPoint, endPoint);
  
  for (let i = 0; i < numClouds; i++){
    storm.push(new Cloud());}
}


//DRAW IT

function draw() {
  //creating the force
  background(30)
  // background(random(0,39),random(9,39));
  
  
  
  
 //create the little houses
  for (let i = 0; i < numBoxes; i++){

        littleBoxes[i].display()
    littleBoxes[i].move()
    littleBoxes[i].detectEdges()

    }

  //draw a dust cloud at the base of the tornado
      noStroke()
    fill(0,random(0,39));
  ellipse(mouseX, mouseY, random(139))
   ellipse(mouseX, mouseY, random(139))
    ellipse(mouseX, mouseY, random(139))
  fill(0,random(0,9));
    ellipse(mouseX, mouseY, random(159))
    ellipse(mouseX, mouseY, random(159))
   background(0,9);
  
  
  
  // draw the lightning
  if (mouseIsPressed){
  for (let bolt of lightning) {
   bolt.show();
  }}
  
  
  
  
  
  
  //CREATE THE TORNADO
  //the tornado was created as an adaptation of the p5 example for the noise() function
  
 push()
   // rotate(HALF_PI);
  for (let x=0; x < width; x++) {
    //differences in layers made possible by
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
//make it hollow
    fill(0,3)
    strokeWeight(3)
    //change the colors of the stroke
    stroke(noiseVal*random(89,106),noiseVal*random(84,102), noiseVal*random(150,158));
    //crete the circular layers
  circle(mouseX+noiseVal*60, x+mouseY,x*(3/4));}
    pop()
  
   //draw the storm
  push()
  scale(4)
    for (let i = 0; i < numClouds; i++){

    storm[i].gather()
    storm[i].wind()
    storm[i].detectEdges()

    }
  pop()
  
}

//this generate lightning function was inspired by joshuacorry949's work (see above)

function generateLightning(start, end) {
  //the maximum angle of the jagged corners
  var maxAngle = 0.5;
  //create an array of jaggedness
  var friction = [];
  //push bolts into the array of lighting!
  lightning.push(new Bolt(start, end, 3));
  lightning.push(new Bolt(createVector(random(width), 0), createVector(600, 500), 3));
  //branch the lightning
  friction = lightning.slice();
  
  for (let i = 0; i < paths; i ++) {
  friction = lightning.slice();
    for (let bolt of friction) {
    
      //use p5's splice function to add strands of energy
      lightning.splice(lightning.indexOf(bolt), 1);

      let strike = createVector((bolt.start.x + bolt.end.x) / 2, (bolt.start.y + bolt.end.y) / 2); 
      //where is the lighting going?
      strike.x += random(-offset, offset);
      strike.y += random(-offset, offset);
// more lightning
      lightning.push(new Bolt(bolt.start, strike, bolt.thickness));
      lightning.push(new Bolt(strike, bolt.end, bolt.thickness));
      
      if (random(1) <= 0.5) {
        //make it jagged
        direction = strike.copy().sub(bolt.start);
        //keep switching it up lighning style
        splitEnd = p5.Vector.rotate(direction, random(0, maxAngle)).mult(0.9).add(strike);
        //skinnier and skinnier lines
        lightning.push(new Bolt(strike, splitEnd, bolt.thickness * 0.4));
      }
    }
    //make it actually lightning shaped
    offset/=1.8;
  }
  
  

}
//if you type "s" while its running you can save a copy of the current image! (:
  function keyTyped() {
  if (key === 's') {
 save();
  }}
