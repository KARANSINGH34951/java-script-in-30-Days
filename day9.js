for(let i=0;i<5;i++){
    console.log(i)
}

const arr=[11,22,33,44,55]
for (let k of arr){
    console.log(k)
}

const arr1=[34,35,36,37]
for  (let s in arr1){
    console.log(s)
}

//map

let obj1={
    name:"karan",
    name1:"karan1",
    name2:"karan2",
    name3:"karan3"
}

// for (const [key,value] of obj1){
//     console.log(key,"==",value)
// }

// object cannot be iterable with for loop here => gives an error


for (const key in obj1){
    console.log(key)
    console.log(obj1[key])
}

const arr26=[19,29,39,49,59,69]

arr26.forEach(function (item) {
    console.log(item)
})

arr26.forEach( (item)=>{
    console.log(item)
})

const mynums=[90,80,70,60,40,30,20]
const newnum=[]

mynums.forEach( (num)=>{
    if (num>40){
        newnum.push(num)
    }
})
console.log(newnum)


//exe

const books=[
    {title:"book1", genre :"crime", publish:1981 , edition:2004 },
    {title:"book1", genre :"fiction",publish:1985,edition:2004},
    {title:"book1", genre :"romance",publish:1989,edition:2004},
    {title:"book1", genre :"fiction",publish:1999,edition:2004},
    {title:"book1", genre :"action",publish:1909,edition:2004},
    {title:"book1", genre :"history",publish:2003,edition:2004}
];

let userbooks=books.filter( (obj)=>obj.genre=="fiction")
console.log(userbooks)

userbooks=books.filter((obj)=>obj.publish>=1998)
console.log(userbooks)

userbooks=books.filter((obj)=>{
    return obj.publish>=2000 && obj.genre=="history"
})
console.log(userbooks)


//map 

let numerics=[1,2,3,4,5,6,7,8,9,10]
const newnumeric= numerics.map( (value1)=>value1+10)
console.log(newnumeric)

let numerics1=[1,2,3,4,5,6,7,8,9,10]
const changing=numerics1.map((yenum)=>yenum*10).map((yenum)=>yenum+5)
console.log(changing)

let numerics11=[1,2,3,4,5,6,7,8,9,10]
const changing1=numerics1.map((yenum1)=>yenum1*10).map((yenum1)=>yenum1+5).filter((yenum)=>yenum>=80)
console.log(changing1)

const newnumeric1= numerics1.map( (value11)=>{ return value11+10})
console.log(newnumeric1)

//reduce

const myreduce=[2,4,6,8,10,12]

const mytotal=myreduce.reduce(function (acc,currvalue) {
    console.log(`acc value is ${acc} and value of curr value ${currvalue}`)
    return acc+currvalue
},acc=0)

console.log(mytotal)

const myreduce1=[2,4,6,8,10,12]
const mytotal1=myreduce.reduce((acc,curr)=> acc+curr,0)
console.log(mytotal1);

const shoppingcart=[
    {
        item:"js course",
        price:999
    },
    {
        item:"python",
        price:10000
    },
    {
        item:"java course",
        price:12000
    },
    {
        item:"data science course",
        price:20000
    },
    {
        item:"css",
        price:5000
    }
];

const mybill=shoppingcart.reduce((acc,curr)=>acc+curr.price,0)
console.log(mybill)