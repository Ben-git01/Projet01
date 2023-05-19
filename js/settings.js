
/* DECLARATION DES VARIABLES ET OBJETS */



//Génération de la table poulet & transfert settings
let tabPoulets = [];

let objPoulet = {
    classActive :  '',
    touche : false, 
    delayReap : '0s', 
    delayVisible : '2s',
    nbreClicsReussis: 0,
    nbreClicsRate: 0
}


//Définition objet score
let objScore = {
    scoreActive : 0,
    indexClicsReussis : 0,
    indexClicsRates : 0,
    ratioReussite : 0,
    mapPouletTouche : []
}


//Définition des réglages
let settings = {
    user : '',
    difficulty : 'facile',
    delayReap : 5000, 
    delayVisible : 2000,
    dureeJeu : 20000,
    nbrePoulets : 7 
    
    
}

//Trigger timerflow
let trigger = true;

/* ====================================================== */
/*                      FONCTIONS                         */
/* ====================================================== */


                    /* ~~~~~~~~~~~ */
                    /*    INIT     */
                    /* ~~~~~~~~~~~ */

const gameInit = (GameSettings) => {

    console.log("Initialisation .... ");
    
    // Diffultés du jeu
    switch (GameSettings.difficulty) {

        case 'facile' :
            GameSettings.delayReap = 1000;
            GameSettings.delayVisible = 3000;
            GameSettings.dureeJeu = 60000;
            console.log("Niveau facile");
       
        break;


        case 'moyen' : 

            GameSettings.delayReap = 1000;
            GameSettings.delayVisible = 2000;
            GameSettings.dureeJeu = 60000;
            console.log("Niveau moyen");

        break;


        case 'difficile' : 
            GameSettings.delayReap = 1000;
            GameSettings.delayVisible = 1000;
            GameSettings.dureeJeu = 60000;
            console.log("Niveau difficile");

        break;

        default: break;


    }  



    for(let i=0; i<settings.nbrePoulets; i++){
    
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

}

                    /* ~~~~~~~~~~~~~~~~~ */
                    /*   ANIM  CHICKEN  */
                    /* ~~~~~~~~~~~~~~~~~ */


const genRandom = (objPoulets, GameSettings) => {

    
        // Génération random
        console.log("Nombre poulets : " + settings.nbrePoulets);
        let numDivRandom = Math.floor(Math.random() * (settings.nbrePoulets));

        // **** DETECTER SI CLASSE ACTIVE AVANT DE RANDOM 
        
        let trollRandom = Math.floor(Math.random()* (5));

        console.log("numéro généré random : " + numDivRandom + " Troll : " + trollRandom);

        //Selection des toutes les div poulets
        const Poulets = document.querySelectorAll('.Layer-Box img');
      
        //Pointe vers le poulet à l'index random
        const PouletsRandom = Poulets[numDivRandom];

        //Debug
        console.log(PouletsRandom.className);
       


        // =====> Timer 
        let timer;

        

        PouletsRandom.style.visibility = 'visible';



        PouletsRandom.classList.add("poulet-Montee");

            console.log("timer init : " + PouletsRandom.className);
          
        
            timer = setTimeout(function() {
                PouletsRandom.classList.remove("poulet-Montee");
                PouletsRandom.classList.add("poulet-Descente");
                


                console.log("switch state timeout : " + PouletsRandom.className);
                trigger = true;
                clearInterval(timer);

            }, settings.delayVisible);

            

            
        
        }

    



/* Fonction qui récupère DIV dans DOM */
const caughtDiv = () => {




}


// function gameLoop(){
// console.log("main del : " +settings.delayReap);
// //Boucle du jeu 
// const GameDuration = setInterval(genRandom(tabPoulets, settings), settings.delayReap);

// setTimeout(function(){
//     clearInterval(GameDuration);
// }, settings.dureeJeu);


function startLoop() {
    const intervalId = setInterval(genRandom, settings.delayReap); // Exécute genRandom toutes les secondes
  
    // Arrêter la boucle après la durée spécifiée
    setTimeout(function() {
      clearInterval(intervalId);
      console.log("Jeu termine");
    }, settings.dureeJeu);
  }
  
  // Démarrer la boucle






//Fonction start
const startGame = () => {

    gameInit(settings);

    startLoop();

     
    
    



    // let setTimeout(() => {






        
    // }, GameSettings.dureeJeu);


}


/* ====================================================== */
/*                      GAMEPLAY                          */
/* ====================================================== */

                /* LANCEMENT DU JEU */

//  ===> bouton play
// let buttonPlay = document.getElementById("btn-play");
// buttonPlay.addEventListener("click", gameInit(settings));


//  ===> Poulets box
const layerBoxes = document.querySelectorAll(".Layer-Box img");

// Détection de l'index de la div poulet cliquée
layerBoxes.forEach(function (box) {
    box.addEventListener("click", function () {

        let IndexPouletClic = Array.from(document.querySelectorAll(".Layer-Box")).indexOf(this.parentElement);
        
        console.log(this + "id : " + IndexPouletClic);

        //Appel de la fonction qui gère les animations
        gestionEvent(IndexPouletClic);

    });
});




const gestionEvent = (pouletTouch) => {

        Anim(this); 
       
            
}


const Anim = (indexPoulet) => {




}



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

