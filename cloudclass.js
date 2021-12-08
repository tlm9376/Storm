
class Cloud {
    constructor(x,y, hue1, hue2, hue3){
      this.x = random(width);
      this.y = random(height);
  
      this.hue1 = [random(34,100), random(32, 97), random(51,103),50]
      this.hue2 = [random(34,100), random(32, 97), random(51,103),50]
      this.hue3 = [random(34,100), random(32, 97), random(51,103),50]
    }
  wind(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  } 
  gather(){
    
  noStroke()
    fill(this.hue1)
    ellipse(this.x, this.y, random(70,90),(random(30,50)))
    fill(this.hue2)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
    fill(this.hue3)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
      fill(this.hue1)
    ellipse(this.x, this.y, random(70,90),(random(30,50)))
    fill(this.hue2)
    ellipse(this.x+random(-43,43), this.y + random(-33,33), random(70,90),(random(30,50)))
    fill(this.hue3)
    ellipse(this.x+random(-43,43), this.y + random(-43,43), random(70,90),(random(30,50)))
      ellipse(this.x+random(-43,43), this.y+random(-43,43), random(30,90),(random(30,90)))
    fill(this.hue2)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
    fill(this.hue3)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
      fill(this.hue1)
    ellipse(this.x+random(-43,43), this.y+random(-43,43), random(30,90),(random(30,90)))
    fill(this.hue2)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
    fill(this.hue3)
    ellipse(this.x+random(-23,23), this.y + random(-33,33), random(70,90),(random(30,50)))
   
  }
   
      detectEdges(){
  
      // If the Particle touches the left or right edges of the canvas,
      // it will reverse direction.
      if(this.x < 0 || this.x > width) {
        this.x-=2;
      }
  
      // If the house touches the top or bottom edges of the canvas,
      // it will reverse direction.
      if(this.y < 0 || this.y > height) {
        this.y -=2 ;
      }
    }
    
    
    
  }
  
  