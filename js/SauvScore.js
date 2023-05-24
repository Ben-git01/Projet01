const fs = require('fs');

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

function chargerSauvegardes() {
  // Lire les sauvegardes précédentes
  fs.readFile('sauvegardes.txt', 'utf8', (err, data) => {
    
    //Code ici - gogogo 
    
  
  })
}


// Exemple d'utilisation
sauvegarderPartie('Alice', 100, 2);
sauvegarderPartie('Bob', 75, 1);


chargerSauvegardes();