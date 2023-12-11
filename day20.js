const p1=new Promise(resolve,reject)({
    alert("hey i  n in");
    setTimeout(()=>{
        resolve(3);
    },2000);
})

p1/TouchEvent(()=>{
    console.log("resolved successfully")
})