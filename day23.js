const student={
    name:"karan",
    email:"ceitkaransingh2026@gmail.com",
    password:3495,

    printmarks: function(){
        console.log("inside the funcs",this.password)
    }
};
console.log(student.name);

let fruit=["fruit1","fruit2","fruit3","fruit4"]
fruit.push("fruit5")
console.log(fruit);

const employee={
    calctax(){
        console.log("tax is reduced");
    }
}
const karaarajun={
    salary:50000
}
const karaarajun2={
    salary:60000
}
const karaarajun3={
    salary:50000
}
const karaarajun4={
    salary:50000
}
const karaarajun5={
    salary:50000
}
const newemployee={
    calctax(){
        console.log("20% tax dedication");
    }
}

karaarajun.__proto__=employee
karaarajun2.__proto__=employee
karaarajun3.__proto__=employee
karaarajun4.__proto__=employee
karaarajun5.__proto__=employee
newemployee.__proto__=employee
console.log(karaarajun3);

//classes
class car{
    constructor(){
        console.log("this is a constructor");
    }
    color(){
        console.log("blue");
    }
    start(){
        console.log("stop");
    }
    stop(){
        console.log("stop");
    }
    
    setbrand(brandname){
        this.brandname=brandname;
        console.log("heyy this brand name is ",this.brandname);
    }
}

let obj1=new car();
obj1.setbrand("ferrari")
let obj2=new car();

//inheritance

class parent{
    constructor(){
        this.parentname=parentname;
    }
    hello(){
        console.log("hello");
    }
}

class child extends parent{
    constructor(){
        console.log("child");
    }
}
let obj4=new child();
console.log(obj4);


let DATA="old data";
class user{
    constructor (name,email){
        this.name=name;
        this.email=email
    }

    viewdata(){
        console.log("some data",DATA)
    }
}


let student1=new ("karan","ceitkaran@gmail.com")
let student2=new ("arjun","arjun@gmail.com")
student1.viewdata()

class admin extends user{
    constructor (name,email){
        super(name,email)
    }
    editdata(){
        DATA="NEW DATA"
    }
}
let adminuser=new admin("admin","admin@college.com")

adminuser.editdata()




















































