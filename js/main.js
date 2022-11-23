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
//click function
blockElement.forEach(block =>{
    block.addEventListener('click', clickPressed, { once: true})
});

restartButton.addEventListener("click", pressed);

function pressed(){
    location.reload();
}


