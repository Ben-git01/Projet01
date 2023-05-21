/* ================= NAVBAR ======================*/
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',() => {
navLinks.classList.toggle('mobile-menu')
})

function startGameSets(){

    const bpRun = document.getElementById('buttonRun');
    bpRun.style.visibility = "hidden";
    
    
    const popupReglages = document.getElementById('popup-sets'); 
    popupReglages.style.visibility = "visible";
    popupReglages.style.transform =  "translateY(20%)";
    popupReglages.style.transition= "transform 1s ease-in-out";
   
    console.log(bpRun + popupReglages);
   
   }
   

   /* ============== BOUTON RUN ================ */
   const btnStart = document.getElementById("btnStart");
   
   /* VERIFICATION DONNEES ENTREES UTILISATEUR */
   const username = document.getElementById("username");
   username.addEventListener("input", checkRequire);
   
   /* VERIFICATION NIVEAU DIFFICULTE */
   let nivDiff = document.querySelectorAll('input[type="radio"]');
   nivDiff.forEach(function(rb) {
     rb.addEventListener("change", function() {
       nivDiff.forEach(function(desactivAutreBp) {
         if (desactivAutreBp !== rb) {
           desactivAutreBp.checked = false;
         }
       });
       checkRequire();
     });
   });
   

   /* ============== POPUP SETTINGS ================= */
   function checkRequire() {
     let verifUsername = username.value.trim() !== "";
     console.log(verifUsername);
   
     let niveauSelected = false;
     nivDiff.forEach(function(rb) {
       if (rb.checked) {
         niveauSelected = true;
       }
     });
   
     if (verifUsername && niveauSelected) {
       btnStart.style.display = "block";
       btnStart.style.background = "green";
       btnStart.disabled = false;
       btnStart.style.color = "white";
       btnStart.style.fontSize = "1.2rem";
       btnStart.innerHTML="Good luck !";
     } else {
       btnStart.style.display = "none";
   
     }
   }
   
   /* Idee : Changer le texte du bouton go en fonction du niveau sélectionné 
   easy : poule mouillée
   medium : ... */
   
   // Vérification initiale au chargement du script
   checkRequire();
   
   