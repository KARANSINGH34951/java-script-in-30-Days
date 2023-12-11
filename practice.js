// const prompt = require('prompt-sync')();


// let input1=prompt("enter the number:")
// if (input1 %5==0){
//     console.log("mutiple of 5")
// }
// else{
//     console.log("not a mutiple off 5")
// }

//practise

let items=[120,300,340,500,1000,10]
console.log("Before discount",items)
let i=0;

for(let val of items){
    let offer = items[i]-val*(10/100);
    items[i]=offer;
    i++;
}
console.log("After discount",items)

let vege = ["potato","tomato","cabbage","califlower",34,94,56,78];
vege.push("ladyfinger","brinjal")
console.log(vege)
let deleteditem=vege.pop()
console.log(vege)
console.log(deleteditem)
console.log(vege.toString())


const sum=(a,b)=>{
    return a+b;
}
console.log(sum(5,5))
let total =0
function func(string){
    for(let val of string){
        if (val=="0" || val== "a"  || val=="e" || val=="i" || val=="u"){
            total+=1
        }
    }
    console.log("total vowel : " ,total)
}

func("aaaaaaaa")

// arr=[1,2,3,4,5]
// arr.forEach(element,index,arr => {

//    console.log(element,index,arr) ;
// });

arr2=[2,4,6,8,10]
arr2.forEach(element => {
    console.log(element**2)  
});

//map














