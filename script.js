// Get the element by its ID
var diceButton = document.getElementById("dice");
let countColor = 0;
// Add a click event listener to the element
diceButton.addEventListener("click", function() {
  // Change the background color when the element is clicked
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 6) + 1;
    diceButton.innerText = randomNumber;
    if (randomNumber != 6){
        
    if (countColor == 0) {
        countColor++;
        diceButton.style.backgroundColor = "green";
    }
    else if (countColor == 1)
    {
        countColor++;
        diceButton.style.backgroundColor = "yellow";
    }
    else if (countColor == 2)
    {
        countColor++;
        diceButton.style.backgroundColor = "blue";
    }
    else
    {
        countColor=0;
        diceButton.style.backgroundColor = "red";
        }
    }
});
