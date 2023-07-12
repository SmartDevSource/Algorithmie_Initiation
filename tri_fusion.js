const fs = require("fs");

let dataFile, lists;

try{
  dataFile = fs.readFileSync(process.argv[2], "utf-8");
  lists = JSON.parse(dataFile);
}catch{
  console.log("fichier inexistant");
}

console.log("Etat d'origine des listes : "+lists.firstList + " et " + lists.lastList);

function mergeSort(list){
  if (list.length <2) return list;
  return merge(mergeSort(list.splice(0, (list.length/2))), mergeSort(list));
}

function merge(l, r){
  let a = new Array();
  while(l.length && r.length) if (l[0] < r[0]) { counter++; a.push(l.shift()); } else { counter++; a.push(r.shift())};
  return [...a, ...l,...r];
}

let counter = 0;
console.log(mergeSort(lists.firstList));
console.log("Nombre de comparaisons effectuées : "+counter);