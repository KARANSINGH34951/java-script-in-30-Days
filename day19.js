// oops

// -constractor
// prototypes
// classes
// instance

// #4 pillars 0f oops
// abstraction
// encapsulation
// inheritance
// polymorphism

// const user={
//     username:"karan",
//     logincount:8,
//     signin:true,

//     getuserdetails: function(){
//         console.log("karan in function")
//         console.log(`username:${this.username}`)

//     }
// }

// const user2={
//     username:"arjun",
//     logincount:4,
//     signin:false,
d
//     getuserdetails: function(){
//         console.log("karan in function")
//         console.log(`username:${this.username}`)

//     }
// }
// console.log(user["username"])
// console.log(user.getuserdetails())

function user3(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin
    // return this by default its implimenet by implicitly
    this.greeting=function(){
        console.log("hello sir")
        console.log(`welcome ${this.username}`)
    }
}
const funcusername=new user3("karan",12,true)
const funcusername2= new user3("rahul",18,false)
console.log(funcusername)
console.log(funcusername.constructor)
console.log(funcusername2)

// console.log(funcusername.logincount)






