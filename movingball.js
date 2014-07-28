var x=0;
var acc=0;
var y=0;
var yspeed=0;

function setup() {
 createCanvas(1300, 400);
 
 x=mouseX;
 y=mouseY;
 acc=0.15;
 yspeed=0.5;
}


function draw() {
  background(255); 
  fill(0);
  x=mouseX;
  y=mouseY;
if (isMousePressed) {
   fill(142, 68, 173);
   
 
   y=y+50*sin(x+yspeed);
   yspeed=yspeed+acc;    
  
   
   
   ellipse(mouseX, y, 18, 18);
} 

else
{ fill(142, 68, 173);
  ellipse(mouseX,mouseY,18,18); }

  
  
}
