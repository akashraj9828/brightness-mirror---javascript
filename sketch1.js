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
  // image(video, 0, 0, 400, 400)
  // r = re
  // g = gr
  // b = bl
  // scale(2)
  // a=al
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
  w=map(brightness,0,225,2,scl)
   fill(brightness)
  stroke(0)
  rectMode(CENTER)
  rect(x*scl,y*scl,w,w)
  // pixels[red]=video.pixels[red]

  // pixels[green]=brightness

  // pixels[red]=brightness
    // pixels[green]=0
    // pixels[blue]=brightness
  }
  // pixels[blue]=video.pixels[blue]

  // off = 1
//   simm = floor(dist(r, g, b,pixels[red], pixels[green], pixels[blue]))
//   if(simm<30){
//   pixels[red]=255
//   pixels[green]=0
//   pixels[blue]=0
//   pixels[alpha]=200
// }


}
// log(simm)

// }
// }

function getclr(xp, yp) {
  x = floor(constrain(xp, 0, width))
  y = floor(constrain(yp, 0, height))
  px = (x + y * width) * 4
  rad = px
  gran = rad + 1
  blau = rad + 2
  alpi = rad + 3
  re = pixels[rad]
  gr = pixels[gran]
  bl = pixels[blau]
  al = pixels[alpi]

}




// function mouseClicked() {
// getclr(mouseX, mouseY)
// }
