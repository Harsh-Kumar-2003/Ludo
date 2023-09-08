console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
let msgBox = document.getElementById('message');
var player = ["red", "green", "yellow", "blue"];
let i = 0;

//Player turn 
function startGame() {
    msgBox.innerText = "RED start the game";
}

//Generating a random number
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceButton.innerText = randomNumber;
    diceButton.style.backgroundColor = player[i];

    if (randomNumber != 6) {
        i = (i + 1) % 4;
        
    }
    msgBox.innerText = player[i].toUpperCase() + " roll the dice!";
}

// Add an event listener to the dice button (Rolling the dice)
diceButton.addEventListener('click', () => {
    rollDice();

    //Changing turns

});

window.onload = startGame;

//Whole projecrt made by Harsh Kumar
//sumer bs dekha h