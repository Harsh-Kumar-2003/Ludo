console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
var stringArray = ["red", "green", "yellow", "blue"];
let i = 0;

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