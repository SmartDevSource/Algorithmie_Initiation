///////////////////// SUJET 2 /////////////////////

//______complexité algorithmique de O(n²) - 2 BOUCLES______//
function haveWestViewTwoLoop(buildings){
  let counter = buildings.length;

  for(let i = 0 ; i < buildings.length ; i++)
    for(let j = i+1 ; j < buildings.length ; j++)
      if (buildings[j] > buildings[i]) { 
        counter--; 
        break; 
      }

  return counter;
}

//______complexité algorithmique de O(n) - 1 BOUCLE______ //
function haveWestViewOneLoop(buildings){
  let counter = buildings.length;

  for(let i = 0 ; i < buildings.length ; i++)
    if (buildings[i] < buildings[i+1]) { counter--; }

  return counter;
}

//O(n²) - 2 BOUCLES//
console.log(haveWestViewTwoLoop([3, 7, 8, 3, 6, 1])) //=> 3;
console.log(haveWestViewTwoLoop([1, 4, 5, 8])) //=> 1;
//O(n) - 1 BOUCLE//
console.log(haveWestViewOneLoop([3, 7, 8, 3, 6, 1])) //=> 3;
console.log(haveWestViewOneLoop([1, 4, 5, 8])) //=> 1;
