CANVAS_SIZE= 500;
BOARD_SIZE= 10;
SQUARE_SIZE= CANVAS_SIZE/BOARD_SIZE
function setup() {
  fill(240);
  createCanvas(CANVAS_SIZE,CANVAS_SIZE);
  
  fill(0);
  // vertical lines
  // line(x1, y1, x2, y2)
  // line(0, 0, 0, 400);
  // line(100, 0, 100, 400);
  // line(200, 0, 200, 400);
  // line(300, 0, 300, 400);
  // line(400, 0, 400, 400); 

  for (i=0; i<BOARD_SIZE+1; i+=1){
    // console.log("i is" + i);
    line(SQUARE_SIZE*i, 0, SQUARE_SIZE*i, CANVAS_SIZE);
    
    // line(x1, y1, x2, y2)
    line(0, SQUARE_SIZE*i, CANVAS_SIZE, SQUARE_SIZE*i);


  } 
  // horizontal lines
  // line(x1, y1, x2, y2)
  // line(0, 400, 400, 400);
  // line(0, 300, 400, 300);
  // line(0, 200, 400, 200);
  // line(0, 100, 400, 100);
  // line(0, 0, 400, 0);

}
// function draw() {
//   if (mouseIsPressed) {
//     ellipse(mouseX, mouseY, 80, 80); 
//     fill(0);
//   } 
// }

