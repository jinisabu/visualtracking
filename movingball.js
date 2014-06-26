var x=0;
var acc=0;
var y=0;
var yspeed=0;

function setup() {
 createCanvas(1300, 400);
 
 x=mouseX;
 y=mouseY;
 acc=0.25;
 yspeed=0.5;
}

function draw() {
  background(255); 
  fill(0);
  x=mouseX;
  //y=mouseY;
if (isMousePressed) {
   fill(255,0,0);
   
 //  x=x+xspeed;
   y=y+yspeed;
   yspeed=yspeed+acc;    
   if(y<0||y>height)
   {
     yspeed=yspeed*-1;
   }
   
   
   ellipse(mouseX, y, 40, 40);
} 
//else
//ellipse(mouseX, mouseY, 40, 40);
  
  
}
