/* ====================================================== */
/*                      SETTINGS                          */
/* ====================================================== */

/* ~~~~~~~~~~~ */
/*    INIT     */
/* ~~~~~~~~~~~ */

const gameInit = (Localsettings) => {
  console.log("Initialisation .... ");

  console.log(
    "Recuperation depuis storage - difficulte : " + settings.difficulty
  );

  // Difficultés du jeu
  switch (Localsettings.difficulty) {
    case "easy":
      Localsettings.delayReap = 1000;
      Localsettings.delayVisible = 2000;

      console.log("Niveau facile");
      break;
    case "medium":
      Localsettings.delayReap = 1000;
      Localsettings.delayVisible = 1500;

      console.log("Niveau moyen");
      break;
    case "hard":
      Localsettings.delayReap = 1000;
      Localsettings.delayVisible = 1000;

      console.log("Niveau difficile");
      break;
    case "impossible":
      Localsettings.delayReap = 800;
      Localsettings.delayVisible = 800;

      console.log("Niveau difficile");
      break;
    default:
      break;
  }

  //Ecriture à tous les poulets du délais de réapparition et de visibilité
  for (let i = 0; i < Localsettings.nbrePoulets; i++) {
    tabPoulets.push(objPoulet);
    tabPoulets[i].delayReap = Localsettings.delayReap;
    tabPoulets[i].delayVisible = Localsettings.delayVisible;
  }

  //console.log(tabPoulets); DEBUG
  console.log("Duree partie : " + Localsettings.dureeJeu);
  console.log("delais reap : " + Localsettings.delayReap);
  console.log("delais visible : " + Localsettings.delayVisible);

  //Init du score à 0
  objScore.scoreActive = 0;

  //Init pas d'animation sur poulets
  TabAnimPouletEnCours = [false, false, false, false, false, false, false];

  // Affichage user
  console.log("Utilisateur dans fonction : " + settings.user);
  let divUser = document.getElementById("User-text");
  divUser.innerText = Localsettings.user;

  settings.delayReap = Localsettings.delayReap;
  settings.delayVisible = Localsettings.delayVisible;
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
