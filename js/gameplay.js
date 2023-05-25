/* ====================================================== */
/*                      GAMEPLAY                          */
/* ====================================================== */
let partieEnCours = false;
/* LANCEMENT DU JEU  */
/* - - - - - - - - - */

/*Run -> utilisateur rentre user + difficulté
/*Execute startGame()
/ù
/* -> initialisation param via gameInit() dans settings.js
/* -> startLoop() 
/*    Définition du temps de jeu et appel de GenRandom toutes les x/secondes
/*      ->genRandom() 
          Generation random affichage poulet
/*         Lancement de jeu après décompte     */

const startGame = () => {
  let settingsJSON2 = sessionStorage.getItem("Parametres");

  // Conversion de la chaîne JSON en objet JavaScript
  let settingsLocal = JSON.parse(settingsJSON2);
  console.log("Session : " + settingsLocal.user);
  //On initialise les réglages (difficulté, nom user...)
  gameInit(settingsLocal);

  //On rentre dans la loop de jeu
  startLoop(settingsLocal);
};

/* ~~~~~~~~~~~~~~~~~~~ */
/*  => START  LOOP     */
/* ~~~~~~~~~~~~~~~~~~~ */

function startLoop() {
  let fondSonore = document.createElement("audio");
  fondSonore.src = "../assets/sound/fond-sonoreEnerve.mp3";
  fondSonore.play();

  partieEnCours = true;
  //Définition d'un timer d'interval
  //Il va executer la fonction genRandom tous les delayGen (500ms par exemple)
  const timerInterval = setInterval(genRandom, settings.delayGen);

  //On définit un temps de jeu global, pour lequel on arretera le timer precedent et on arretera le jeu.
  //On renvoit vers page de score
  setTimeout(function () {
    clearInterval(timerInterval);
    console.log("Jeu terminé");

    //Affichage score, bp page score, Rejouer
    // AffichageFinPartie();

    let myAudio = document.createElement("audio");
    myAudio.src = "../assets/sound/wow-113128.mp3";
    myAudio.play();
    partieEnCours = false;
    //Sauvegarde du score
    sauvegarderPartie(settings.user, settings.difficulty, objScore.scoreActive);
  }, settings.dureeJeu);
}

/* ~~~~~~~~~~~~~~~~~~~ */
/*   RANDOM  CHICKEN   */
/* ~~~~~~~~~~~~~~~~~~~ */

const genRandom = () => {
  // Génération random d'un numéro de poule
  let numDivRandom = Math.floor(Math.random() * settings.nbrePoulets);
  const Poulets = document.querySelectorAll(".Layer-Box img");

  // On vérifie qu'il n'y ai pas d'animation en cours sur ce poulet
  // pour ne pas creer un deuxième eventListenner par dessus
  if (TabAnimPouletEnCours[numDivRandom] == true) {
    console.log("Poulet" + numDivRandom + " déjà actif");
    return;
  } else {
    console.log("Poulet qui entre en anim : " + numDivRandom);

    let trollRandom = Math.floor(Math.random() * 5);

    //Récupération dans PouletsRandom la div poulet du bon index
    const PouletsRandom = Poulets[numDivRandom];

    TabAnimPouletEnCours[numDivRandom] = true;

    PouletsRandom.style.visibility = "visible";
    PouletsRandom.classList.add("poulet-Montee");

    timerPoulets[numDivRandom] = setTimeout(function () {
      PouletsRandom.classList.remove("poulet-Montee");
      PouletsRandom.classList.add("poulet-Descente");

      TabAnimPouletEnCours[numDivRandom] = false;

      clearInterval(timerPoulets[numDivRandom]);
    }, settings.delayVisible);

    // Vérifier si l'écouteur d'événements est déjà attaché

    if (!tabEventListenners[numDivRandom]) {
      const eventListener = () => PouletTouche(numDivRandom);

      PouletsRandom.addEventListener("click", eventListener);

      tabEventListenners[numDivRandom] = true;

      eventListeners[numDivRandom] = eventListener;
    }
  }
};

/* ~~~~~~~~~~~~~~~~~ */
/*   ANIM  CHICKEN  */
/* ~~~~~~~~~~~~~~~~~ */

