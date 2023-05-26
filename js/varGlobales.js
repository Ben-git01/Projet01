/* DECLARATION DES VARIABLES ET OBJETS */

//Génération de la table poulet & transfert settings
let tabPoulets = [];

let objPoulet = {
  classActive: "",
  touche: false,
  delayReap: "0s",
  delayVisible: "2s",
  nbreClicsReussis: 0,
  nbreClicsRate: 0,
};

//Définition objet score
let objScore = {
  scoreActive: 0,
  indexClicsReussis: 0,
  indexClicsRates: 0,
  ratioReussite: 0,
  mapPouletTouche: [],
};

//Définition des réglages
let settings = {
  partieEnCours: false,
  user: "",
  difficulty: "",
  delayReap: 5000,
  delayVisible: 2000,
  delayGen: 150,
  dureeJeu: 30000,
  nbrePoulets: 7,
};

let TabAnimPouletEnCours = [];
let timerPoulets = [];
let tabEventListenners = [];
let eventListeners = [];

// Trigger timerflow
let trigger = true;

let tabPlayers = [];

const phrasesPiafRandom = [
  "🍗🍗",
  "⤵️ T'es mauvais jack ⤵️",
  "Fais un effort 😱",
  "J'ai faim 🤓 ",
  "Je suis à court d'inspi 📖",
  "Mais pourquoi ?? 😂",
  "Vise droit 🎯",
  "Pas le décors on a dit ⛔ ",
  "Mets des paillettes Kévin 🌟",
];
