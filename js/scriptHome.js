


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
    let difficulte = returnNiveauSelected();
    btnStart.disabled = false;
    btnStart.style.visibility= "visible";
    btnStart.style.display= "block";
    
    switch (difficulte) {

      case "easy":  btnStart.innerHTML = "Poule mouillée 😏";
      break;

      case "medium":  btnStart.innerHTML = "Allons-y gaiement 🐔";
      break;

       case "hard":  btnStart.innerHTML = "Tu prends la confiance 🤠";
      break;

      case "impossible":  btnStart.innerHTML = "RIP 😱😱😱";
      break;
    }
   
  } else {
    btnStart.style.display = "none";
  }
}

/* Idee : Changer le texte du bouton go en fonction du niveau sélectionné 
easy : poule mouillée
medium : ... */

// Vérification initiale au chargement du script
checkRequire();

/* =========== BOUTON GO ========== */
btnStart.addEventListener("click", function() {
 
  settings.user = username.value;
  
  console.log("User : " + settings.user + " Difficulté : " + settings.difficulty);
  let navUrl = "Game.html?user=" + username.value;
  window.location.href = navUrl;
});


function returnNiveauSelected() {
  settings.difficulty = document.querySelector('input[name^="sel-"]:checked').value;
  console.log(settings.difficulty);
  return settings.difficulty;
}
   