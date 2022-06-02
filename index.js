
function getDiceNumber(query){
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var src = "images/dice";
    document.querySelector(query).setAttribute("src", src + randomNumber + ".png");
    return randomNumber;
}

var playerOne = getDiceNumber(".img1");
var playerTwo = getDiceNumber(".img2");

if(playerOne > playerTwo){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(playerOne < playerTwo){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}

