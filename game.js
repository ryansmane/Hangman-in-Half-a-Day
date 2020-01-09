let neutrals = [];
let firstSet = [];
let secondSet = [];
let starting = 10;
let playerStatus;
init = true;

makeMap();

if (init) {
    

    getSets(allTerritoryNames);
    console.log(neutrals)
    console.log(firstSet)
    console.log(secondSet)
 
 determineFirst();

//  let playerOne = new Player(firstSet, starting, team);
//  let computerPlayer = new Player(secondSet, starting, team);
}

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
    
    
    }
function determineFirst() {
 var r = Math.random();
 if (r < 0.5) {
  playerStatus = " first as:";
  document.querySelector('.xx').innerText += playerStatus;
  document.querySelector('.player-declaration').appendChild(sprites[1]);
  
     document.querySelector('.terrDeclare').innerText += `${firstSet[0]}, ${firstSet[1]}, ${firstSet[2]} `;
      document.querySelector('.opTerrDeclare').innerText += `${secondSet[0]}, ${secondSet[1]}, ${secondSet[2]} `;
      
  
    
 } else {
        playerStatus = " second as:";
        document.querySelector('.xx').innerText += playerStatus;

        document.querySelector('.player-declaration').appendChild(sprites[0]);
        document.querySelector('.terrDeclare').innerText += `${secondSet[0]}, ${secondSet[1]}, ${secondSet[2]} `;
     document.querySelector('.opTerrDeclare').innerText += `${firstSet[0]}, ${firstSet[1]}, ${firstSet[2]} `;
    }
     
    document.querySelector('.neutTerrDeclare').innerText += `${neutrals[0]}, ${neutrals[1]} `
 }

let f = ["a", "b", "c", "d"];
shuffleArray(f);
console.log(f)


