let sayHello = function(name){
    console.log(`Hello ${name}`);
    
}
//sayHello('Jhon')

let adder = function(n1,n2){
    let nt = n1+n2
    return nt
}
// console.log(adder(1,2));
let mult = function(n1,n2){
    return n1*n2
}

let user = function(name,count=0){
    return `hello ${name} your count is ${count}`
}
console.log(user('itech'));
