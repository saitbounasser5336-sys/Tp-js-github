document.getElementById("btn").addEventListener("click", function(){

let secondes = Number(document.getElementById("sec").value);
let jours = Math.floor(secondes / 86400);
let reste = secondes % 86400;
let heures = Math.floor(reste / 3600);
reste = reste % 3600;
let minutes = Math.floor(reste / 60);
let secs = reste % 60;
let resultat = "";

if(secondes < 60){
resultat = secs + " seconde(s)";
}
else if(secondes < 3600){
resultat = minutes + " minute(s) et " + secs + " seconde(s)";
}
else if(secondes < 86400){
resultat = heures + " heure(s), " + minutes + " minute(s) et " + secs + " seconde(s)";
}
else{
resultat = jours + " jour(s), " + heures + " heure(s), " + minutes + " minute(s) et " + secs + " seconde(s)";
}

document.getElementById("result").innerText = resultat;

});
