const promiseone= new Promise(function(resolve,reject){
    // console.log("hello")
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
        // resolveInclude()    
    },2000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

// example 2

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },3000)
}).then(function(){
    console.log("async 2 resolved")
})

// example 3

// const promisethree= new Promise(function(resolve , reject){
//     setTimeout(function(resolve,reject){
//         resolve({username:"karan singh",email:"ceitkaransingh2026@gmail.com",password:3495})
//     },5000);
// })

// promisethree.then(function(user){
//     console.log(user)
// })


const promisefour=new Promise(function(reslove,reject){
    setTimeout(function(){
        let error=true
        if (! error){
            reslove({username:"karan",password:1234})
        }
        else{
            reject("error: something went wrong")
        }
    },6000)
});

promisefour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("finally the promise either resloved or rejected"))

//example 4 

const promisefive=new Promise(function(reslove,reject){
    setTimeout(function(){
        let error=false
        if (! error){
            reslove({username:"arjun",password:1114})
        }
        else{
            reject("error: something went wrong 2")
        }
    },3000)
});

async function consumePromiseFive(){
    try{
        const response=await promisefive;
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

async function getaluser(){
    const response=await fetch('https')
    response.json()
    const data = response.json()
    console.log(data);
}

getaluser()














