const prompt = require('prompt-sync')();
// var number = prompt("enter your number:");
// console.log(number);

// DAY 1 . GOING TO LEARN SOME BASICS ABOUT THE JS 
//EXE.2
console.log("heklo"); //just like print in python

let aa="karan singh";
console.log(aa);

//let var const difference
//EXE.3
console.log("difference between var , let, const");
const aurther="karan singh";
console.log(aurther);
var d=56;
let a=1;
let b=11;
let c=111;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//primitive data types
//EXE.4
//there are 7 primitive data types  N-N-S-S-B-B-U-->NULL-NUMBER-SYMBOL-STRING-BOOLEAN-BIGINT-UNDEFINIED

//data types
//dynamic langauge
//1- permitive ,2-non-permitives
//permitives- 7 types
//1-string,2-number,3-boolean,4-null,5-undefined,6-symbol,7-bigint

//Non-permitives(refernce)
//array,object,functions


let x = null
let y= 345;
let z= true;
let w =BigInt("456");
let u="harry";
let v =Symbol("i m a symbol"); 
let k=undefined;

console.log(x,y,z,u,v,w,k);
console.log(typeof(k))

//objects just like dictionary in python (key value pairs)
const item={
    "karan":"singh",
    "rohit":true,
    "kumar":67,
    "tina":null
}
console.log(item["karan"])
item["rohit"]="hello"
console.log(item["rohit"])
console.log(item)

//operation & expression 
//exe.6
//arithmetic
let g=10;
let f=90;
console.log(g+f);
console.log(g-f);
console.log(g*f);
console.log(g/f);
console.log(g**2);
// console.log(g//f);
console.log(g%f);
console.log(g++);
console.log(g);
console.log(g--);
console.log(g);

//assingment 
let e=50;
e+=5;
console.log(e);// +=,-+,%=,*=,**= other opertor

//comparative 

//==,>=,<=,!=,===,?,<,>,!==

o=90;
p=99

console.log(o==p)
console.log(o!=p)
console.log(o===p) //its also compare the data type of the variales
console.log(o!==p)
console.log(o>p)
console.log(o<p)
console.log(o>=p)
console.log(o<=p)


//logical 

//&&,||,!

let num = 5
let num2= 55
console.log(num<=num2 && num!=num2);
console.log(!num)

//ternary opertaor

mark4=56
mark5=67
console.log(mark4>mark5 ? "yes":"no");

//conditional expressions
//exe.7

//if statement - if else , if..else if statements

let age=12;
if (age>18){
    console.log("you are older than 18")
}
let age1=12;
if (age1>18){
    console.log("you are older than 18")
}
else{
    console.log("do not drive")
}

//let age3=
// age3=prompt("enter age :")
age3=45
age3=Number.parseInt(age3)
// if(age3>20){
//     alert("yup");
// }  alert giving error in terminal 

let marks=410;

if (marks>450){
    console.log("grade A");
}
else if (marks>400){
    console.log("grade B");
}
else if (marks>350){
    console.log("grade C");
}

else{
    console.log("fail");
}

let marks9=2;

switch(marks9){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.log("not valid");
}





