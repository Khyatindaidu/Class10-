var a,b;

function preload (){

}

function setup() {
  a = prompt ("enter the variable for a ")
  b = prompt ("enter the veriable for b")
  var button1 = createButton(">>Click Here to Swap<<")
  button1.mousePressed(swap)

}

function draw() {
  background(220);
  // console.log(a);
  //consoe.log (b);
  drawSprites ()
}
function swap(){
  [a,b] = [b,a]
  console.log("the variable a afer swapping: " + a)
  console.log("the variable b after swapping: " + b )
}

