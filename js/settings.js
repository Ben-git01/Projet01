
/* ====================================================== */
/*                      FONCTIONS                         */
/* ====================================================== */

/* ~~~~~~~~~~~ */
/*    INIT     */
/* ~~~~~~~~~~~ */

const gameInit = (GameSettings) => {
  console.log("Initialisation .... ");

  // Difficultés du jeu
  switch (GameSettings.difficulty) {
    case 'easy':
      GameSettings.delayReap = 1000;
      GameSettings.delayVisible = 3000;
      GameSettings.dureeJeu = 60000;
      console.log("Niveau facile");
      break;
    case 'medium':
      GameSettings.delayReap = 1000;
      GameSettings.delayVisible = 2000;
      GameSettings.dureeJeu = 60000;
      console.log("Niveau moyen");
      break;
    case 'hard':
      GameSettings.delayReap = 1000;
      GameSettings.delayVisible = 1000;
      GameSettings.dureeJeu = 60000;
      console.log("Niveau difficile");
      break;
    case 'impossible':
     GameSettings.delayReap = 1000;
        GameSettings.delayVisible = 1000;
        GameSettings.dureeJeu = 60000;
        console.log("Niveau difficile");
        break;
    default:
      break;
  }

  for (let i = 0; i < settings.nbrePoulets; i++) {
    tabPoulets.push(objPoulet);
    tabPoulets[i].delayReap = GameSettings.delayReap;
    tabPoulets[i].delayVisible = GameSettings.delayVisible;
  }

  console.log(tabPoulets);
  console.log("Duree partie : " + settings.dureeJeu);
  console.log("delais reap : " + settings.delayReap);
  console.log("delais visible : " + settings.delayVisible);

  // Utilisateur
  GameSettings.user = "Raph";
};

/* ~~~~~~~~~~~~~~~~~ */
/*   ANIM  CHICKEN  */
/* ~~~~~~~~~~~~~~~~~ */

function PouletTouche(numDivRandom) {
    
    clearTimeout(timerPoulets[numDivRandom]);
    const Poulets = document.querySelectorAll('.Layer-Box img');
    const PouletsRandom = Poulets[numDivRandom];
    PouletsRandom.classList.remove("poulet-Montee");
    PouletsRandom.classList.add("poulet-Descente");
    TabAnimPouletEnCours[numDivRandom] = false;
    tabEventListenners[numDivRandom] = false;
    objScore.scoreActive++;
    majAffScore();
    console.log("score : " + objScore.scoreActive);
    PouletsRandom.removeEventListener("click", eventListeners[numDivRandom]);
}
    
  
const genRandom = () => {
    // Génération random
    let numDivRandom = Math.floor(Math.random() * settings.nbrePoulets);
    const Poulets = document.querySelectorAll('.Layer-Box img');
  
    if (TabAnimPouletEnCours[numDivRandom] == true) {
      console.log("Poulet" + numDivRandom + " déjà actif");
      return;
    } else {
      console.log("Poulet qui entre en anim : " + numDivRandom);
      let trollRandom = Math.floor(Math.random() * 5);
  
      const PouletsRandom = Poulets[numDivRandom];
  
      TabAnimPouletEnCours[numDivRandom] = true;
      PouletsRandom.style.visibility = 'visible';
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

function majAffScore(){
    let divScore = document.getElementById('Score');
    divScore.innerHTML = objScore.scoreActive;
    
     // Ajouter la classe zoom-effect
     divScore.classList.add('zoom-effect');

    // Supprimer la classe zoom-effect après un court délai
    setTimeout(function() {
    divScore.classList.remove('zoom-effect');
    }, 1000); // Durée de l'animation en millisecondes
}
  

function startLoop() {
  objScore.scoreActive = 0;
  TabAnimPouletEnCours = [false, false, false, false, false, false, false];

  const timerInterval = setInterval(genRandom, settings.delayGen);

  setTimeout(function() {
    clearInterval(timerInterval);
    console.log("Jeu terminé");
  }, settings.dureeJeu);
}



//Fonction start
const startGame = () => {

  gameInit(settings);
  
  startLoop();
};







/* FONCTIONS DE TESTS DEBUG */
/* ======================= */

function montee(){
    console.log("montee");
    const madiv = document.querySelectorAll(".Layer-Box img");
    for(let i=0; i<madiv.length; i++){
    
        console.log(madiv[i]);

    madiv[i].classList.add("poulet-Montee");
    madiv[i].classList.remove("poulet-Descente");

    }
}

function descente(){
    console.log("descente");
    const madiv = document.querySelectorAll(".Layer-Box img");

    for(let i=0; i<madiv.length; i++){
        console.log(madiv[i]);

    madiv[i].classList.add("poulet-Descente");
    madiv[i].classList.remove("poulet-Montee");
    }
}

