

function createPopup() {

    console.log("je suis la")
    function restartGame() {
        window.location.href = "Game.html";
    }

    function exitPage() {
        window.location.href = "index.html";
    }

    const popupEndGame = document.createElement("div");
    popupEndGame.classList.add("popupEndGame");
    gameContainer.appendChild(popupEndGame);

    const popupName = document.createElement("h2");
    popupEndGame.appendChild(popupName);
    popupName.innerHTML = settings.user;

    const popupScore = document.createElement("h2");
    popupEndGame.appendChild(popupScore);
    popupScore.innerHTML = objScore.scoreActive;

    const popupExit = document.createElement("button");
    popupEndGame.appendChild(popupExit);
    popupExit.innerHTML = "Exit!";
    popupExit.classList.add("popup-button");
    popupExit.classList.add("exit-button");

    const popupRestart = document.createElement("button");
    popupEndGame.appendChild(popupRestart);
    popupRestart.innerHTML = "Restart!";
    popupRestart.classList.add("popup-button");
    popupRestart.classList.add("restart-button");




    popupExit.addEventListener('click', exitPage);

    popupRestart.addEventListener('click', restartGame);
    divScore.style.visibility = "hidden";
};

