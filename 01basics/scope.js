//diffrence between let and var
//global local scope{}
let iAmGlobal = 'someValue'

if(true){
    let iAmLocal = 'somelocal'
    iAmGlobal = 'superman'
    var iAmLocal1 = 'otherlocal'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

//console.log(iAmLocal) -> gives error cause its defined inside a scope
console.log(iAmLocal1); //prints value cause its global

/**
 * var is used to create a global variable
 * let inside a scope creates a local variable i.e cant be accessed outside the scope
 */
