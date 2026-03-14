document.getElementById("btn").addEventListener("click", function(){

let notes = [12,7,18,5,14,9,20,3,11,16];

let somme = 0;
let max = notes[0];
let min = notes[0];
let reussite = 0;

for(let i=0;i<notes.length;i++){

somme += notes[i];

if(notes[i] > max) 
    max = notes[i];
if(notes[i] < min) 
    min = notes[i];

if(notes[i] >= 10) 
    reussite++;
}
let moyenne = somme / notes.length;

console.log("Moyenne:", moyenne);
console.log("Max:", max);
console.log("Min:", min);

if(reussite > notes.length/2){
    console.log("Classe en réussite");
}else{
    console.log("Classe en difficulté");
}

});
