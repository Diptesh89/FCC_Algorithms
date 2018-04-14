
//Day 19, April 14, 2018 //https://www.freecodecamp.org/challenges/caesars-cipher


function rot13(str) { // LBH QVQ VG!
var k13;                          //declare variable to store ascii code
var newStr="";                    //declare and initialize a new string  
for(var i=0; i<str.length;i++){    //run the loop till str length
  
  if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77)||(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=109))    
  {k13=str.charCodeAt(i)+13;}  //append 13 places if above condition is satisfied 
  
  else if(str.charCodeAt(i)<65) {k13=str.charCodeAt(i);}  //don't append anything for characters such as ?.!
  
  else
  
  {k13=str.charCodeAt(i)-13;}  //minus 13 positions if above 2 conditions are not met
  
    
  newStr=newStr+String.fromCharCode(k13); //concatinate the converted characters

  }
  
  return newStr; //return the new string
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
