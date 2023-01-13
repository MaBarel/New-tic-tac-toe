console.log("functions loaded");
function startGame2() {//this function starts pve mode
    blockElement.forEach(block => {
        block.classList.remove("highlight");
        playerWin = false;
        botWin = false;
        block.classList.remove("blocko");
        block.classList.remove("blockx");
        block.removeEventListener("click", clickPressed2);
        counter = 0;
        winLock = 0;
        block.addEventListener('click', clickPressed2, { once: true });
    });
    winningMessage2.classList.remove("show");
    pointBox1.innerHTML = "Player: " + scoreBoardP;
    pointBox2.innerHTML = "Bot:    " + scoreBoardB;
}
function startGame() { //this function starts the game in pvp mode
    blockElement.forEach(block => {
        block.classList.remove("highlight");
        oWin = false;
        xWin = false;
        block.classList.remove("blocko");
        block.classList.remove("blockx");
        block.removeEventListener("click", clickPressed);
        counter = 0
        winLock = 0
        block.addEventListener('click', clickPressed, { once: true });
    });
    winningMessage.classList.remove("show");
    pointBox1.innerHTML = "X points " + parseInt(scoreBoardX);
    pointBox2.innerHTML = "O points " + parseInt(scoreBoardO);
}
//this is each individual block click for pvp
function clickPressed(e) {
    const block = e.target;
    const XorO = turn ? O_Class : X_Class;
    console.log("clicked");
    placeMark(block, XorO);
    checkWinner();
    DrawCheck();
    flip();
}
//this is each individual block click for pve
function clickPressed2(e) {
    const block = e.target;
    const XorO = X_Class;
    console.log("clicked");
    placeMark(block, XorO);
    checkWinner2();
    DrawCheck2();
    bot();
}
//this function adds the X/O
function placeMark(block, XorO) {
    block.classList.add(XorO)
}
//this function switches the X/O
function flip() {
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
            winningText.innerHTML = localStorage.getItem("playerone") + " wins";
            winningMessage.classList.add("show");
            xWin = true;
            winLock = 1;
            check1.classList.add("highlight")
            check2.classList.add("highlight")
            check3.classList.add("highlight")
        } else if (check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)) {
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
    if (oWin === true) {
        scoreBoardO = scoreBoardO + 1;
        localStorage.setItem("Opoints", scoreBoardO)

        if (isNaN(parseInt(scoreBoardX))) {
            scoreBoardX = 0;
        };
        pointBox2.innerHTML = "O points " + scoreBoardO;
        pointBox1.innerHTML = "X points " + scoreBoardX;
    } else if (xWin === true) {
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
        console.log("checked")
        //check that check1, check2 and check3 have the sameclasses
        if (check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && check3.classList.contains(X_Class)) {
            winningText2.innerHTML = "You Win";
            winningMessage2.classList.add("show");
            playerWin = true;
            winLock = 1;
            check1.classList.add("highlight");
            check2.classList.add("highlight");
            check3.classList.add("highlight");
        }
    }
    if (playerWin === true) {
        scoreBoardP = scoreBoardP + 1;
        localStorage.setItem("playerpoints", scoreBoardP);
        if (isNaN(parseInt(scoreBoardB))) { scoreBoardB = 0; };
        pointBox1.innerHTML = "Player: " + scoreBoardP;
        pointBox2.innerHTML = "Bot: ", + scoreBoardB;
    }
}
//this is the bot function 
function bot() {
    for (let i = 0; i < winningNumbas.length; i++) {
        const winnings = winningNumbas[i];
        const no1 = winnings[0];
        const no2 = winnings[1];
        const no3 = winnings[2];

        const check1 = blockElement[no1];
        const check2 = blockElement[no2];
        const check3 = blockElement[no3];

        if (check3.classList.contains(O_Class) && check2.classList.contains(O_Class) && lock === false &&
            !check1.classList.contains(X_Class) && !check1.classList.contains(O_Class)) {
            check1.classList.add(O_Class);
            check1.removeEventListener("click", clickPressed2);
            lock = true;
        } else if (check1.classList.contains(O_Class) && check3.classList.contains(O_Class) && lock === false &&
            !check2.classList.contains(X_Class) && !check2.classList.contains(O_Class)) {
            check2.classList.add(O_Class);
            check2.removeEventListener("click", clickPressed2);
            lock = true;
        } else if (check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && lock === false &&
            !check3.classList.contains(X_Class) && !check3.classList.contains(O_Class)) {
            check3.classList.add(O_Class);
            check3.removeEventListener("click", clickPressed2);
            lock = true;
        } 
    }
    for (let i = 0; i < winningNumbas.length; i++) {
        const winnings = winningNumbas[i];
        const no1 = winnings[0];
        const no2 = winnings[1];
        const no3 = winnings[2];

        const check1 = blockElement[no1];
        const check2 = blockElement[no2];
        const check3 = blockElement[no3];

        if (check3.classList.contains(X_Class) && check2.classList.contains(X_Class) && lock === false &&
            !check1.classList.contains(X_Class) && !check1.classList.contains(O_Class)) {
            check1.classList.add(O_Class);
            check1.removeEventListener("click", clickPressed2);
            lock = true;
        } else if (check1.classList.contains(X_Class) && check3.classList.contains(X_Class) && lock === false &&
            !check2.classList.contains(X_Class) && !check2.classList.contains(O_Class)) {
            check2.classList.add(O_Class);
            check2.removeEventListener("click", clickPressed2);
            lock = true;
        } else if (check1.classList.contains(X_Class) && check2.classList.contains(X_Class) && lock === false &&
            !check3.classList.contains(X_Class) && !check3.classList.contains(O_Class)) {
            check3.classList.add(O_Class);
            check3.removeEventListener("click", clickPressed2);
            lock = true;
        }

        if (check1.classList.contains(O_Class) && check2.classList.contains(O_Class) && check3.classList.contains(O_Class)) {
            winningText2.innerHTML = "Computer" + " wins";
            winningMessage2.classList.add("show")
            botWin = true;
            winLock = 1;
            check1.classList.add("highlight");
            check2.classList.add("highlight");
            check3.classList.add("highlight");
        }
        console.log(blockElement)
    }
    if (lock === false) {
        randombot();
        lock = true
    }
    lock = false;
    console.log(lock)
    if (botWin === true) {
        scoreBoardB = scoreBoardB + 1;
        localStorage.setItem("botpoints", scoreBoardB);
        if (isNaN(parseInt(scoreBoardP))) { scoreBoardP = 0; };
        pointBox1.innerHTML = "Player: " + scoreBoardP;
        pointBox2.innerHTML = "Bot: " + scoreBoardB;
    }
}
//overige buttons
function pressed() {
    startGame();
}
function triggerd() {
    startGame2();
}
function started() {
    startGame();
    startscreen.classList.remove("show");
}
function started2() {
    startGame2();
    startscreen.classList.remove("show");
}
function saved() {
    localStorage.setItem('playerone', playerOne.value);
    localStorage.setItem('playertwo', playerTwo.value);
}
function removed() {
    localStorage.clear();
    location.reload();
}
function DrawCheck() {
    counter = counter + 1;
    console.log(winLock)
    if (counter === 9 && winLock === 0) { // if all 9 have been pressed it counts up
        winningText.innerHTML = "Draw";
        winningMessage.classList.add("show")
        console.log(winLock)
    }
}
function DrawCheck2() {
    counter = counter + 1;
    console.log(winLock)
    if (counter === 5 && winLock === 0) { // if all 5 have been pressed it counts up
        winningText2.innerHTML = "Draw";
        winningMessage2.classList.add("show")
        console.log(winLock)
    }
}
function randombot() {
    let num = Math.floor(Math.random() * 8);
    if (!blockElement[num].classList.contains(X_Class) && !blockElement[num].classList.contains(O_Class)) {
        blockElement[num].classList.add(O_Class);
        blockElement[num].removeEventListener("click", clickPressed2);
    } else if (blockElement[num].classList.contains(X_Class) || blockElement[num].classList.contains(O_Class)) {
        randombot();
    }
}
