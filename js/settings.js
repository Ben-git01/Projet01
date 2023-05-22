
/* ====================================================== */
/*                      SETTINGS                         */
/* ====================================================== */

/* ~~~~~~~~~~~ */
/*    INIT     */
/* ~~~~~~~~~~~ */


const gameInit = () => {
  console.log("Initialisation .... ");

  // Difficultés du jeu
  switch (settings.difficulty) {
    case 'easy':
      settings.delayReap = 1000;
      settings.delayVisible = 3000;
      settings.dureeJeu = 60000;
      console.log("Niveau facile");
      break;
    case 'medium':
      settings.delayReap = 1000;
      settings.delayVisible = 2000;
      settings.dureeJeu = 60000;
      console.log("Niveau moyen");
      break;
    case 'hard':
      settings.delayReap = 1000;
      settings.delayVisible = 1000;
      settings.dureeJeu = 60000;
      console.log("Niveau difficile");
      break;
    case 'impossible':
      settings.delayReap = 1000;
      settings.delayVisible = 1000;
      settings.dureeJeu = 60000;
      console.log("Niveau difficile");
        break;
    default:
      break;
  }

  //Ecriture à tous les poulets du délais de réapparition et de visibilité
  for (let i = 0; i < settings.nbrePoulets; i++) {
    tabPoulets.push(objPoulet);
    tabPoulets[i].delayReap = settings.delayReap;
    tabPoulets[i].delayVisible = settings.delayVisible;
  }

  //console.log(tabPoulets); DEBUG
  console.log("Duree partie : " + settings.dureeJeu);
  console.log("delais reap : " + settings.delayReap);
  console.log("delais visible : " + settings.delayVisible);

};


  //Init du score à 0
  objScore.scoreActive = 0;

  //Init pas d'animation sur poulets
  TabAnimPouletEnCours = [false, false, false, false, false, false, false];
  

  // Affichage user
  console.log(settings.user);
  let divUser = document.getElementById('User-text');
  divUser.innerText = settings.user;






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

