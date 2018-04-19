var btn1 = {
  x: 100,
  y: 123,
  width: 112,
  height: 43,
};

var btn2 = {
  x: 100,
  y: 217,
  width: 112,
  height: 43,
};

var drawButton = function(btn1) {
  fill(0, 60, 255);
  rect(btn1.x, btn1.y, btn1.width, btn1.height, 5);
  fill(79, 17, 237);
  textSize(39);
  textAlign(CENTER, TOP);
  text("start", btn1.x+10, btn1.y+btn1.height/4);
  };
  
  var drawButton = function(btn2){
   fill(0, 162, 255);
   rect(btn2.x, btn2.y, btn2.width, btn2.height, 5);
   fill(247, 5, 247);
   textSize(24);
   textAlign(CENTER,TOP);
   text("options", btn2.x+10, btn2.y+btn2.height/4);
  };

  drawButton(btn1);
  drawButton(btn2);
