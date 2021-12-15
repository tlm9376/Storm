

///the lightning, including this bolt class was inspired byLightning by joshuacorry949 at https://editor.p5js.org/joshuacorry949/sketches/pL1y5BF2Q

//this bolt class may seem simple but it is meaningless without the generate lightning function
class Bolt {
  constructor(startPt, endPt, thickness) {
    this.start = startPt;
    this.end = endPt;
    this.thickness = thickness;
  }
  
  show() {
    stroke(255, 219, 156);
    strokeWeight(this.thickness);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  
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
    //take bolts out of lightning array
  friction = lightning.slice();
    for (let bolt of friction) {
    
      //use p5's splice function to add bolts the strands of energy at the beginning of the lighning array
      lightning.splice(lightning.indexOf(bolt), 1);
//ensures that the lightning generates between an appropriate start and end point
      let strike = createVector((bolt.start.x + bolt.end.x) / 2, (bolt.start.y + bolt.end.y) / 2); 
      //where are the branches of lighting going?-- randomly select between -90 and 90 
      strike.x += random(-offset, offset);
      strike.y += random(-offset, offset);
// more lightning-- together these will give the body of the lightning- adding new bolts to the array with endpoints at the random offset 
      lightning.push(new Bolt(bolt.start, strike, bolt.thickness));
      lightning.push(new Bolt(strike, bolt.end, bolt.thickness));
        //create the amount of branching
      if (random(1) <= 0.5) {
      //point it downward
        direction = strike.copy().sub(bolt.start);
        //keep switching it up lighning style
        splitEnd = p5.Vector.rotate(direction, random(0, maxAngle)).mult(0.9).add(strike);
        //skinnier and skinnier lines
        lightning.push(new Bolt(strike, splitEnd, bolt.thickness * 0.4));
      }
    }
    //make it actually lightning shaped by limiting the offset so that the strands have enough room to branch before ending
    offset/=1.8;
  }
  
  

}