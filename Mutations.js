//Day 16: April 11, 2018


function mutation(arr) {
  var t=0;
  var count=0;
  var newArr=[],k=[];
  newArr.push(arr[0].toLowerCase());
 
  k=arr[1].toLowerCase().toString().split("");
  
  for(var i=0;i<k.length;i++){
       t=newArr[0].includes(k[i]);
        if(t===true){count=count+1;}
           
    }
  
  if(count==k.length){return true; }
  else {return false;}
  
  

}

mutation(["hello", "hey"]);
