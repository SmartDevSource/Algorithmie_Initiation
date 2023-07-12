const fs = require("fs");

let dataFile, list;

try{
  dataFile = fs.readFileSync(process.argv[2], "utf-8");
  list = JSON.parse(dataFile).list;
}catch{
  console.log("fichier inexistant");
}

console.log("Etat d'origine de la liste : "+list);

function mergeSort(list){
  
}