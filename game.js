let neutrals = [];
let firstSet = [];
let secondSet = [];
let starting = 10;
let playerStatus;
let init = false;
let turn = 0;
let phase = 0;
let baseUnits = 0;
let units = 0;
let firstPlayer = new Player(); 
let firstSetWithIndices = [];
let secondSetWithIndices = [];
let neutralSetWithIndices = [];





const playButton = document.querySelector('.play');
playButton.addEventListener('click', playGame);
const setupStuff = document.querySelector('.setup-info');
setupStuff.style.display = "none";
const initButton = document.querySelector(".init");
initButton.addEventListener('click', initialize);

function initialize() {
    getSets(allTerritoryNames);
    determineFirst();
    placeImages();
    setupStuff.style.display = "block";
    getRid();
}





makeMap();

divs[122].style.textAlign = "center"
divs[122].innerText = "L Y O N"
divs[30].style.textAlign = "center"
divs[30].innerText = "I S L E"


for (let i = 0; i < positions.length; i++) {

    var counter = document.createElement('p');
    counter.innerText = baseUnits;
 
    
        divs[positions[i] + 1].appendChild(counter);
    }






//  let playerOne = new Player(firstSet, starting, team);
//  let computerPlayer = new Player(secondSet, starting, team);


function getSets(arr) {
    var copyOfNames = [...arr];
    
    for (let i = copyOfNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copyOfNames[i], copyOfNames[j]] = [copyOfNames[j], copyOfNames[i]];
    }
    
    for (let i = 0; i < 2; i++) {
        
        neutrals.push(copyOfNames[i])
    }
    for (let i = 2; i < 5; i++) {
        firstSet.push(copyOfNames[i])
        
    }
    for (let i = 5; i < 8; i++) {
        secondSet.push(copyOfNames[i])
    }
    for(let i = 0; i < firstSet.length; i++) {
        for (let h = 0; h < allTerritories.length; h++) {
            if (firstSet[i] === allTerritories[h][0]) {
                firstSetWithIndices.push(allTerritories[h])
            }
        }
    }
        for (let i = 0; i < secondSet.length; i++) {
            for (let h = 0; h < allTerritories.length; h++) {
                if (secondSet[i] === allTerritories[h][0]) {
                    secondSetWithIndices.push(allTerritories[h])
                }
            }
        }

        for (let i = 0; i < neutrals.length; i++) {
            for (let h = 0; h < allTerritories.length; h++) {
                if (neutrals[i] === allTerritories[h][0]) {
                neutralSetWithIndices.push(allTerritories[h])
            }
        }
    }
    
        for (let i = 0; i < firstSetWithIndices.length; i++) {
            firstSetWithIndices[i].shift()
        }
    
    
    }
function determineFirst() {
 var r = Math.random();
 if (r < 0.5) {
  playerStatus = " first as:";
  document.querySelector('.xx').innerText += playerStatus;
  var picOne = document.createElement('img');
     picOne.src = '/imgs/soldier1.png';
     picOne.style.width = '50px';
     picOne.style.height = '50px';

  document.querySelector('.player-declaration').appendChild(picOne);
  document.querySelector('.terrDeclare').innerText += `${firstSet[0]}, ${firstSet[1]}, ${firstSet[2]} `;
  document.querySelector('.opTerrDeclare').innerText += `${secondSet[0]}, ${secondSet[1]}, ${secondSet[2]} `;
 
    
 } else {
    playerStatus = " second as:";
    document.querySelector('.xx').innerText += playerStatus;

     var picTwo = document.createElement('img');
     picTwo.src = '/imgs/soldier2.png';
     picTwo.style.width = '50px';
     picTwo.style.height = '50px';

     document.querySelector('.player-declaration').appendChild(picTwo);
    document.querySelector('.terrDeclare').innerText += `${secondSet[0]}, ${secondSet[1]}, ${secondSet[2]} `;
    document.querySelector('.opTerrDeclare').innerText += `${firstSet[0]}, ${firstSet[1]}, ${firstSet[2]} `;
    
         }
     
    
     
    document.querySelector('.neutTerrDeclare').innerText += `${neutrals[0]}, ${neutrals[1]} `
 }

 function placeImages() {
     var img;
     var secondImage;
     var neutImage;
     for (let i = 0; i < firstSet.length; i++) {
         for (let k = 0; k < whereToPlaceImages.length; k++) {
             if (firstSet[i] === whereToPlaceImages[k][0]) {
                 img = document.createElement('img');
                 img.src = '/imgs/soldier1.png';
                 img.style.width = '50px';
                 img.style.height = '50px';
                 divs[whereToPlaceImages[k][1]].appendChild(img);
             }
             
         }
     }
     for (let i = 0; i < secondSet.length; i++) {
         for (let k = 0; k < whereToPlaceImages.length; k++) {
             if (secondSet[i] === whereToPlaceImages[k][0]) {
                 secondImage = document.createElement('img');
                 secondImage.src = '/imgs/soldier2.png';
                 secondImage.style.width = '50px';
                 secondImage.style.height = '50px';
                 divs[whereToPlaceImages[k][1]].appendChild(secondImage);
             }
 }
}
     for (let i = 0; i < neutrals.length; i++) {
         for (let k = 0; k < whereToPlaceImages.length; k++) {
             if (neutrals[i] === whereToPlaceImages[k][0]) {
                 neutImage = document.createElement('img');
                 neutImage.src = '/imgs/duck.png';
                 neutImage.style.width = '50px';
                 neutImage.style.height = '50px';
                 divs[whereToPlaceImages[k][1]].appendChild(neutImage);
             }
         }
     }
 }


function playGame() {
    setupStuff.style.display = "none";
    turn++;
    phase++;
    
    const doneAddingButton = document.createElement('button');
    doneAddingButton.innerText = "Done Adding?"; 
    
    
    const interface = document.querySelector('.interface');
    const info = document.createElement('h2');
    info.innerText = `Turn: ${turn} \n Phase: ${phase}`;
    interface.appendChild(info);
    interface.appendChild(doneAddingButton);
    
    doneAddingButton.addEventListener('click', toPhaseTwo)

    function toPhaseTwo() {
        phase++;
        info.innerText = `Turn: ${turn} \n Phase: ${phase}`;
        firstPlayer.units = units;
        clearAddingButtons();
        clearAddingButton();
        


    }
    function clearAddingButtons() {
        for (let i = 0; i < firstSet.length; i++) {
            for (let h = 0; h < whereToPlaceImages.length; h++) {
                if (firstSet[i] === whereToPlaceImages[h][0]) {
                    divs[whereToPlaceImages[h][1] + 1].removeChild(divs[whereToPlaceImages[h][1] + 1].lastElementChild);
                      }
            }
        }
}
    function clearAddingButton() {
        interface.removeChild(interface.lastChild)
    }
    

    
    let playerOne = new Player(baseUnits, firstSet);
    for (let i = 0; i < firstSet.length; i++) {
        for (let h = 0; h < whereToPlaceImages.length; h++) {
            if (firstSet[i] === whereToPlaceImages[h][0]) {
                var addUnits = document.createElement('button');
                addUnits.innerText = "+"
                addUnits.style.height = "7px"
                divs[whereToPlaceImages[h][1] + 1].appendChild(addUnits);
                addUnits.addEventListener('click', reinforce)
                
                
            }
        }
    }

}
 function reinforce(evt) {
     
     console.log(evt);
     
     var currentValue = parseInt(evt.target.previousSibling.innerText);
     currentValue += 1;
     evt.target.previousSibling.innerText = currentValue;
     units += 1;

 }
