const fs = require("fs");

/////////////// VARIABLES ///////////////
let dataFile, lists;
let counter = 0;

/////////////// CHARGEMENT DU FICHIER JSON ///////////////
try{
  dataFile = fs.readFileSync(process.argv[2], "utf-8");
  lists = JSON.parse(dataFile);
}catch{
  console.log("fichier inexistant");
}
/////////////// ETAT INITIAL DES LISTES RÉCUPÉRÉES ///////////////
console.log("Etat d'origine des listes : "+lists.firstList + " et " + lists.lastList);

/////////////// FONCTION DE SEPARATION EN DEUX PARTIES DE LA LISTE PASSÉE EN ARGUMENT ///////////////
function mergeSort(list){
  return (list.length <2) ? list : merge(mergeSort(list.splice(0, (list.length/2))), mergeSort(list));
}

/////////////// FONCTION DE COMPARAISON APPELLÉE PAR LA FONCTION DU DESSUS ///////////////
function merge(left, right){
  let array = new Array();

  while(left.length && right.length) 
    if (left[0] < right[0]) { counter++; array.push(left.shift()); } else { counter++; array.push(right.shift())};

  return [...array, ...left,...right];
}

/////////////// APPEL DE LA FONCTION MERGESORT & AFFICHAGE ///////////////
console.log(mergeSort(lists.firstList));
console.time("Temps d'exécution : ");
console.log("Nombre de comparaisons effectuées : "+counter);
console.timeEnd("Temps d'exécution : ");
counter = 0;