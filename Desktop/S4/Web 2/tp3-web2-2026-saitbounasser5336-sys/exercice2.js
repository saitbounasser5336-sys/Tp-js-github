document.getElementById("calc").addEventListener("click", function(){

let brut = Number(document.getElementById("salaire").value);
let anciennete = Number(document.getElementById("anciennete").value);
let partiel = document.getElementById("partiel").checked;

let prime = 0;

if(anciennete >= 2 && anciennete <= 5){
prime = 100;
}
else if(anciennete > 5){
prime = 250;
}

let base = brut + prime;

if(partiel){
base = base / 2;
}

let cotisations = 0;

if(base <= 1500){
cotisations = base * 0.10;
}
else if(base <= 3000){
cotisations = (1500 * 0.10) + ((base - 1500) * 0.20);
}
else{
cotisations = (1500 * 0.10) + (1500 * 0.20) + ((base - 3000) * 0.30);
}

let net = base - cotisations;

document.getElementById("result").innerHTML =
"Salaire brut : " + brut + "<br>" +
"Prime : " + prime + "<br>" +
"Base de calcul : " + base + "<br>" +
"Cotisations : " + cotisations + "<br>" +
"Salaire net : " + net;

});