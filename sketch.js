// NYU IDM Creative Coding Final Project final project for NYU IDM Creative Coding with Prof. A. Cotter.
// parts of this work were inspired by:
// -Lightning by joshuacorry949 at https://editor.p5js.org/joshuacorry949/sketches/pL1y5BF2Q 
//-Particles: Mouse Repel by marynotari https://editor.p5js.org/marynotari/sketches/gmdK1KwgJ 
//-natureofcode's simple particle attraction p5 example at https://editor.p5js.org/natureofcode/sketches/SyFkDVCwx
// Large thank you to Prof Cotter for his assistance during class and office hours


//create an array of lightning
let lightning = [];
//how big does the lightning get?
let offset = 90;
//how squiggly is the lightning?
let paths = 5;
//an array of clouds
let storm = [];


//create the color palette array
let colorPalette = [];
//create an array of boxes
let littleBoxes = [];
//how many little boxes(houses/buildings)
let numBoxes = 339
// //create the noise scale for the tornado
let noiseScale=0.02;


let rain = [];
let speed;



function preload(){
  storm[0] = loadImage("cloud0.png")
  storm[1] = loadImage("cloud2.png")
}

//SET IT UP

function setup() {
  createCanvas(windowWidth, windowHeight);

    drop = new Drop();

  
    for (var i = 0; i < 4600; i++) {
          rain[i] = new Drop();

    }
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
  

}

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
  
  
    speed =5
   
    translate(width/2, height/2);
  
    for (var i = 0; i < rain.length; i++) {
        rain[i].update();
        rain[i].show();
    
                                   
        if (rain[i] === 100) { 
            rain.splice(i, 1); 
            i/2; 
        }
    }
    pop()
  push()
//clouds
  
let sec=second()
let q = cos(sec)*100
let r = cos(sec)*19
let s=100


for(let i=30;i<200;i+=20){
tint(i,i)}


    image(storm[0],q, r);

     image(storm[1],q*-1+139, q+=30);

  


pop()
  
  
    
  
  
  // draw the lightning
  if (mouseIsPressed){
  for (let bolt of lightning) {
   bolt.show();
  }}
  
  
  
  
}

//if you type "s" while its running you can save a copy of the current image! (:
  function keyTyped() {
  if (key === 's') {
 save();
  }}