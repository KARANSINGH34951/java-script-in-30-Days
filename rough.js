//function(){}

let myfunc=function(){console.log("helo world")};

console.log(typeof myfunc)


//array

const myarr=[0,1,2,3,4,5]
console.log(myarr)
console.log(myarr[2])

//array method

myarr.push(1)
console.log(myarr);

myarr.push(9)
console.log(myarr);

myarr.unshift(8)
console.log(myarr);

myarr.shift()
console.log(myarr);

myarr.pop()
console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr);

// console.log(myarr.indexof(3));
// console.log(myarr);

let myarr23=[1,2,3,4,5,6,7]

let newarr= myarr23.join()
console.log(newarr)

//slice & splice

console.log("A",myarr23);
const mynewarr1=myarr23.slice(1,3);
console.log(mynewarr1)

console.log("B",myarr23);
const mynewarr12=myarr23.splice(1,3);
console.log(mynewarr12)

console.log("c",myarr23)

//more methods


const marvelheros=["ironman","caption","thor"]
const dcheros=["superman","batman","wonderwomen"]

//confusion between arrays concepts

// marvelheros.push(dcheros)
// dcheros.push(marvelheros)

console.log(marvelheros)
console.log(dcheros)

// console.log(dcheros[3][1]);

const allheroes=marvelheros.concat(dcheros)
console.log(allheroes)
//same thing but different way
const allnewheroes=[...marvelheros,...dcheros]
console.log(allnewheroes)

const otherarray=[1,2,3,4,[1,2,3,4],[6,7,8,[2,8,7]]];
console.log(otherarray)
const realotherarray =otherarray.flat(3)
console.log(realotherarray);

console.log(Array.isArray("karansingh"));
console.log(Array.from("karansingh"));

let marks=500;
let marks2=600;
let marks3=700;

console.log(Array.of(marks,marks2,marks3))

//objects

//keys and values pair

const jbuser={
    name:"karan",
    "age":12,
    "location":"taamilnadu",
    "mail":"ceitkaran",
    "login":"error"
}

console.log(jbuser["name"])
//or 
console.log(jbuser.name)

jbuser.age=25
console.log(jbuser)

Object.freeze(jbuser);

jbuser.greeting=function(){
    console.log("hello js ")
}

console.log(jbuser.greeting)


