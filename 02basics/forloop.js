const days = ['Mon','Tue','Wed','Thu','Fri','Sat']

days.forEach(function(item,index,arr){
    //console.log(`item ${item},at index ${index}, ${arr}`);
    
})

for (let index = 0; index < days.length; ++index) {
    const element = days[index];
    console.log(`val ${element},index ${index}`);
    
}

/**
 * i = 5
 * Prefix  --i => decrements i by 1 then gives you the value of i (4).
 * Postfix  i-- => gives you the value of i (5) then decrements it by 1.
 * 
 * BOTH WILL GIVE YOU THE SAME RESULT IN A LOOP
 */