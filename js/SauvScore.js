

function sauvegarderPartie(nomJoueur, score, niveauDifficulte) {
 

  // Format de sauvegarde : "Nom du joueur,Score,Niveau de difficulté"
  const sauvegarde = `${nomJoueur},${score},${niveauDifficulte}\n`;

  // Ajouter la nouvelle sauvegarde au fichier
  fs.appendFile('sauvegardes.txt', sauvegarde, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Sauvegarde effectuée avec succès.');
    }

  });

}


// Tableau des players



function chargerSauvegardes() {


  fs.readFile('sauvegardes.txt', 'utf8', (err, data) => {
    // Boucle dès qui voit un /n sauvegarde les caractères avant   split('/n') split(',')
    data = data.trim();
    //Tableau lignes fichier texte
    let LigneTab = data.split("\n");

    for (let i = 0; i < LigneTab.length; i++) {

      let player = {
        playerName: "",
        playerScore: "",
        playerDifficulty: ""
      };

      let tabtemp = [];

      //Récupère dans un tableau temporaire tabTemp les éléments de ligneTab ([0]: user, [1]: score, [2]: difficulté)
      tabtemp = LigneTab[i].split(",");
      //console.log("Resultat split (,)" + tabtemp);
      //Affecte la clé récupérée au player
      player.playerName = tabtemp[0];
      player.playerScore = tabtemp[1];
      player.playerDifficulty = tabtemp[2];
      //Push du player dans le tableau de playerzz
      tabPlayers.push(player);
      //console.log(tabPlayers);


    }

    /* MISE EN CACHE DANS VARIABLE SESSION */
    // Conversion de l'objet en une chaîne JSON
    let scoreText = JSON.stringify(tabPlayers);

    // Stockage de la chaîne JSON dans sessionStorage
    sessionStorage.setItem('Scores', scoreText);




  })



}

let settingsJSON3 = sessionStorage.getItem('Scores');
console.log(settingsJSON3);
// Conversion de la chaîne JSON en objet JavaScript
let scoreTest = JSON.parse(settingsJSON3);
console.log("Session : " + scoreTest);


let test;
test = chargerSauvegardes();
console.log(test);


/*




    */
/*
     // Lire les sauvegardes précédentes
  fs.readFile('sauvegardes.txt', 'utf8', (err, data) => {
    // Boucle dès qui voit un /n sauvegarde les caractères avant   split('/n') split(',')
    data = data.trim();
    //Tableau lignes fichier texte
    let LigneTab = data.split("\n");

    for (let i = 0; i < LigneTab.length; i++) {

      let tabtemp = LigneTab[i].split(',');
      tabPlayers[i] = new Array();

      for (let j = 0; j < tabtemp.length; j++) {

        tabPlayers[i][j] = tabtemp[j];
        //console.log(tabPlayers[i]);

      }
    }

    console.log(tabPlayers);
  })*/