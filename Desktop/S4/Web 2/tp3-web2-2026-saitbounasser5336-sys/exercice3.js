document.getElementById("btn").addEventListener("click", function(){

let combinaisons = [[true,true],[true,false],[false,true],[false,false]];

console.log("a | b | a&&b | a||b | !a | !b");

for(let i=0;i<combinaisons.length;i++){

let a = combinaisons[i][0];
let b = combinaisons[i][1];

console.log(a,"|",b,"|",a&&b,"|",a||b,"|",!a,"|",!b);

}

});
