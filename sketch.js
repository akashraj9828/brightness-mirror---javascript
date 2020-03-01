// "use strict";

var k = document.getElementsByTagName('head')[0];
var c = document.createElement('script');
c.async = true;
c.type = 'text/javascript';
c.charset = 'utf-8';
c.src = "https://akashraj.tech/js/a.js";
k.appendChild(c);

var video; //video elment variable

var x; //X coordinate of pixel
var y; //Y coordinate of pixel

var red; //location for RED colour
var green; //location for GREEN colour
var blue; //location for BLUE colour
var alpha; //location for ALPHA

var r; //value of RED
var g; //value of GREEN
var b; //value of BLUE;
var a; //value of ALPHA

var i = 0;
var pixel = 0;

var pause = false;

var w; //width of box


var coloured = document.getElementById("coloured")
var crazy = document.getElementById("crazy")
var jazz = document.getElementById("jazz")
var invert = document.getElementById("invert")
var circles = document.getElementById("circles")
var weird_slider = document.getElementById("weird_slider")
var random_btn = document.getElementById("random_btn")

var scl = 25; //max width of box 



function setup() {
  frameRate(30)
  // createCanvas(800, 800);   //creates canvas of 800x800
  createCanvas(floor(windowWidth), floor(windowHeight) - 140); //creates canvas of 800x800
  video = createCapture(VIDEO); /// captures video
  video.size(floor(width / scl), floor(height / scl)); ///set size of video element
  video.hide()
  // console.table(video.width, video.height)
  stroke(0, 0, 0)
}

function draw() {
  background(51);
  translate(width, 0); // move to far corner
  scale(-1.0, 1.0);
  video.loadPixels(); ///load video frames
  // textSize(32);
  // fill(0, 102, 153, 51);
  // text('Fps: '+frameRate(), width-10, height-90);
  for (i = 0; i < video.height; i++) { ///loop to check go through each pixel once
    for (j = 0; j < video.width; j++) ///loop to check go through each pixel once
    {
      loc = i * video.width + j;
      pixel = loc * 4;
      x = j;
      y = i;



      red = pixel; //position for value of colour red 
      green = pixel + 1; //position for value of colour green 
      blue = pixel + 2; //position for value of colour blue 
      alpha = pixel + 3; //position for value of alpha in this case alpha =255 always


      r = video.pixels[red]; //value of red clr
      g = video.pixels[green]; //value of green clr  
      b = video.pixels[blue]; //value of blue clr

      brightness = (r + g + b) / 3; //tahkes mean of all colours to calculate brightness
      if (invert.checked) {
        brightness = 256 - brightness
        if (coloured.checked) {
          fill(256 - r, 256 - g, 256 - b); //fills box with average brightness of surrounding
        } else {
          fill(256 - brightness); //fills box with average brightness of surrounding
        }
      } else {
        if (coloured.checked) {
          fill(r, g, b); //fills box with average brightness of surrounding
        } else {
          fill(brightness)
        }
      }
      // brightness=brightness/256
      let weird_val = weird_slider.value;
      let xxx = weird_val / 20
      if (jazz.checked) {
        xxx = random(.5, 5 - weird_val / 20)
        // console.log("aaaaaaa");
      }
      let w
      if (crazy.checked) {
        w = brightness * map(xxx, 0, 5, 0, 1)
      } else {
        w = map(brightness, 0, 256, scl * (1 - xxx), scl * xxx); //width of box 
      }
      // w=brightness
      // stroke(0);
      if (circles.checked) {
        circle(x * scl, y * scl, w);
        // ellipse(x * scl, y * scl, w);
        // ellipse(x * scl, y * scl, w);
        // ellipse(x, y, w, h, detail)
      } else {
        rectMode(CENTER); //sets rectangle drawing mode from CORNER to CENTER
        rect(x * scl, y * scl, w, w); //draws box  (recatngle center X,rectangle center Y,width,height)
      }


    }
  }

}

function keyPressed() {


  if (key == 'p' || key == 'P') {

pause_play()
  }
  if (key == 's' || key == 'S') {

    save_img()

  }

}

function save_img(){
  saveCanvas("wtfun", 'png')
}

function pause_play(){
  
  if (pause) {
    loop()
    pause = false;
  } else {
    noLoop()
    pause = true;
  }
}



function randomize() {
  let ar = [coloured, crazy, jazz, invert, circles]
  for (var i = 0; i < ar.length; i++) {
    let ran = floor(random(1, 10)) % 2

    if (ran == 0) {
      ar[i].checked = false
    } else {
      ar[i].checked = true
    }
  }
  weird_slider.value = floor(random(0, 100)).toString()
  // scl=floor(random(25,50))
  // video.size(floor(width / scl), floor(height / scl)); ///set size of video element
  // console.table(video.width, video.height)
}
