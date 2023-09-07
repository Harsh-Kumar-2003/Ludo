console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
var stringArray = ["red", "green", "yellow", "blue"];
let i = 0;


let redStart = true;
let yellowStart = true;
let greenStart = true;
let blueStart = true;

let result=0;

//Generating a random number
function rollDice() {
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 6) + 1;
    return randomNumber;
}

// Add an event listener to the dice button (Rolling the dice)
diceButton.addEventListener('click', () => {
    result = rollDice();
    diceButton.innerText = result;
    diceButton.style.backgroundColor = stringArray[i];

    if (i == 0)
        redTurn();
    else if (i == 1)
        greenTurn();
    else if (i == 3)
        yellowTurn();
    else
        blueTurn();

    if( result != 6)
        i = (i + 1) % 4;


});

function redTurn()
{
    if (redStart)
    {
        if (i == 6)
                
    }
}

function yellowTurn()
{

}

function greenTurn()
{

}

function blueTurn()
{

}
