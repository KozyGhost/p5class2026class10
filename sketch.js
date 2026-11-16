//store my paragraph 

let para

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

para = createP("this text is on the webpage, made with p5")
//ajust the position of my p5 added <p>
  para.position(0,20)
}

function draw() {
  background(220);
text("this is on the canvas", height/3, width/2)
}