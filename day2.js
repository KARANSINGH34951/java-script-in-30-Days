//day2
//exe-9
const prompt = require('prompt-sync')();

// for loop ,for in loop, for of loop, while loop,do while loop

let sum=0;
for(i=0;i<=10;i++){
    console.log(i);
    sum+=i;
}
console.log(sum);

let collection={
    "marks1":90,
    "marks2":50,
    "marks3":70,
    "marks4":60
}
for(let o=0;o<Object.keys(collection).length;o++){
    console.log("the marks of "+Object.keys(collection)[o]+" are "+collection[Object.keys(collection)[o]]);
}

for (let a in collection){
    console.log(a+" is in number ="+collection[a]);
}

for (let b of "karan singh"){
    console.log(b);
}

//exe-10
//while loop
let n=0

while(n<=7){
    console.log(n);
    n++;
}

//do while loop

let m=0;
do{
    console.log(m);
    m++;
}while (m<=10)


//exe-11
//functions 

function addi(a,b){
    console.log((a+b)/2);
}

addi(4,4)
addi(9,9)

function intro(){
    console.log("i m karan singh ")
}

intro()


//practise

// while(true){
//     password=prompt("enter your password : ");
//     if (password==3495){
//         console.log("welcome to the system");
//         break;
//     }
//     else{
//         console.log("try again !")
//     }
// }

//string
//exe-13

let name="karan singh"; //single quote can also be used
console.log(name);
console.log(name.length);
console.log(name[2])

//template literals

let boy1="rahul"
let boy2="karan"

let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

//escape sequence
// \n,\',\",\t


//string methods
//exe-14












