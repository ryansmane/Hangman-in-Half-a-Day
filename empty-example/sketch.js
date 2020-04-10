let input;
let inputButton;
let word;
let wordLength;
let rowLength = 13;
let letters = [
   'A',
   'B',
   'C',
   'D',
   'E',
   'F',
   'G',
   'H',
   'I',
   'J',
   'K',
   'L',
   'M',
   'N',
   'O',
   'P',
   'Q',
   'R',
   'S',
   'T',
   'U',
   'V',
   'W',
   'X',
   'Y',
   'Z'
];
let width = 1300;
let height = 680;
let linesX = 50;
let linesY = 650;
let linesLength = 40;
let letterBlanks = document.querySelector('.letter-blanks');
let seconds = 59;
let startTime = false;
let offset;
let currentGuess;
let wordArray = [];
let spaceIndices = [];
let i;
var regex = new RegExp('');
let letterX;
let letterY;
let letterPositions = [];
let clicked = 0;
let wrongAnswers = 0;
let headStroke = 0;
let rightAnswers = 0;
let numberOfActualLetters = 0;
let mover = -1;
var explodeX1 = 650;
var explodeY1 = 550;
var explodeX2 = 650;
var explodeX3 = 650;
var explodeY2 = 550;
var explodeY3 = 550;
var explodeX4 = 650;
var explodeY4 = 550;
let diam = 5;

//p5 initialization
function setup() {
   var canvas = createCanvas(width, height);
   canvas.parent('hangman');
   background(0);
   var x = 0;
   var y = 0;
   var wrongX = 900;
   var wrongY = 300;

   //builds grid of interactive letters with styles
   for (var i = 0; i < letters.length; i++) {
      //builds second row
      if (i === 13) {
         x = 0;
         y = 100;
      }
      strokeWeight(3);
      stroke(100);
      textSize(40);
      var button = createButton(letters[i]);
      button.position(x + 25, y + 25);
      button.elt.style.opacity = '1';
      button.elt.style.backgroundColor = 'white';
      button.elt.style.border = 'none';
      button.elt.style.fontSize = '20px';
      button.elt.style.width = '65px';
      button.elt.style.height = '65px';
      button.parent('buttons');
      square(x, y, width/rowLength);
      x += width / rowLength;
   }
   //add events to every letter
   const buttonDiv = document.querySelector('#buttons');
   buttonDiv.addEventListener('click', getLetter);

   //builds blocks for wrong guesses 50px wide
   for (let i = 0; i <= 5; i++) {
      square(wrongX, wrongY, width/rowLength/2);
      wrongX += width / rowLength / 2;
   }

   //draws empty gallow
   line(275, 250, 525, 250);
   line(400, 250, 400, 270);

   //input field
   input = createInput('');
   inputButton = createButton('Submit Word');
   inputButton.position(190, 693);
   inputButton.mousePressed(getWord);
   input.parent('inputs');
   inputButton.parent('inputs');

  //draws timer, initialized at 0
   textAlign(CENTER);
   strokeWeight(0);
   fill(255);
   var timer = text('60', 1200, 625, 100);
}

// submit function
function getWord() {

  //lowercases user input
   word = input.value().toLowerCase();

   //stores length of word
   wordLength = word.length;

   //an array used to count number of spaces in the entry and put each character in an array
   for (let i = 0; i < wordLength; i++) {
      if (word.charAt(i) === ' ') {
         spaceIndices.push(i);
      }
      wordArray.push(word.charAt(i));
   }
   var e = document.getElementById('inputs');
   var child = e.lastElementChild;

   //removes input field when word is submitted
   while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
   }
   //starts timer
   startTime = true;

   //unknown
   offset = wordLength * -1;
   i = 0;
}

