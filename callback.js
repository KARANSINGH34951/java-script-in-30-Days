const callback=(arr)=>{
  console.log(arr+" hello and welcome");
}

const loadscript=(src,callback)=>{
  let sc =document.createElement("script");
  sc.src=src;
  document.onload=callback("karan")
}
 //promise

console.log('this is  promise');

let prom1= new Promise((resolve,reject)=>{
  let ab= Math.floor(Math.random());
  if(ab<0.5){
    reject("no randome number didnt support this")
  }
  else
  {
    setTimeout(() => {

      console.log('yes i m done after 3 sec');
      resolve("harry")
       
     },3000)
  }

 
})

prom1.then((a)=>{
  console.log(a);
  
}).catch((err)=>{
  console.log('error');
  
})


 
 















