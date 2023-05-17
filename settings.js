
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
    diffulty : 'facile',
    delayReap : '0s', 
    delayVisible : 2,
    dureeJeu : 60000,
    nbrePoulets : 7
    
}

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
            GameSettings.delayReap = 2000;
            GameSettings.delayVisible = 3000;
            GameSettings.dureeJeu = 60000;
       
        break;


        case 'moyen' : 

            GameSettings.delayReap = 1000;
            GameSettings.delayVisible = 2000;
            GameSettings.dureeJeu = 60000;

        break;


        case 'difficile' : 
            GameSettings.delayReap = 1000;
            GameSettings.delayVisible = 1000;
            GameSettings.dureeJeu = 60000;

        break;

        default: break;


    }  



    for(let i=0; i<settings.nbrePoulets; i++){
    
        tabPoulets.push(objPoulet);
        tabPoulets[i].delayReap = GameSettings.delayReap;
        tabPoulets[i].delayVisible = GameSettings.delayVisible;
    }

    console.log(tabPoulets);


    // Utilisateur
    GameSettings.user = "Raph";

}

                    /* ~~~~~~~~~~~~~~~~~ */
                    /*  TIMEFLOW SETUP   */
                    /* ~~~~~~~~~~~~~~~~~ */

/* FONCTION QUI GENERE L'ANIMATION DES POULETS */
const genRandom = (objPoulets, GameSettings, trigger) => {

    
    if(trigger === true) {
        console.log("Nombre poulets : " + settings.nbrePoulets);
        let numDivRandom = Math.floor(Math.random() * (GameSettings.nbrePoulets));
        let trollRandom = Math.floor(Math.random()* (5));

        console.log("numéro généré random : " + numDivRandom + " Troll : " + trollRandom);

        const Poulets = document.querySelectorAll('.Layer-Box img');
      
        const PouletsRandom = Poulets[numDivRandom];

        
       
        // let delayVisibleTimer = setInterval(classVisible(), GameSettings.delayVisible);

        //  function classVisible(){

        // Détermination classe
        if(trollRandom = 1){
            objPoulets[numDivRandom].classActive= "troll";
            PouletsRandom.src= "assets/img/Poulets/preloader_gif2.gif";  
        }else{
            objPoulets[numDivRandom].classActive= "normal";
            PouletsRandom.src= "assets/img/Poulets/Poulet.png";
        }

        console.log(PouletsRandom.src);

        // }

        /*

        .Layer-Box img{
            height:100%;
            width:100%;
            object-fit: contain;
            transform: translate(0, 100%);
           
        }*/
        

    

        
    }

}


/* Fonction qui récupère DIV dans DOM */
const caughtDiv = () => {




}








//Fonction start
const startGame = () => {

    gameInit(settings);

    genRandom(tabPoulets, settings, true); 
    
    



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

