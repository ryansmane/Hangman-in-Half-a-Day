const x = 10;
const y = 17;
const num = x * y;
const divs = document.getElementsByClassName('country');
const mapDiv = document.querySelector('.map');
const uralStart = 19;
const uralSide = 4;
const uralColor = 'red';
const uralName = ['U', 'R', 'A', 'L'];
let ural = [' URAL', 40];
const lumeStart = 70;
const lumeSide = 4;
const lumeColor = 'purple';
const lumeName = ['L', 'U', 'M', 'E'];
let lume = [' LUME', 91];
const lyonStart = 121;
const lyonSide = 4;
const lyonColor = 'pink';
const lyonName = ['L', 'Y', 'O', 'N'];
let lyon = [' LYON', 125];
const skyStart = 41;
const skySide = 2;
const skyColor = 'green';
let sky = [' SKY'];
const forkStart = 43;
const forkSide = 3;
const forkColor = 'yellow';
const forkName = ['F', 'O', 'R', 'K'];
let fork = [' FORK', 75, 76];
const vollStart = 92;
const vollSide = 4;
const vollName = ['V', 'O', 'L', 'L'];
const vollColor = 'orange';
let voll = [' VOLL'];
const groutStart = 96;
const groutSide = 3;
const groutColor = 'grey';
const groutName = ['G', 'R', 'O', 'U', 'T'];
let grout = [' GROUT', 133, 134, 150, 151, 147, 148, 149];
const isleStart = 47;
const isleSide = 1;
const isleColor = 'brown';
let isle = [" ISLE", 46];
let allTerritories = [ural, lume, lyon, sky, fork, grout, voll, isle];
let allTerritoryNames = [" URAL", " LUME", " LYON"," SKY"," FORK"," GROUT"," VOLL"," ISLE"];
let whereToPlaceImages = [[" URAL", 55], [" LUME", 106], [" LYON", 123], [" SKY", 58], [" FORK", 44], [" VOLL", 110], [" GROUT", 114], [" ISLE", 47]];
let positions = [55, 106, 123, 58, 44, 110, 114, 47]





let layout = [];

