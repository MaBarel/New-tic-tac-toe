console.log("functions loaded");

function clickPressed(e){
    const block = e.target
    const XorO = turn ? O_Class : X_Class
    console.log("clicked")
    placeMark(block, XorO)

    checkWinner();
    flip();
}

function placeMark(block, XorO){
    block.classList.add(XorO)
} 

function flip(){
    turn = !turn
}

function checkWinner() {
    for (let i = 0; i < winningNumbas.length; i++) {
       const winnings = winningNumbas[i];
       const no1 = winnings[0];
       const no2 = winnings[1];
       const no3 = winnings[2];

       const check1 = blockElement[no1];
       const check2 = blockElement[no2];
       const check3 = blockElement[no3];

       console.log('new check');
       console.log(check1);
       console.log(check2);
       console.log(check3);
    
       //TODO check that check1, check2 and check3 have the sameclasses
       if(check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && check3.classList.contains(X_Class)){
        winningText.innerHTML = "X wins";
        winningMessage.classList.add("show");
       } else if(check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)){
        winningText.innerHTML = "O wins";
        winningMessage.classList.add("show")
       }
    }
   }

