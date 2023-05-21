
/* DECLARATION DES VARIABLES ET OBJETS */

//Génération de la table poulet & transfert settings
let tabPoulets = [];

let objPoulet = {
  classActive: '',
  touche: false,
  delayReap: '0s',
  delayVisible: '2s',
  nbreClicsReussis: 0,
  nbreClicsRate: 0
};

//Définition objet score
let objScore = {
  scoreActive: 0,
  indexClicsReussis: 0,
  indexClicsRates: 0,
  ratioReussite: 0,
  mapPouletTouche: []
};

//Définition des réglages
let settings = {
  user: '',
  difficulty: 'facile',
  delayReap: 5000,
  delayVisible: 2000,
  delayGen: 500,
  dureeJeu: 20000,
  nbrePoulets: 7
};

let TabAnimPouletEnCours = [];
let timerPoulets = [];
let tabEventListenners = [];
let eventListeners = [];

// Trigger timerflow
let trigger = true;

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
    case 'facile':
      GameSettings.delayReap = 1000;
      GameSettings.delayVisible = 3000;
      GameSettings.dureeJeu = 60000;
      console.log("Niveau facile");
      break;
    case 'moyen':
      GameSettings.delayReap = 1000;
      GameSettings.delayVisible = 2000;
      GameSettings.dureeJeu = 60000;
      console.log("Niveau moyen");
      break;
    case 'difficile':
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


/* Fonction qui récupère DIV dans DOM */
const caughtDiv = () => {
  // ...
};

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

