
let input;
let inputButton;
let word;
let wordLength;
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let width = 1300;
let height = 680;
let linesX = 40;
let linesY = 600;
let linesLength = 40;
let letterBlanks = document.querySelector('.letter-blanks');


function setup() {
  var canvas = createCanvas(width, height);
  canvas.parent('hangman')
  background(0);
  var x = 0;
  var y = 0;
  var wrongX = 750;
  var wrongY = 300;
  
  
  strokeWeight(3);
  stroke(100);
  textSize(40)
  for (var i = 0; i < letters.length; i++) {
    if (i === 13) {
      x = 0;
      y = 100; 
    }
    var button = createButton(letters[i])
    button.position(x + 25, y + 525);
    button.elt.style.opacity = "1";
    button.elt.style.backgroundColor = "white";
    button.elt.style.border = "none";
    button.elt.style.fontSize = "20px";
    button.elt.style.width = "65px";
    button.elt.style.height = "65px";
    button.parent("buttons")
    square(x, y, 100)
    x+=100;
  }
  
  for (let i = 0; i < 5; i++) {
    square(wrongX, wrongY, 100)
    wrongX+=100;
  }
  
 
  const buttonDiv = document.querySelector('#buttons');
  buttonDiv.addEventListener('click', getLetter);
  
  
  input = createInput();
  inputButton = createButton("Enter Word");
  inputButton.position(190, 1193);
  inputButton.mousePressed(getWord)
  input.parent('inputs');
  inputButton.parent('inputs');

  fill(0);
  var headStroke = 0
  strokeWeight(headStroke);
  var head = circle(400, 320, 100)
  var bodyStroke = 0
  strokeWeight(bodyStroke);
  var body = line(400, 370, 400, 500)
  // var leftArmStroke = 0
  // strokeWeight(leftArmStroke);
  var leftArm = line(400, 435, 475, 370)
  var rightArmStroke = 0
  strokeWeight(rightArmStroke);
  var rightArm = line(400, 435, 325, 370)
  var rightLegStroke = 0
  strokeWeight(rightLegStroke);
  var rightLeg = line(400, 500, 325, 550);
  var leftLegStroke = 0
  strokeWeight(leftLegStroke);
  var leftLeg = line(400, 500, 475, 550)
  
  

}
function getWord() {
  word = input.value();
  wordLength = word.length;
  var e = document.getElementById('inputs')
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild
  }
  let newBar = document.createElement('div');
  newBar.style.backgroundColor = "black";
  newBar.innerText = "HELLO";
  newBar.style.color = "white";
  letterBlanks.appendChild(newBar);
}




function getLetter(evt) {
  console.log(evt.target.innerText);
} 



function draw() {
  strokeWeight(3);
  stroke(100);
  textSize(40);
  var linesTotal = (wordLength*100)/2
  if (wordLength % 2 === 1) {
    linesTotal += 100
  }
  if (linesX < linesTotal) {
  line(linesX, linesY, linesX+linesLength, linesY)
  linesX += 50; }
//FIGURE OUT THIS LOGIC, NEED TO SEE HOW MATH WORKS OUT
  
}