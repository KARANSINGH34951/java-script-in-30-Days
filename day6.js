//objects-part2

// const tinderuser= new object1()
// console.log(tinderuser)

const tinderuser ={};
console.log(tinderuser)

tinderuser.id="123abc"
tinderuser.name="karan"
tinderuser.login=false

console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('login'))


const regularuser={
    email:"karan@1",
    fullname:{
        userfullname:{
            firstname:"karan",
            middlename:"singh",
            lastname:"D"
        }
    },
    number:"12345678"
}

console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}

const obj2={
    5:"e",
    6:"f",
    7:"g"
}

const obj3={obj1,obj2}
console.log(obj3)

const obj4=Object.assign(obj1,obj2)
console.log(obj4) //concat

const obj5=Object.assign({},obj1,obj2)
console.log(obj5) //concat

const obj6={...obj1,...obj2}
console.log(obj6)


const user=[
    {
        user:"karansingh",
        password:"12345678"
    },
    {
        user:"karansingh",
        password:"12345678"
    },
    {
        user:"karansingh",
        password:"12345678"
    },
    {
        user:"karansingh",
        password:"12345678"
    },
    {
        user:"karansingh",
        password:"12345678"
    }
]

user[1].email
console.log(user)

