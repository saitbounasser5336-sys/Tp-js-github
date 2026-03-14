function estPremier(n) {
    if(n <= 1) 
        return false;
    for(let i=2;i<n;i++) {
    if(n % i === 0) 
        return false;
    }
    return true;
}

document.getElementById("btn").addEventListener("click", function(){

for(let i=1;i<=100;i++){
    if(estPremier(i)){
    console.log(i);
    }
}

let count = 0;

for(let i=1;i<=100;i++){
    if(estPremier(i)){
    count++;
    }
}

console.log("Total:", count);

let n = 501;

while(!estPremier(n)){
n++;
}

console.log("Premier > 500:", n);

});
