function setup() {
createCanvas(400,400); //p1 changes the width, p2 changes the height
}

function draw() {
background(mouseX, 150, 00); //p1 changes the color
rect(mouseX,50,300,300); //p1 x-axis, p2 y-axis, p3 width, p4 height
rect(50, mouseY, 300, 300);
}