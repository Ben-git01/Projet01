window.addEventListener("load", function() {
    var gameContainer = document.querySelector(".game-container");
    setTimeout(function() {
      gameContainer.style.opacity = "1";
    }, 0);
  });



/* ====================================================== */
/*                      GAMEPLAY                          */
/* ====================================================== */

                /* LANCEMENT DU JEU */

//  ===> bouton play
// let buttonPlay = document.getElementById("btn-play");
// buttonPlay.addEventListener("click", gameInit(settings));


//  ===> Poulets box
// const layerBoxes = document.querySelectorAll(".Layer-Box img");

// Détection de l'index de la div poulet cliquée
// layerBoxes.forEach(function (box) {
//     box.addEventListener("click", function () {

//         let IndexPouletClic = Array.from(document.querySelectorAll(".Layer-Box")).indexOf(this.parentElement);
        
//         console.log(this + "id : " + IndexPouletClic);

//         //  this.src = "assets/img/Poulets/Poulet.gif";

//         //Appel de la fonction qui gère les animations
//         gestionEvent(IndexPouletClic);

//     });
// });




const gestionEvent = (pouletTouch) => {
  // console.log("Poulet touch : " + pouletTouch);

  // indexPoulet.src = "assets/img/Poulets/preloader_gif2.gif";

  // Anim(this); 
 
      
}


const Anim = (indexPoulet) => {


           
  
      }
      
