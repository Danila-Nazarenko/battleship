var view={
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML=msg;
    },
    displayHit: function(location){
        var cell= document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function(location){
        var cell= document.getElementById(location);
        cell.setAttribute("class","miss");
    }
};

var model ={
    boardship:7,
    numShips:3,
    shipLength:3,
    shipsSunk:0,
    ships:[
        {locations: ["10","20","30"], hits:["","",""]},
        {locations: ["54","55","56"], hits:["","",""]},
        {locations: ["62","63","64"], hits:["","hit",""]},
    ],
    fire: function(guess) {
        for (var i=0; i<this.numShips;i++){
            var ship = this.ships[i];
            var locations=ship.locations;
            var index = ship.locations.indexOf(guess);
            if (index>=0) {
                ship.hits[index]="hit";
                view.displayHit(guess);
                view.displayMessage('HIT');
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
                
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed")
        return false
    },
    isSunk: function(ship){
        for (var i = 0; i < this.shipLength;  i++) {
            if (ship.hits[i] !=="hit") {
                return false;
            }
        }
        return true;
    }
}


var controller ={
    guesses:0,
    parseGuess: function(guess){
        var alphabet =["A","B","C","D","E","F","G"];
        if (guess===null || guess.length!==2) {
            alert("Oops, please enter a letter and a number on the board.");
        } else{
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);
            if (isNaN(row)||isNaN(column)) {
                alert("Oops, thst isn't on the board")
            }else if (row<0 || row>=model.boardSize|| column<0 || column>=model.boardSize) {
                alert("Oops, that's off the board")
            } else{
                return row+column;
            }
        return null
        }
    }
};

console.log(controller.parseGuess("A0"))


