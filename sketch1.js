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
var scl=25
function setup() {
  createCanvas(800, 800)
  video = createCapture(VIDEO)
  video.size(width/scl,height/scl)
}

function draw() {
  background(51)
  video.loadPixels()

  for (i = 0; i < video.width * video.height; i++)
  {
  pixel = i * 4
  red = pixel
  green = pixel + 1
  blue = pixel + 2
  alpha = pixel + 3
  r=video.pixels[red]
  g=video.pixels[green]
  b=video.pixels[blue]
  x=i%video.width
  y=floor(i/video.height)
  brightness=(r+g+b)/3
  w=map(brightness,0,225,7,scl)
   fill(brightness)
  stroke(0)
  rectMode(CENTER)
  rect(x*scl,y*scl,w,w)
  
  }


}


