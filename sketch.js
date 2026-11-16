//store my paragraph 
let sliderValue = 16
let para
let slider


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

para = createP("this text is on the webpage, made with p5")
//ajust the position of my p5 added <p>
  para.position(0,20)

  slider = createSlider(12,100,16)
  slider.position(0,40)
  slider.changed(sliderChanged)
}


function draw() {
  background(220);
text("this is on the canvas", height/3, width/2)

push()
  textSize(sliderValue)
text(sliderValue, width/2, height/3)
  pop()
  
}

function sliderChanged(){
  sliderValue = slider.value()
}