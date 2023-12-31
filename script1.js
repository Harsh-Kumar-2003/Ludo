console.log("Welcome Lodu!");
let diceButton = document.getElementById('dice');
let msgBox = document.getElementById('message');
var player = ["red", "green", "yellow", "blue"];
let i = 0;

//Variables for red movement
let red1 = -1, red2 = -1, red3 = -1, red4 = 0;
let redAtHome = 4;

//Variables for green movement
let green1 = -1, green2 = -1, green3 = -1, green4 = -1;
let greenAtHome = 4;

//Variables for yellow movement
let yellow1 = -1, yellow2 = -1, yellow3 = -1, yellow4 = -1;
let yellowAtHome = 4;

//Variables for blue movement
let blue1 = -1, blue2 = -1, blue3 = -1, blue4 = -1;
let blueAtHome = 4;

//Arrays to move tokens
var redPath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56'];

var greenPath = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '72', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '57', '58', '59', '60', '61'];

var yellowPath = ['27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '72', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '62', '63', '64', '65', '66'];

var bluePath = ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '72', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '67', '68', '69', '70', '71'];


//Player turn 
function startGame() {
    msgBox.innerText = "RED start the game";
}

//Generating a random number
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceButton.innerText = randomNumber;
    diceButton.style.backgroundColor = player[i];

    playerMove(i % 4, randomNumber);

    if (randomNumber != 6) {
        i = (i + 1) % 4;
    }
    msgBox.innerText = player[i].toUpperCase() + " roll the dice!";
}


// Add an event listener to the dice button (Rolling the dice)
diceButton.addEventListener('click', () => {
    rollDice();
});

//Movement for the current player
function playerMove(index, numberOnDice) {
    if (index == 0) redMove(numberOnDice);
    //else if (index == 1) greenMove(numberOnDice);
    //else if (index == 2) yellowMove(numberOnDice);
    //else blueMove(numberOnDice);
}

//Functions to move tokens of every color
function redMove(move) {
    // if (red1 + move < 56) {

    // }
    // if (move != 6 && redAtHome == 4) continue;

    if ((red4 + move) <= 56) {
        if ((move == 6) && (redAtHome == 4)) {
            let token = document.getElementsByClassName('R4')[0];
            token.classList.remove('r4');
            red4 = 0;
            let temp = document.getElementsByClassName('1')[0];
            temp.classList.add('r4');
            redAtHome--;
        }
        else if (redAtHome == 3) {
            console.log(redPath[red4]);
            let token = document.getElementsByClassName('r4')[0];
            token.classList.remove('r4');
            red4 = red4 + move;
            let temp = document.getElementsByClassName(redPath[red4])[0];
            temp.classList.add('r4');
        }
    }
};
window.onload = startGame;

//Whole projecrt made by Harsh Kumar
//sumer bs dekha h