
/* ====================================================== */
/*                      SETTINGS                         */
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

  //Ecriture à tous les poulets du délais de réapparition et de visibilité
  for (let i = 0; i < settings.nbrePoulets; i++) {
    tabPoulets.push(objPoulet);
    tabPoulets[i].delayReap = GameSettings.delayReap;
    tabPoulets[i].delayVisible = GameSettings.delayVisible;
  }

  //console.log(tabPoulets); DEBUG
  console.log("Duree partie : " + settings.dureeJeu);
  console.log("delais reap : " + settings.delayReap);
  console.log("delais visible : " + settings.delayVisible);

};


  









/* FONCTIONS DE TESTS DEBUG */
/* ======================= */

// function montee(){
//     console.log("montee");
//     const madiv = document.querySelectorAll(".Layer-Box img");
//     for(let i=0; i<madiv.length; i++){
    
//         console.log(madiv[i]);

//     madiv[i].classList.add("poulet-Montee");
//     madiv[i].classList.remove("poulet-Descente");

//     }
// }

// function descente(){
//     console.log("descente");
//     const madiv = document.querySelectorAll(".Layer-Box img");

//     for(let i=0; i<madiv.length; i++){
//         console.log(madiv[i]);

//     madiv[i].classList.add("poulet-Descente");
//     madiv[i].classList.remove("poulet-Montee");
//     }
// }

