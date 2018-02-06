var image;

function setup() {
  // put setup code here
  createCanvas(windowWidth, 600);
  //image = createImg('brands/on-white.png');
  var a1=createA('off-white/ow.html', 'off-white');
  a1.addClass('off-white');
  var a2=createA('cdg/cdg.html', 'comme des garden');
  a2.addClass('cdg');
  //image = createImg('brands/cdg.png');
  background('#444444');
}

function draw() {
  fill(255, 0, 0);
  noStroke();
  rect(windowWidth/10, windowHeight/10, windowWidth*0.8, windowHeight*0.45);

  textSize(200);
  fill(255);
  textFont('Helvetica');
  textStyle(BOLD);
  text('packaged_in', -20, 250);
  text('brooklyn', -20, 500);
  
}

