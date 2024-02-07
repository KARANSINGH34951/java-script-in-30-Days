// closure & lexical scope


//lexical
function init(){
  let name ="karan singh";
  console.log("outer func");

  function display(){
    let inner1="inner func"
    console.log(name); //acess of the varible inside  the inner function
  }

  function display1(){
    let inner2="inner func"
    console.log(name); //acess of the varible inside  the inner function
    // console.log(inner1); //cannot access among the inner funcs
  }
  display()
  display1()
}    

init()

// closure

// let orange=document.getElementById("orange").onclick=(()=>{
//   document.body.style.backgroundColor="orange"
// })

// let green=document.getElementById("green").onclick=(()=>{
//   document.body.style.backgroundColor="green"
// })

function clickhandler(color){
  // document.body.style.backgroundColor=`${color}`

  return function(){
    document.body.style.backgroundColor=`${color}`
  }
}

document.getElementById("orange").onclick=clickhandler("orange")
document.getElementById("green").onclick=clickhandler("green")











    












