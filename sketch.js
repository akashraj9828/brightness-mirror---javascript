var video
var re = 0
var gr = 0
var bl = 0
var al = 0
var px = 0
var rad = 0
var blau = 0
var gran = 0
var alpi = 0
var x
var y


var r
var g
var b
var scl=25   //max width of box 
function setup() {
  createCanvas(800, 800)
  video = createCapture(VIDEO)   /// captures video
  video.size(width/scl,height/scl)  ///set size of video element
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
  r=video.pixels[red]
  g=video.pixels[green]
  b=video.pixels[blue]
  x=i%video.width
  y=floor(i/video.height)
  brightness=(r+g+b)/3       //tahkes mean of all colours to calculate brightness
  w=map(brightness,0,225,7,scl)   //width of box 
   fill(brightness)         //fills box with average brightness of surrounding
  stroke(0)
  rectMode(CENTER)
  rect(x*scl,y*scl,w,w)   //draws box
  
  }


}


