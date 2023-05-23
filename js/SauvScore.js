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
    if (err) {
      console.error(err);
    } else {
      // Traiter les sauvegardes précédentes
      const sauvegardes = data.split('\n');
      sauvegardes.forEach((sauvegarde) => {
        if (sauvegarde.trim() !== '') {
          const elements = sauvegarde.split(',');
          const nomJoueur = elements[0];
          const score = parseInt(elements[1]);
          const niveauDifficulte = parseInt(elements[2]);

          // Faire quelque chose avec les données chargées (par exemple, les afficher)
          console.log(`Nom du joueur : ${nomJoueur}, Score : ${score}, Niveau de difficulté : ${niveauDifficulte}`);
        }
      });
    }
  });
}

// Exemple d'utilisation
sauvegarderPartie('Alice', 100, 2);
sauvegarderPartie('Bob', 75, 1);

chargerSauvegardes();