function PouletTouche(numDivRandom) {
  let myAudio = document.createElement("audio");
  myAudio.src = "../assets/sound/punch-140236.mp3";
  myAudio.play();

  //Reset le timer en cours
  clearTimeout(timerPoulets[numDivRandom]);

  //Selectionne les poulets
  const Poulets = document.querySelectorAll(".Layer-Box img");
  //Selection Le poulet
  const PouletsRandom = Poulets[numDivRandom];

  //Animation poulet descente
  PouletsRandom.classList.remove("poulet-Montee");
  PouletsRandom.classList.add("poulet-Descente");

  //Mise en jour tableau des poulets anim en cours
  TabAnimPouletEnCours[numDivRandom] = false;
  tabEventListenners[numDivRandom] = false;

  //Incrementation score
  objScore.scoreActive = objScore.scoreActive + numDivRandom + 1;

  //Mise à jour affichage score
  majAffScore("+");

  //Débug affichage score
  console.log("score : " + objScore.scoreActive);

  //Suppression de la surveillance evenement
  PouletsRandom.removeEventListener("click", eventListeners[numDivRandom]);
}

/* ~~~~~~~~~~~~~~~~~~~ */
/*   SCORE  DISPLAY    */
/* ~~~~~~~~~~~~~~~~~~~ */

function majAffScore(operateur) {
  let divScore = document.getElementById("Score");
  divScore.innerHTML = objScore.scoreActive;

  if (operateur == "-") {
    divScore.style.color = "#8B0000";
  } else {
    divScore.style.color = "#FFFFFF ";
  }
  // Ajouter la classe zoom-effect
  divScore.classList.add("zoom-effect");

  // Supprimer la classe zoom-effect après un court délai
  setTimeout(function () {
    divScore.classList.remove("zoom-effect");
  }, 1000); // Durée de l'animation en millisecondes
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/*     COMPTE A REBOURDS    */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

function CompteArebourds() {
  let bruitStart = document.createElement("audio");
  bruitStart.src = "../assets/sound/woosh.mp3";
  bruitStart.play();
  let text = document.getElementById("text-decompte");
  let seconde = 4;
  let myAudio = document.createElement("audio");

  setTimeout(function () {
    myAudio.src = "../assets/sound/three-two-one-fight-deep-voice-38382.mp3";
    myAudio.play();
  }, 2000);

  const intervalText = setInterval(() => {
    seconde--;
    text.classList.remove = "animText-decompte";
    text.classList.add = "animText-decompte";
    text.innerText = seconde;

    if (seconde <= 0) {
      clearInterval(intervalText);

      text.parentElement.remove();
      startGame();
    }
  }, 1500); // Réduire de 1 seconde toutes les 1000 millisecondes (1 seconde)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/*       Anim Piaf          */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

//Pas optimisé du tout, à appeler plus haut mais pour paillettes dans les yeux

const gameContainer = document.querySelector(".game-container");

let compteurErrSelec = 1;

gameContainer.addEventListener("click", function (event) {
  if (partieEnCours == true) {
    // Vérifier si l'élément cliqué ou un de ses ancêtres a la classe Layer-Box
    const LayerBox = event.target.closest(".Layer-Box img");
    let rate = false;

    if (compteurErrSelec >= 1) {
      if (LayerBox) {
        const layerBoxPosition = Array.from(
          document.querySelectorAll(".Layer-Box")
        ).indexOf(LayerBox);

        if (TabAnimPouletEnCours[LayerBox] == false) {
          rate = true;
        }
      } else {
        rate = true;
      }

      if (rate == true) {
        const infoPiaf = document.querySelector(".Info-Piaf");

        let myAudio = document.createElement("audio");
        myAudio.src = "../assets/sound/oh-no-113125.mp3";
        myAudio.play();

        infoPiaf.style.visibility = "visible";

        let numPhrase = Math.floor(Math.random() * phrasesPiafRandom.length);

        const textPiaf = infoPiaf.querySelector(".textPiaf");
        textPiaf.textContent = phrasesPiafRandom[numPhrase];
        objScore.scoreActive = objScore.scoreActive - 3;
        majAffScore("-");

        setTimeout(function () {
          infoPiaf.style.visibility = "hidden";
        }, 1000);
      }

      compteurErrSelec = 0;
    }

    compteurErrSelec++;
  }
});
