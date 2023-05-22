
/* ====================================================== */
/*                      EVENT LISTENNER                   */
/* ====================================================== */
window.addEventListener("load", function() {
    var gameContainer = document.querySelector(".game-container");
    setTimeout(function() {
      gameContainer.style.opacity = "1";
    }, 0);

   

    CompteArebourds();

  });


  

    


/* ====================================================== */
/*                      GAMEPLAY                          */
/* ====================================================== */

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

  //On initialise les réglages (difficulté, nom user...)
  gameInit();

  //On rentre dans la loop de jeu  
  startLoop();
};



/* ~~~~~~~~~~~~~~~~~~~ */
/*     START  LOOP     */
/* ~~~~~~~~~~~~~~~~~~~ */

function startLoop() {



  //Définition d'un timer d'interval
  //Il va executer la fonction genRandom tous les delayGen (500ms par exemple)
  const timerInterval = setInterval(genRandom, settings.delayGen);

  //On définit un temps de jeu global, pour lequel on arretera le timer precedent et on arretera le jeu. 
  //On renvoit vers page de score
  setTimeout(function() {
    clearInterval(timerInterval);
    console.log("Jeu terminé");

    //Affichage score, bp page score, Rejouer
    AffichageFinPartie();


  }, settings.dureeJeu);
}


/* ~~~~~~~~~~~~~~~~~~~ */
/*   RANDOM  CHICKEN   */
/* ~~~~~~~~~~~~~~~~~~~ */

const genRandom = () => {

  // Génération random d'un numéro de poule 
  let numDivRandom = Math.floor(Math.random() * settings.nbrePoulets);
  const Poulets = document.querySelectorAll('.Layer-Box img');

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


/* ~~~~~~~~~~~~~~~~~ */
/*   ANIM  CHICKEN  */
/* ~~~~~~~~~~~~~~~~~ */

function PouletTouche(numDivRandom) {
  
  //Reset le timer en cours
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
  

/* ~~~~~~~~~~~~~~~~~~~ */
/*   SCORE  DISPLAY    */
/* ~~~~~~~~~~~~~~~~~~~ */


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



/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/*     COMPTE A REBOURDS    */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

function CompteArebourds(){

  let text = document.getElementById('text-decompte');
  let seconde = 4;

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
}, 1000); // Réduire de 1 seconde toutes les 1000 millisecondes (1 seconde)
}