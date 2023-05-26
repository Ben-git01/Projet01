function createPopup() {
  function restartGame() {
    window.location.href = "Game.html";
  }

  function exitPage() {
    window.location.href = "index.html";
  }

  let popupEndGame = document.createElement("div");
  popupEndGame.classList.add("popupEndGame");
  gameContainer.appendChild(popupEndGame);

  let popupName = document.createElement("h2");
  popupName.classList.add("popup-text");
  popupEndGame.appendChild(popupName);
  let divUser = document.querySelector(".User");
  popupName.innerHTML = divUser.innerText;

  let popupScore = document.createElement("h2");
  popupScore.classList.add("popup-text");
  popupEndGame.appendChild(popupScore);

  popupScore.innerHTML = objScore.scoreActive;

  let popupRestart = document.createElement("button");
  popupEndGame.appendChild(popupRestart);
  popupRestart.innerHTML = "Restart!";
  popupRestart.classList.add("popup-button");
  popupRestart.classList.add("restart-button");

  let popupExit = document.createElement("button");
  popupEndGame.appendChild(popupExit);
  popupExit.innerHTML = "Exit!";
  popupExit.classList.add("popup-button");
  popupExit.classList.add("exit-button");

  popupExit.addEventListener("click", exitPage);

  popupRestart.addEventListener("click", restartGame);

  // Caché le score à la fin de la partie!
  let divScore = document.getElementById("Score");
  divScore.style.visibility = "hidden";

  let divName = document.getElementById("User-text");
  divName.style.visibility = "hidden";
  //Caché le Nom à la fin de la partie!
}
