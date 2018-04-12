//Day 17: April 12, 2018 https://www.freecodecamp.org/challenges/falsy-bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function k(val){
     return Boolean(val); 
  
}
  
  return arr.filter(k);
}

bouncer([7, "ate", "", false, 9]);
