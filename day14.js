const var1=document.getElementById("first").addEventListener("click", function(eve){
    // alert("yaho!!")
    console.log(eve)
    console.log(eve.type)
    console.log(eve.target)
    console.log(eve.clientX)
    console.log(eve.clientY)
})


// const var2=document.getElementById("images").addEventListener("click", function(eve){
//     // alert("yaho!!")
//     console.log("clicked images")
// })
// const var3=document.getElementById("second").addEventListener("click", function(eve){
//     // alert("yaho!!")
//     console.log("clicked second images")
//     eve.stopPropagation();
// })
//attchevent()

document.getElementById("images").addEventListener("click",function(e){
//    e.stopPropagation();
//    e.preventDefault();
   console.log(e.target.parentNode)
   let removeit = e.target.parentNode
   removeit.remove() 
    // removeit.parentNode.removeChild(removeit)
})
















