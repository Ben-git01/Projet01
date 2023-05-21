 function startGameSets(){

 const bpRun = document.getElementById('buttonRun');
 bpRun.style.visibility = "hidden";
 
 
 const popupReglages = document.getElementById('popup-sets'); 
 popupReglages.style.visibility = "visible";
 popupReglages.style.transform =  "translateY(20%)";
 popupReglages.style.transition= "transform 1s ease-in-out";

 console.log(bpRun + popupReglages);

}


const username = document.getElementById("username");
username.addEventListener("input", checkRequire);

const nivDiff = document.querySelectorAll(".Sets-difficulty");


console.log(nivDiff[0]);

function checkRequire(){

}