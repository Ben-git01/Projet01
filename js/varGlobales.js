
/* DECLARATION DES VARIABLES ET OBJETS */

//Génération de la table poulet & transfert settings
let tabPoulets = [];

let objPoulet = {
  classActive: '',
  touche: false,
  delayReap: '0s',
  delayVisible: '2s',
  nbreClicsReussis: 0,
  nbreClicsRate: 0
};

//Définition objet score
let objScore = {
  scoreActive: 0,
  indexClicsReussis: 0,
  indexClicsRates: 0,
  ratioReussite: 0,
  mapPouletTouche: []
};

//Définition des réglages
let settings = {
  user: '',
  difficulty: '',
  delayReap: 5000,
  delayVisible: 2000,
  delayGen: 150,
  dureeJeu: 2000,
  nbrePoulets: 7
};

let TabAnimPouletEnCours = [];
let timerPoulets = [];
let tabEventListenners = [];
let eventListeners = [];

// Trigger timerflow
let trigger = true;

let tabPlayers = [];




