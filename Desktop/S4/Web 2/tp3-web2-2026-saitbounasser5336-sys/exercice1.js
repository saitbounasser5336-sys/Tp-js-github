document.getElementById("sub").addEventListener("click", function(e) {

    e.preventDefault();

    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let motdepasse = document.getElementById("mot").value;
    let pays = document.getElementById("pays").value;

    let regexpre = /^.{2,}$/;
    let regexage = /^(1[3-9]|[2-9][0-9]|1[01][0-9]|120)$/;
    let regexmot = /^.{8,}$/;

    let paysauto = ["france","belgique","suisse","canada"];

    let resultat = [];

    if(!regexpre.test(prenom)){
        resultat.push("Erreur prenom");
    }

    if(!regexage.test(age)){
        resultat.push("Erreur age");
    }

    if(!regexmot.test(motdepasse)){
        resultat.push("Erreur mot de passe");
    }

    if(!paysauto.includes(pays)){
        resultat.push("Erreur pays");
    }

    if(resultat.length === 0){
        console.log("Compte créé avec succès");
    }else{
        for(let i=0;i<resultat.length;i++){
            console.log(resultat[i]);
        }
    }

});