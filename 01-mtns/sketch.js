// var x = mouseX;
// var y = mouseY;
function setup(){
    createCanvas(800,800);
    
}
function draw(){
    background(210);
    noStroke(0);
    fill(0,0,0,220);
    triangle(-150, 800, 20, 300, 250, 800);
    triangle(175, 800, 290, 300, 450, 800);
    triangle(275, 800, 400, 200, 600, 800);
    triangle(500, 800, 650, 100, 850, 800);
    fill(0,0,0,255);
//triangle(20, 800, 170, 400, 310, 800); //2nd triangle
   // triangle(400, 800, 510, 300, 700, 800);//4th triangle
  //  ellipse(mouseX,mouseY,50,50);
  
    fill(255);
    ellipse(200,200,100,100); //moon
    
    
}