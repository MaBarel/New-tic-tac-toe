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
const playerOne = document.querySelector(".player1");
const playerTwo = document.querySelector(".player2");
const pointBox1 = document.querySelector(".pointx");
const pointBox2 = document.querySelector(".pointo");
const saveButton = document.querySelector(".savebutton")
const removeSaveButton = document.querySelector(".removesavebutton")
let scoreBoardO = 0;
let scoreBoardX = 0;
let counter = 0;
let Xhistory = localStorage.getItem('Xpoints');
let Ohistory = localStorage.getItem('Opoints');
let turn;
if (isNaN(parseInt(Xhistory))) {
    Xhistory = 0;
}
if (isNaN(parseInt(Ohistory))) {
    Ohistory = 0;
}
//Start game
startGame();
saveButton.addEventListener("click", saved)
removeSaveButton.addEventListener("click", removed)
restartButton.addEventListener("click", pressed);
pointBox1.innerHTML = "X points " + parseInt(Xhistory);
pointBox2.innerHTML = "O points " + parseInt(Ohistory);



