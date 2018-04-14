//Day 19, April 14 2018  //https://www.freecodecamp.org/challenges/where-do-i-belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
   arr.push(num);   //add num to array 
  
  
   arr.sort(function(a,b){ return a-b;}); //sort the array in ascending order
  
  
   return arr.indexOf(num);        //return the index of num
  
  }


getIndexToIns([40, 60], 50);
