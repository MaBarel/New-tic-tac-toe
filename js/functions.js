console.log("functions loaded");
function startGame2(){//this function starts pve mode
    blockElement.forEach(block =>{
        playerWin = false;
        botWin = false;
        block.classList.remove("blocko");
        block.classList.remove("blockx");
        block.removeEventListener("click", clickPressed2);
        counter = 0;
        winLock = 0;
        block.addEventListener('click', clickPressed2, { once: true});
    });
    winningMessage2.classList.remove("show");
    pointBox1.innerHTML = "Player: " 
    pointBox2.innerHTML = "bot:    "
}
function startGame(){ //this function starts the game in pvp mode
    blockElement.forEach(block =>{
        block.classList.remove("highlight");
        oWin = false;
        xWin = false;
        block.classList.remove("blocko");
        block.classList.remove("blockx");
        block.removeEventListener("click", clickPressed);
        counter = 0
        winLock = 0
        block.addEventListener('click', clickPressed, { once: true});
    });
    winningMessage.classList.remove("show");
    pointBox1.innerHTML = "X points " + parseInt(scoreBoardX);
    pointBox2.innerHTML = "O points " + parseInt(scoreBoardO);
}
//this is each individual block click for pvp
function clickPressed(e){
    const block = e.target;
    const XorO = turn ? O_Class : X_Class;
    console.log("clicked");
    placeMark(block, XorO);
    checkWinner();
    DrawCheck();
    flip();
}
//this is each individual block click for pve
function clickPressed2(e){
    const block = e.target;
    const XorO = X_Class;
    console.log("clicked");
    placeMark(block, XorO);
    bot();
    checkWinner2();
    DrawCheck();
}
//this function adds the X/O
function placeMark(block, XorO){
    block.classList.add(XorO)
} 
//this function switches the X/O
function flip(){
    turn = !turn
}
//this fucntion checks for winners using a array
function checkWinner() {
    for (let i = 0; i < winningNumbas.length; i++) {
       const winnings = winningNumbas[i];
       const no1 = winnings[0];
       const no2 = winnings[1];
       const no3 = winnings[2];

       const check1 = blockElement[no1];
       const check2 = blockElement[no2];
       const check3 = blockElement[no3];

       //check that check1, check2 and check3 have the sameclasses
       if (check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && check3.classList.contains(X_Class)) {
            winningText.innerHTML = localStorage.getItem("playerone") +  " wins";
            winningMessage.classList.add("show");
            xWin = true;
            winLock = 1;
            check1.classList.add("highlight")
            check2.classList.add("highlight")
            check3.classList.add("highlight")
        } else if (check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)){
            winningText.innerHTML = localStorage.getItem("playertwo") + " wins";
            winningMessage.classList.add("show")
            oWin = true;
            winLock = 1;
            check1.classList.add("highlight")
            check2.classList.add("highlight")
            check3.classList.add("highlight")
        }
    }
    console.log(oWin)
    if(oWin === true){
        scoreBoardO = scoreBoardO + 1;
        localStorage.setItem("Opoints", scoreBoardO)
            
            if (isNaN(parseInt(scoreBoardX))) {
                scoreBoardX = 0;
            };
        pointBox2.innerHTML = "O points " + scoreBoardO;
        pointBox1.innerHTML = "X points " + scoreBoardX;
    } else if(xWin === true){
        scoreBoardX = scoreBoardX + 1;
        localStorage.setItem("Xpoints", scoreBoardX);

            if (isNaN(scoreBoardO)) {
                scoreBoardO = 0;
            };
        pointBox1.innerHTML = "X points " + scoreBoardX;
        pointBox2.innerHTML = "O points " + scoreBoardO;
    }
}
//this is the winning check for the pve version
function checkWinner2() {
    for (let i = 0; i < winningNumbas.length; i++) {
       const winnings = winningNumbas[i];
       const no1 = winnings[0];
       const no2 = winnings[1];
       const no3 = winnings[2];

       const check1 = blockElement[no1];
       const check2 = blockElement[no2];
       const check3 = blockElement[no3];

       //check that check1, check2 and check3 have the sameclasses
       if (check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && check3.classList.contains(X_Class)) {
            winningText2.innerHTML = "You Win";
            winningMessage2.classList.add("show");
            playerWin = true;
            winLock = 1;
            check1.classList.add("highlight")
            check2.classList.add("highlight")
            check3.classList.add("highlight")
        } else if (check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)){
            winningText2.innerHTML = "Computer" + " wins";
            winningMessage2.classList.add("show")
            botWin = true;
            winLock = 1;
            check1.classList.add("highlight")
            check2.classList.add("highlight")
            check3.classList.add("highlight")
        }
    }
    if (botWin === true){

    } else if(playerWin === true){
        
    }
}
//this is the bot function 
function bot(){

}
//overige buttons
function pressed(){
    startGame();
}
function triggerd(){
    startGame2();
}
function started(){
    startGame();
    startscreen.classList.remove("show");
}
function started2(){
    startGame2();
    startscreen.classList.remove("show");
}
function saved(){
    localStorage.setItem('playerone', playerOne.value);
    localStorage.setItem('playertwo', playerTwo.value);
}
function removed(){
    localStorage.clear();
    location.reload();
}
function DrawCheck(){
    counter = counter + 1;
    console.log(winLock)
    if(counter === 9 && winLock === 0){ // if all 9 have been pressed it counts up
        winningText.innerHTML = "Draw";
        winningMessage.classList.add("show")
        console.log(winLock)
    }
}
