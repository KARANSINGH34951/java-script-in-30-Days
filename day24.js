//async//promises chains // callback hell revision

//sync behaviour

//line by line excution
// => log("first")=>log("second")=>log("third")

//async behaviour 
//=>log("third")=>log("second")=>log("first")

setTimeout(()=>{
    console.log("hello");
},3000)


//callback

function getdata(dataid){
    console.log("data with",dataid);
}

getdata(12345)

//data1=>data2=>data3(sync)


function getdata(dataid,getnextdata){

    setTimeout(()=>{
        console.log("data ID :",dataid);
        if (getnextdata){
            getnextdata()
        }  
    },2000) 
}

// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res);
//     })
// })


// getdata(1,()=>{
//     getdata(2)
// })

//promise chain

// function asyncfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("sum data 1");
//             resolve("sucess")
//         },5000)
//     })
// }

// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("sum data 2");
//             resolve("sucess")
//         },5000)
//     })
// }

// console.log("fetching data 1");
// let p=asyncfunc();
// p.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     let p1=asyncfunc1();
        
//     p1.then((res)=>{
//         console.log(res);
//     })
// })

//alternative way

// console.log("fetching data 1");
// let p=asyncfunc().then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     let p1=asyncfunc1().then((res)=>{
//         console.log(res);
//     })
// })

function api(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("wheather data");
            resolve(200)
        },2000)
    })
}
async function getapi(){
    await api()
}

getapi()

async function hell(){
    console.log("hell");
}

hell()









