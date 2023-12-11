///function

function intro(){
    console.log("hello all");
    console.log("i m a human");
}

intro()

function addition(x,y){
    return x+y;
}

const result=addition(5,5)
console.log("result is",result);

function print(...parameter){
    return parameter;
}

console.log(print(200,400,600))


const user={
    username:"karan",
    id:34
}

function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and id is ${anyobj.id} `)
}
//handleobject(user)

handleobject({
    username:"karan singh",
    id:26
})


//scopes

const user1={
    username:"rohit",
    id:67,
    address:"13 nagar",

    welcomemessge: function(){
        console.log(`welcome to thew website ${this.username}`) 
    } 
}


user1.welcomemessge()

function chai(){
    let username1="karan singh"
    console.log(this.username1)
}

chai()

//second type of func declaration
const chai1=function (){
    let username1="karan singh"
    console.log(this.username1)
}

chai1()

//third type of func declaration

const chai2=()=>{
    let username1="karan singh"
    console.log(this.username1)
}

chai2()

const addition1=(n1,n2)=>{
    return n1+n2;

}
console.log(addition1(2,2))

//rerurn keyworld mot required in parameters
const add1=(num3,num4)=>(num3+num4)
console.log(add1(5,8))

//immediately invoked function expressions(IIFE)

function chai55(){
    console.log("hello")
}
chai55()


// ( function chai5(){
//     console.log("hello");
// } )();

( (name)=>{
    console.log("db-bank")
} )("test para");









