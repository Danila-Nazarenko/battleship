const location1= Math.floor(Math.random() * 5);
const location2 = location1 + 1;
const location3 = location1 + 2;
let hitlocation1=false
let hitlocation2=false
let hitlocation3=false
let guess;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
    guess=prompt("Ready, aim, fire!(enter number 0-6):");
    if (guess<0 || guess>6){
        alert("please enter a valid number");
    } else {
        guesses = guesses + 1
    }
    if (guess == location1){
        hitlocation1=true;
        alert("HIT!");
    } else if (guess == location2){
        hitlocation2=true;
        alert("HIT!");
    } else if (guess == location3){
        hitlocation3=true;
        alert("HIT!");
    }else {
        alert("miss!");
    }
    if ( hitlocation1 == true && hitlocation2 == true && hitlocation3 == true){
        isSunk = true;
        alert("You sunk my ship");
    }
}
let stats = "You took " + guesses + " guesses to sunk the ship, " +
    "which means your shooting accuracy was "+(3/guesses);
alert(stats)