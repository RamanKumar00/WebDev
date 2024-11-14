let gameNum = 25;
let userNum = prompt("guess the number: ");

while(userNum != gameNum)
{
    userNum = prompt("you guess the wrong number !try again");
}

console.log("congratulation! you won the game");