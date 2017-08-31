var setup, draw, scl, w, pixel, i, a, b, g, r, alpha, blue, green, red, y, x, video;
(function () {
  "use strict";

  var _$0 = this;

  function _0() {
    createCanvas(800, 800); //creates canvas of 800x800

    _$0.video = createCapture(VIDEO); /// captures video

    _$0.video.size(width / _$0.scl, height / _$0.scl); ///set size of video element

  }

  function _1() {
    background(51);

    _$0.video.loadPixels(); ///load video frames


    for (_$0.i = 0; _$0.i < _$0.video.width * _$0.video.height; _$0.i++) ///loop to check go through each pixel once
    {
      _$0.pixel = _$0.i * 4;
      _$0.x = _$0.i % _$0.video.width; //X coordinate of pixel

      _$0.y = floor(_$0.i / _$0.video.height); //Y coordinate of pixel

      _$0.red = _$0.pixel; //position for value of colour red 

      _$0.green = _$0.pixel + 1; //position for value of colour green 

      _$0.blue = _$0.pixel + 2; //position for value of colour blue 

      _$0.alpha = _$0.pixel + 3; //position for value of alpha in this case alpha =255 always

      _$0.r = _$0.video.pixels[_$0.red]; //value of red clr

      _$0.g = _$0.video.pixels[_$0.green]; //value of green clr  

      _$0.b = _$0.video.pixels[_$0.blue]; //value of blue clr

      brightness = (_$0.r + _$0.g + _$0.b) / 3; //tahkes mean of all colours to calculate brightness

      _$0.w = map(brightness, 0, 225, 7, _$0.scl); //width of box 

      fill(brightness); //fills box with average brightness of surrounding

      stroke(0);
      rectMode(CENTER); //sets rectangle drawing mode from CORNER to CENTER

      rect(_$0.x * _$0.scl, _$0.y * _$0.scl, _$0.w, _$0.w); //draws box  (recatngle center X,rectangle center Y,width,height)
    }
  }

  setup = _0;
  draw = _1;
  scl = void 0;
  w = void 0;
  pixel = void 0;
  i = void 0;
  a = void 0;
  b = void 0;
  g = void 0;
  r = void 0;
  alpha = void 0;
  blue = void 0;
  green = void 0;
  red = void 0;
  y = void 0;
  x = void 0;
  video = void 0;
  i = 0;
  pixel = 0;
  scl = 25;
}).call(this);