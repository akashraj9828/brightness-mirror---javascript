var video  //video elment variable
var rad = 0
var blau = 0
var gran = 0
var alpi = 0
var x
var y

var red;   //location for RED colour
var green;  //location for GREEN colour
var blue;   //location for BLUE colour
var alpha;  //location for ALPHA

var r;  //value of RED
var g;  //value of GREEN
var b;  //value of BLUE;
var a;  //value of ALPHA


var scl = 25   //max width of box 
function setup() {
  createCanvas(800, 800)   //creates canvas of 800x800
  video = createCapture(VIDEO)   /// captures video
  video.size(width / scl, height / scl)  ///set size of video element
}

function draw() {
  background(51)
  video.loadPixels()   ///load video frames

  for (i = 0; i < video.width * video.height; i++)  ///loop to check go through each pixel once
  {
    pixel = i * 4
    red = pixel               //position for value of colour red 
    green = pixel + 1         //position for value of colour green 
    blue = pixel + 2          //position for value of colour blue 
    alpha = pixel + 3         //position for value of alpha in this case alpha =255 always


    r = video.pixels[red]     //value of red clr
    g = video.pixels[green]   //value of green clr  
    b = video.pixels[blue]    //value of blue clr
    x = i % video.width       // 
    y = floor(i / video.height)
    brightness = (r + g + b) / 3       //tahkes mean of all colours to calculate brightness
    w = map(brightness, 0, 225, 7, scl)   //width of box 
    fill(brightness)         //fills box with average brightness of surrounding
    stroke(0)
    rectMode(CENTER)
    rect(x * scl, y * scl, w, w)   //draws box

  }


}


