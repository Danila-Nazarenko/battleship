const location1= Math.floor(Math.random() * 5);
const location2 = location1 + 1;
const location3 = location1 + 2;

let guess;
let guesses = 0;
let hit = 0;
let isSunk = false;

while (isSunk === false) {
    guess=prompt("Ready, aim, fire!(enter number 0-6):");
    if (guess<0 || guess>6){
        alert("please enter a valid number");
    } else {
        guesses = guesses + 1
    }
    if (guess == location1 || guess == location2 || guess == location3) {
        hit = hit + 1;
        alert("HIT!");
        if (hit === 3){
            isSunk = true;
            alert("You sunk my ship");
        }
    } else {
        alert("miss!");
    }

}
let stats = "You took " + guesses + " guesses to sunk the ship, " +
    "which means your shooting accuracy was "+(3/guesses);
alert(stats)