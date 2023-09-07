console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
let msgBox = document.getElementsByClassName('message');
var stringArray = ["red", "green", "yellow", "blue"];
let i = 0;

//Player turn 
function startGame() {
    if (diceButton.style.backgroundColor == blueviolet) {
        msgBox.innerText = "Press roll to start the game";

    }
}

//Generating a random number
function rollDice() {
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 6) + 1;
    return randomNumber;
}

// Add an event listener to the dice button (Rolling the dice)
diceButton.addEventListener('click', () => {
    const result = rollDice();
    diceButton.innerText = result;
    diceButton.style.backgroundColor = stringArray[i];
    i = (i + 1) % 4;
});