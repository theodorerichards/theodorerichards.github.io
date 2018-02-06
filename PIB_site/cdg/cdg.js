// var i;
// var x;
// var y; 

// function setup() {
//   createCanvas(windowWidth, 400);
//   // Create objects
  
// }

// function draw() {
//   background('#35B668');
//   for (i=0; i<50; i++) {
//     fill('#ffffff');
//     ellipse(i*20+20, 100, 10, 10);
//   }
// }


var img;


function preload() {
  img = loadImage('daisy.png');
  flower = loadImage('sunflower2.png');
  flowers = loadImage('flowers.png');
  red = loadImage('red.png');
  orange = loadImage('flower.png');
  purple = loadImage('peony.png');
  yellow = loadImage('tulip.png');
  group = loadImage('floweredlace.png');
  pot = loadImage('pot.png');
}



var max_distance, scale;
var v, v2, vdiff;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = 100;
  scale = .9;
}
 
function draw() {
    background('#35B668');
    image(pot, windowWidth/2-150, windowHeight/2-200);
    textSize(18);
    fill(255);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textFont('Helvetica Neue');
    text('medium flower pot\n$85\nbuy', windowWidth/2, windowHeight/2+100);
    
    
  for(var i = 0; i <= width; i += 35) {
    for(var j = 0; j <= height; j += 60) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(img, v.x, v.y+35);
      
    }
  }


  for(var i = 0; i <= width; i += 50) {
    for(var j = 0; j <= height; j += 100) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(purple, v.x, v.y+70);
    }
  }
 

  for(var i = 0; i <= width; i += 75) {
    for(var j = 0; j <= height; j += 60) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(flowers, v.x, v.y);
    }
  }
  for(var i = 0; i <= width; i += 45) {
    for(var j = 0; j <= height; j += 55) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(yellow, v.x, v.y+30);
    }
  }
  
  for(var i = 0; i <= width; i += 100) {
    for(var j = 0; j <= height; j += 50) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(flower, v.x, v.y+10);
    }
  }

  for(var i = 0; i <= width; i += 85) {
    for(var j = 0; j <= height; j += 140) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(red, v.x, v.y+15);
    }
  }

  for(var i = 0; i <= width; i += 95) {
    for(var j = 0; j <= height; j += 85) {
      v = new p5.Vector(i,j);
      v2 = new p5.Vector(mouseX, mouseY);
      if(p5.Vector.dist(v,v2)<max_distance){
        vdiff = p5.Vector.sub(v,v2);
        vdiff.setMag((max_distance - vdiff.mag()) * scale);
        v.add(vdiff);
      }
      image(orange, v.x, v.y+30);
    }
  }



  

 

}

