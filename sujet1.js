///////////////////// SUJET 1 /////////////////////

//______complexité algorithmique de O(n²) - 2 BOUCLES______//
function isKLovedTwoLoop(numbers, key)
{
  for(let i = 0 ; i < numbers.length ; i++)
    for (let j = (i+1) ; j < numbers.length ; j++)
      if (numbers[i]+numbers[j] == key) { return true; }

  return false;
}

//______complexité algorithmique de O(n) - 1 BOUCLE______//
function isKLovedOneLoop(numbers, key) {
  let numbersBrowsed = [];

  for (let i = 0 ; i < numbers.length ; i++)
  {
    let compared = key-numbers[i];
    if (numbersBrowsed[compared]) return true;
    numbersBrowsed[numbers[i]] = true;
  }
  return false;
}

//O(n²) - 2 BOUCLES//
console.log(isKLovedTwoLoop([10, 15, 3, 7], 17)) //=> true;
console.log(isKLovedTwoLoop([1, 8, 10, 21], 19)) //=> false;
//O(n) - 1 BOUCLE//
console.log(isKLovedOneLoop([10, 15, 3, 7], 17)) //=> true;
console.log(isKLovedOneLoop([1, 8, 10, 21], 19)) //=> false;