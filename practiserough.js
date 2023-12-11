// setTimeout(function(){
//     alert("hello ji")
// },2000)

// setInterval(function(){
//     alert("hello 123")
// },2000)


//set a time out
const changeme=setTimeout(function(){
    document.querySelector("h1").innerHTML="js is in the market"
},4000)

//clear timeout
document.querySelector("#stop").addEventListener("click",function(){
    clearTimeout(changeme)
    console.log("STOPPED")

})















