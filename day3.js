//day3
//exe-16

const prompt = require('prompt-sync')();

a=[25,26,27,28,29,30]
console.log(a)

b=["helo",false,45,45.5]
console.log(b)

a[0]=24;
console.log(a)
//exe-17
console.log(a.length);
let c= a.toString();
console.log(c)

let d=a.join("and")
console.log(d)

let e=a.pop();
console.log(e)

a.push(34)
console.log(a);

a.shift()
console.log(a)

a.unshift(23)
console.log(a)

//exe-18
delete a[0]
console.log(a)
console.log(a.length);


let newa=a.concat(b)
console.log(newa)

let p=[23,4,56,7,6,0]
p.sort();
console.log(p)


let q=[23,24,22,56,7,6,0]
q.sort();
console.log(q)

q.reverse()
console.log(q)

q.splice(2,3,4,5,6)
console.log(q)

k=q.slice(4)
l=q.slice(1,5)
console.log(l)
console.log(k)

//exe-19
//loops in array

let x=[1,2,3,4,5,6,7,8,9];
for (let n=0;n<x.length;n++){
    console.log(x[n]);
}

//for each loop
x.forEach((ele)=>{
    console.log("for each",ele*ele);
})

//array from

let name="harry";
let arr=Array.from(name);
console.log("arra from",arr);

let num=[12,13,14,15,16]
for (let j of num){
    console.log(j);
}

for (let k in num){
    console.log(k);
}

//exe-20

//map-filter-reduce

const aar1=[1,2,3,4];
let aa=aar1.map((value)=>{
    console.log(value);
    return value+1
})
console.log(aar1)
console.log(aa);

const aar2=[1,3,4];
let aaa=aar2.map((values,index,array)=>{
    console.log(values,index,array);
    return values+1
})
console.log(aar2)
console.log(aaa);

//filter method

let arr2=[27,18,19,4,3,5,7,0]
let a7=arr2.filter((r)=>{
    return r<5;
})
console.log(a7)


//reduce method
let array1=[1,2,3,4,5]
let array2=array1.reduce((h1,h2)=>{
    return h1+h2;
})

console.log(array2)

//exe-21

// let assignarr=[1,2,3,4,5]
// let assignarr1=prompt("add a element:");
// assignarr1=Number.parseInt(assignarr1)
// assignarr.push(assignarr1);
// console.log(assignarr)

//exe-22



