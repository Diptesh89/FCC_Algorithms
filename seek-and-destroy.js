
//https://www.freecodecamp.org/challenges/seek-and-destroy

function destroyer(arr) {
  // Remove all the values


    var newArr=[];
        newArr=arr;  //assign arr to newArr
    
    var args = Array.from(arguments);   //convert arguments object to an array
  
  for (var i=1; i<args.length;i++)      //iterate through args array
    newArr=newArr.filter(k);            //filter and assign filtered value back to newArr
 
  function k(val){             //function for filtering
    
          return val!=args[i];          //return "TRUE" for values not equal to args   
    }

  return newArr; //return value of filtered array
}   
 
    

 
destroyer([1, 2, 3, 1, 2, 3], 2, 3);      //call to destroyer function
