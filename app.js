

function entiersPairs (nEntier) {

    let myTab = new Array();
    let indice = 0;

    for (let i = 0 ; i <= nEntier ; i++ ) {
        
        if ( i % 2 == 0){
            myTab[indice] = i;
            indice++;
        }
    }
    return myTab;
}

let monResultat = entiersPairs(10);
console.log ("Liste des entiers pairs de 0 à 10 ==> " + monResultat);