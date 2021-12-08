
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
  