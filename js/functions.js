console.log("functions loaded");
function startGame(){ //this function starts the game later used to restart the game
    blockElement.forEach(block =>{
        block.classList.remove("blocko");
        block.classList.remove("blockx");
        block.removeEventListener("click", clickPressed);
        counter = 0
        winLock = 0
        block.addEventListener('click', clickPressed, { once: true});
    });
    winningMessage.classList.remove("show");
}
//this is each individual block click
function clickPressed(e){
    const block = e.target;
    const XorO = turn ? O_Class : X_Class;
    console.log("clicked");
    placeMark(block, XorO);
    checkWinner();
    DrawCheck();
    flip();
    console.log(counter)
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
       if(check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && check3.classList.contains(X_Class)){
        winningText.innerHTML = localStorage.getItem("playerone") +  " wins";
        winningMessage.classList.add("show");
        scoreBoardX = scoreBoardX + 1;
        winLock = 1;
        localStorage.setItem("Xpoints", scoreBoardX)
        if (isNaN(parseInt(scoreBoardO))) {
           scoreBoardO = 0;};
        pointBox1.innerHTML = "X points " + scoreBoardX;
        pointBox2.innerHTML = "O points " + scoreBoardO;
        } else if(check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)){
        winningText.innerHTML = localStorage.getItem("playertwo") + " wins";
        winningMessage.classList.add("show")
        scoreBoardO = scoreBoardO + 1;
        winLock = 1;
        localStorage.setItem("Opoints", scoreBoardO)
        if (isNaN(parseInt(scoreBoardX))) {
            scoreBoardX = 0;};
        pointBox2.innerHTML = "O points " + scoreBoardO;
        pointBox1.innerHTML = "X points " + scoreBoardX;
       }
    }
   }
//overige buttons
function pressed(){
    startGame();
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
