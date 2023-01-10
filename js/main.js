console.log("main loaded");
//variables
const X_Class = "blockx";
const O_Class = "blocko";
const winningNumbas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const winningText = document.querySelector(".winningText");
const winningText2 = document.querySelector(".winningTexttwo")
const winningMessage = document.querySelector(".winningMessage")
const winningMessage2 = document.querySelector("#winningpve")
const blockElement = document.querySelectorAll('.block');
const restartButton = document.querySelector(".winningMessagebutton")
const restartButton2 = document.querySelector(".winningMessagebuttontwo")
const playerOne = document.querySelector(".player1");
const playerTwo = document.querySelector(".player2");
const pointBox1 = document.querySelector(".pointx");
const pointBox2 = document.querySelector(".pointo");
const saveButton = document.querySelector(".savebutton");
const removeSaveButton = document.querySelector(".removesavebutton");
const startpvp = document.querySelector(".startpvp");
const startpve = document.querySelector(".startpve");
const startscreen = document.querySelector("#startmessage");
let Xhistory = localStorage.getItem('Xpoints');
let Ohistory = localStorage.getItem('Opoints');
let playerHistory = localStorage.getItem("playerpoints");
let botHistory = localStorage.getItem("botpoints");
let counter = 0;
let winLock = 0;
let scoreBoardO = 0;
let scoreBoardX = 0;
let scoreBoardP = 0;
let scoreBoardB = 0;
let turn;
let oWin = false;
let xWin = false;
let botWin = false;
let playerWin = false;
let lock = false;
let rdmBotPacement = true;
if (localStorage.getItem("playerone") === null) {
    localStorage.setItem("playerone", "Player X")
}
if (localStorage.getItem("playertwo") === null) {
    localStorage.setItem("playertwo", "Player O")
}
if (Ohistory === null) {
    Ohistory = 0;
}
if (Xhistory === null) {
    Xhistory = 0;
}
if (playerHistory === null) {
    playerHistory = 0;
}
if (botHistory === null) {
    botHistory = 0;
}

scoreBoardX = parseInt(Xhistory);
scoreBoardO = parseInt(Ohistory);
scoreBoardP = parseInt(playerHistory);
scoreBoardB = parseInt(botHistory);
//buttons and also start game function
startscreen.classList.add("show");
startpvp.addEventListener("click", started);
startpve.addEventListener("click", started2);
saveButton.addEventListener("click", saved);
removeSaveButton.addEventListener("click", removed);
restartButton.addEventListener("click", pressed);
restartButton2.addEventListener("click", triggerd);
console.log(localStorage.getItem("Xpoints"));


