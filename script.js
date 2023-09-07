console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
let msgBox = document.getElementsByClassName('message');
var stringArray = ["red", "green", "yellow", "blue"];
let i = 0;


//Initialization of game in home
let redTokenInHome = 4;
let greenTokenInHome = 4;
let yellowTokenInHome = 4;
let blueTokenInHome = 4;

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
    else if (i == 2)
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
    if (redStart)
    {
        if (i == 6)
                
    }
}

function greenTurn()
{
    if (redStart)
    {
        if (i == 6)
                
    }
}

function blueTurn()
{
    if (redStart)
    {
        if (i == 6)
                
    }
}
