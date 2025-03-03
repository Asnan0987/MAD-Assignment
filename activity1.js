floor=(...args)=>{    
    arr=[]    
    args.forEach((element,index)=>{   
    arr[index]=Math.floor(element);  
    }) 
    return arr;} 
genericOpertaions=(operation,...args)=>{   
if(operation==='round'){       
return round(...args);      
} 
else if(operation==='abs'){  
return abs(...args)    
} 
else if(operation==='ceil'){ 
return ceil(...args)    
} 
else if(operation==='floor'){ 
return floor(...args)   
}
else{      
return "Invalid Operation"   
} 
} 

console.log(genericOpertaions('floor',1.3,2.4,3.6,4.2,5.5)); 