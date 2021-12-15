class Drop {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);      
        this.pz = this.z;
    }
    update() {
      this.z = this.z + speed;
      if (this.z < 1) {
          this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    }
  
    show() {
   

      fill(30,9);
      
      noStroke();
      
      var sx = map(this.x/this.z, 0, 1, 0, width);
      var sy = map(this.y/this.z, 0, 1, 0, height);
      for (var r = map(this.z, 0, width,12,0); r>0; r-=30){
      
      ellipse(sx, sy, r,r);    }
      
      var px = map(this.x/this.pz, 0, 1, 0, width);
      var py = map(this.y/this.pz, 0, 1, 0, height);
      this.pz = this.z;
      
      stroke(255);
      line(px, py, sx, sy);
    }
}