// async-await recape

let func =(a,b)=>{
  console.log(a+b);
}
func(8,8)


let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};

let is_shop_open = false;

// promises outline

// let order=(()=>{
//   return new Promise((resolve,reject)=>{
//     if(true){
//       resolve()
//     }
//     else{
//       reject()
//     }
//   })
// })

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()


// sync and await starts from here !


// let toppings_choice=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(console.log("which topping you like?"))
      
//     },3000)
//   })
// }


// async function kitchen(){
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   await toppings_choice()
//   console.log("D");
//   console.log("E");
  
  
// }

// kitchen()
// console.log("cleaning tables");
// console.log("cleaning dishes");
// console.log("other works");

function time(ms){
  return new Promise((resolve,reject)=>{
    if(is_shop_open){
      setTimeout((ms)=>{
        resolve(200)
      },ms)
    }
    else{
      reject(console.log("shop is under construction"))
    }

  })
}

async function kitchen(){
  try {
    await time(2000)
    console.log(`${stocks.Fruits[2]}`);
    await time(1000)
    console.log(`processing step2`);
    await time(2000)
    console.log(`processing step3`);
    await time(3000)
    console.log(`processing step4`);
    await time(1000)
    console.log(`processing step5`);
    await time(3000)
    console.log(`processing step6`);
  }
  catch(error){
    console.log("customer left");
  }

  finally {
    console.log("shop is closed finally");
  }
}

kitchen()











