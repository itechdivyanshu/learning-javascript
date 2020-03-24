const superHero = ['IronMan','Thor','SpiderMan']
console.log(superHero);
console.log(superHero[0]);
console.log(superHero[(superHero.length)-1]);

console.log(`we have ${superHero.length} super Hero`);

const num = ['One','Two','Three','Four']

num[1] = 'Other Valeu' //changes a value present in list

//start
num.shift() //removes and returns first element
num.unshift('something')//inserts new elem at start

//end
num.pop() //removes the last element and retuns it
num.push('last',1,5.0) //appends new val at the end and returns new length

//middle
num.splice(2,1,'newVal')//splice(start,deletecount,elem)

console.log(num);
