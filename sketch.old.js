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
function setup() {
  createCanvas(400, 400)
  video = createCapture(VIDEO)
  video.size(400, 400)
}
function getclr(xp, yp) {
  x = floor(constrain(xp, 0, width))
  y = floor(constrain(yp, 0, height))
  px = (x + y * width) * 4
  rad = px
  gran = rad + 1
  blau = gran + 1
  alpi = blau + 1
  re = pixels[rad]
  gr = pixels[gran]
  bl = pixels[blau]
  al = pixels[alpi]
}
function draw() {
  background(255)
  image(video, 0, 0, 400, 400)
  r = re
  g = gr
  b = bl
  loadPixels()
  for (i = 0; i < width * height; i++)  
  pixel = i * 4
  red = pixel + 1
  green = pixel + 1
  blue = pixel + 2
  alpha = pixel + 3
  off = 1
  simm = dist(r, g, b, pixels[red], pixels[green], pixels[blue])  
  updatePixels()
}


function mouseClicked() {
getclr(mouseX, mouseY)