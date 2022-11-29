console.log("main loaded");
//variables
const X_Class = "blockx";
const O_Class = "blocko";
const winningNumbas = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const winningText = document.querySelector(".winningText");
const winningMessage = document.querySelector(".winningMessage")
const blockElement = document.querySelectorAll('.block');
const restartButton = document.querySelector(".winningMessagebutton")
let turn;
const playerOne = document.querySelector(".player1");
const playerTwo = document.querySelector(".player2");
const pointBox1 = document.querySelector(".pointx");
const pointBox2 = document.querySelector(".pointo");
let scoreBoardO = 0
let scoreBoardX = 0


//click function
startGame();
restartButton.addEventListener("click", pressed);

pointBox1.innerHTML = "X points " + scoreBoardX;
pointBox2.innerHTML = "O points " + scoreBoardO;