//event for clicked letter guesses
function getLetter(evt) {
  //don't know why I'm copying
   letterPositions.splice(0);

   // currentGuess is a live variable, determined by click
   currentGuess = evt.target.innerText;

   //empties text from letter box once clicked
   evt.target.innerText = '';

  //using RegExp for comparisons - e.g. regex = /a/gi if 'a' is clicked 
   regex = new RegExp(currentGuess, 'gi');
  
   //if guessed letter is correct, push that letter position
   for (let i = 0; i < wordLength; i++) {
      if (currentGuess === wordArray[i].toUpperCase())
         letterPositions.push(i + 1);
   }
   console.log(letterPositions)
  //using regex to test for matches
   if (!regex.test(word)) {
      //adjusts index of wrong box
      mover++;
      wrongAnswers++;
      fill('red');
      strokeWeight(4);
      textAlign(CENTER);
      //should not hard code these
      text(currentGuess, 925 + 50 * mover, 339);
   } else {
      //if right, we count how many of those letters are in the word
      let reg = currentGuess.toLowerCase();
      let regTest = new RegExp(reg, 'gi');
      rightAnswers += word.match(regTest).length;
   }
}
//p5js draw function - ongoing, perpetual, whatever adjective you want
function draw() {
   strokeWeight(3);
   stroke(100);
   textSize(40);
   //when we know our word, we draw our lines
   var linesTotal = (wordLength * 100) / 2;
   if (linesX <= linesTotal) {
      line(linesX, linesY, linesX + linesLength, linesY);

      if (spaceIndices.length > 0 && linesX / 50 === spaceIndices[i]) {
         linesX += 100;
         i++;
      } else {
         linesX += 50;
      }
   }

   textAlign(CENTER);
   fill(255);

   if (startTime && seconds >= -1) {
      if (offset != 0) {
         offset++;
      }

      fill(0);
      strokeWeight(0);
      square(1200, 625, 100);
      fill(255);
      strokeWeight(0);
      if (
         offset === 0 &&
         seconds > -1 &&
         rightAnswers != wordLength - spaceIndices.length
      ) {
         frameRate(1);
         4;
         text(seconds, 1200, 625, 100);

         seconds--;
      }
   }
   if (seconds === -1 || wrongAnswers === 6) {
      removeElements();
      fill('red');
      text('YOU LOSE', 500, 500);
   }

   if (offset === 0 && regex.test(word)) {
      letterX = 50;

      for (let i = 0; i <= letterPositions.length; i++) {
         textAlign(LEFT);
         fill(255);
         text(currentGuess, letterX * letterPositions[i], 640);
      }
   } else {
      fill(0);
      strokeWeight(3);
      switch (wrongAnswers) {
         case 1:
            circle(400, 320, 100);
            break;
         case 2:
            circle(400, 320, 100);
            line(400, 370, 400, 500);
            break;
         case 3:
            circle(400, 320, 100);
            line(400, 370, 400, 500);
            line(400, 435, 475, 370);
            break;
         case 4:
            circle(400, 320, 100);
            line(400, 370, 400, 500);
            line(400, 435, 475, 370);
            line(400, 435, 325, 370);
            break;
         case 5:
            circle(400, 320, 100);
            line(400, 370, 400, 500);
            line(400, 435, 475, 370);
            line(400, 435, 325, 370);
            line(400, 500, 325, 550);
            break;
         case 6:
            circle(400, 320, 100);
            line(400, 370, 400, 500);
            line(400, 435, 475, 370);
            line(400, 435, 325, 370);
            line(400, 500, 325, 550);
            line(400, 500, 475, 550);
      }

      if (
         rightAnswers === wordLength - spaceIndices.length &&
         rightAnswers > 0
      ) {
         frameRate(60);
         fill(255);
         explodeX1 += 5;
         explodeX2 -= 5;
         explodeY3 += 5;
         explodeY4 -= 5;
         diam += 10;
         fill('red');
         circle(explodeX1, explodeY1, diam);
         fill('blue');
         circle(explodeX2, explodeY2, diam);
         fill('green');
         circle(explodeX3, explodeY3, diam);
         fill('yellow');
         circle(explodeX4, explodeY4, diam);

         fill(255);
         text('YOU WIN!', width / 2, height / 2);
      }
   }
}
