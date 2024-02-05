// callback hell recape

let mynum=[23,45,67,88,89,-3,-5,-78]

let posnum= negavativenum(mynum,(x)=>x>0)
console.log(posnum);

function negavativenum(mynum,callback){
  let myarr=[]
  for(let item of mynum){
    if(callback(item)){
      myarr.push(item)
    }
  }
  return myarr  
}

function sum(x,y,callbacks){
  let rese=x+y;
  callbacks(rese)
}


let result=sum(4,6,(rese)=>{
  console.log("result :",rese);
})










// promises recape

let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order =(time,work)=>{

  return new Promise((resolve,reject)=>{

    if(is_shop_open){
      setTimeout(()=>{
        resolve(work())
      },time)
      // resolve(200)
      
    }
    else{
      // reject(404)
      reject(console.log("shop is closed"))
    }
  })
}

order(2000,()=>console.log(`the function ${stocks.Fruits[0]}`))
.then(()=>{
  return order(1000 ,()=>{
    console.log("production has started");
  })
})
.then(()=>{
  return order(2000,()=>{
    console.log("the fruit was chopped");
  })
  
})
.then(()=>{
  return order(2000,()=>{
    console.log("add water and ice");
  })
  
})
.then(()=>{
  return order(2000,()=>{
    console.log("start the machine");
  })
})
.then(()=>{
  return order(1000,()=>{
    console.log("select container");
  })
})
.then(()=>{
  return order(3000,()=>{
    console.log("toppings added");
  })
})
.then(()=>{
  return order(2000,()=>{
    console.log("serve ice cream");
  })
})
.catch(()=>{
  console.log("customer left");
  // console.log(err);
})
.finally(()=>{
  console.log("finally process ends");
})














