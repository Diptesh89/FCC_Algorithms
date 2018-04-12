

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function k(val){
     return Boolean(val); 
  
}
  
  return arr.filter(k);
}

bouncer([7, "ate", "", false, 9]);