function makeMap() {
 for (var i = 0; i < num; i++) {
  let newCountry = document.createElement('div');
  newCountry.className = `country ${i}`;
  mapDiv.appendChild(newCountry);
  let countryLabel = document.createElement('p');
    // countryLabel.innerText = i;
  newCountry.appendChild(countryLabel);
 }


 mapDiv.style.display = 'grid';
 var rowsString = '';
 var colsString = '';
 for (var i = 0; i < x; i++) {
  var newEntry = randomInt(65, 120);
  rowsString += '65px ';
 }

 for (var i = 0; i < y; i++) {
  var newEntry = randomInt(65, 120);
  colsString += '65px ';
 }

 for (var i = 0; i < num; i++) {
  divs[i].style.border = '1px solid black';
 }

 mapDiv.style.gridTemplateRows = rowsString;
 mapDiv.style.gridTemplateColumns = colsString;
 //making ural
 for (let i = uralStart; i < uralSide + uralStart; i++) {
  for (let j = 0; j < uralSide; j++) {
   if (j === 1) {
    divs[i + j * y].lastChild.style.textAlign = 'center';
    divs[i + j * y].lastChild.innerText = uralName[i - uralStart];
   }

   divs[i + j * y].style.backgroundColor = uralColor;
   ural.push(i + j * y);
  }
 }

 for (let i = lumeStart; i < lumeSide + lumeStart; i++) {
  for (let j = 0; j < lumeSide; j++) {
   if (j === 1) {
    divs[i + j * y].lastChild.style.textAlign = 'center';
    divs[i + j * y].lastChild.innerText = lumeName[i - lumeStart];
   }
   divs[i + j * y].style.backgroundColor = lumeColor;
   lume.push(i + j * y);
  }
 }
 for (let i = lyonStart; i < lyonSide + lyonStart; i++) {
//   divs[i].lastChild.style.textAlign = 'center';
//   divs[i].lastChild.innerText = lyonName[i - lyonStart];

  divs[i].style.backgroundColor = lyonColor;
  lyon.push(i);
 }

 divs[41].lastChild.style.textAlign = 'right';
 divs[41].lastChild.innerText = 'S';
 divs[42].lastChild.style.textAlign = 'left';
 divs[42].lastChild.innerText = 'KY';

 for (let i = skyStart; i < skySide + skyStart; i++) {
  for (let j = 0; j < skySide; j++) {
   divs[i + j * y].style.backgroundColor = skyColor;
   sky.push(i);
  }
 }

 for (let i = forkStart; i < forkSide + forkStart; i++) {
  for (let j = 0; j < forkSide; j++) {
   divs[i + j * y].style.backgroundColor = forkColor;
   fork.push(i + j * y);
  }
 }
 divs[75].style.backgroundColor = forkColor;
 divs[76].style.backgroundColor = forkColor;
 for (let i = fork[1]; i < fork[1] + 4; i++) {
  divs[i].lastChild.style.textAlign = 'center';
  divs[i].lastChild.innerText = forkName[i - fork[1]];
 }

 for (let i = vollStart; i < vollSide + vollStart; i++) {
  for (let j = 0; j < vollSide; j++) {
   if (j === 2) {
    divs[i + j * y].lastChild.style.textAlign = 'center';
    divs[i + j * y].lastChild.innerText = vollName[i - vollStart];
   }
   divs[i + j * y].style.backgroundColor = vollColor;
   voll.push(i + j * y);
  }
 }
 for (let i = 1; i < grout.length; i++) {
  divs[grout[i]].style.backgroundColor = groutColor;
 }

 for (let i = 130; i < 135; i++) {
  divs[i].lastChild.style.textAlign = 'center';
  divs[i].lastChild.innerText = groutName[i - 130];
 }
 for (let i = groutStart; i < groutSide + groutStart; i++) {
  for (let j = 0; j < groutSide; j++) {
   divs[i + j * y].style.backgroundColor = groutColor;
   grout.push(i + j * y);
  }
 }
//  divs[47].lastChild.style.textAlign = 'CENTER';
//  divs[47].lastChild.innerText = 'ISLE';
 for (let i = isleStart; i < isleSide + isleStart; i++) {
  divs[i].style.backgroundColor = isleColor;
  isle.push(i);
 }

 for (let i = num - 1; i > y * (x - 1); i--) {
  divs[i].style.backgroundColor = 'black';
 }
 for (let i = y - 1; i < divs.length; i += y) {
  divs[i].style.backgroundColor = 'black';
 }
 for (let i = 0; i < y; i++) {
  divs[i].style.backgroundColor = 'black';
 }
 for (let i = y; i < num - (y - 1); i += y) {
  divs[i].style.backgroundColor = 'black';
 }

 var tempLayout = [];
 for (let i = 0; i < divs.length; i++) {
  tempLayout.push(divs[i].style.backgroundColor);
 }

 for (let i = 0; i < tempLayout.length; i++) {
  if (tempLayout[i] === tempLayout[i + 1]) {
   divs[i].style.borderRight = 'none';
   divs[i + 1].style.borderLeft = 'none';
  }
  if (tempLayout[i] === tempLayout[i + y]) {
   divs[i].style.borderBottom = 'none';
   divs[i + y].style.borderTop = 'none';
  }

  for (let i = 0; i < tempLayout.length; i++) {
   if (tempLayout[i] === '') {
    divs[i].style.backgroundColor = 'blue';
   }
  }
 }

 divs[46].lastChild.innerText = '________';
 divs[40].lastChild.innerText = '________';
 divs[91].lastChild.innerText = '________';
 divs[125].lastChild.innerText = '________';
}

function saveLayout() {
 for (let i = 0; i < divs.length; i++)
  layout.push(divs[i].style.backgroundColor);
}

function isAdjacentTo(arr1, arr2) {
 var is = false;
 for (let i = 1; i < arr1.length; i++) {
  for (let h = 1; h < arr2.length; h++) {
   if (Math.abs(arr1[i] - arr2[h]) === 1 || Math.abs(arr1[i] - arr2[h]) === y) {
    is = true;
   }
  }
 }
 return is;
}

function getRid() {
    const butDiv = document.querySelector('.button-delete');
    var child = butDiv.lastChild;
    while (child) {
        butDiv.removeChild(child);
        child = butDiv.lastChild
    }
}

