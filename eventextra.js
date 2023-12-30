let btn = document.getElementById("btn") 
let btn1 = document.getElementById("btn1") 

btn.addEventListener("click",()=>{
  console.log("hello i m clicked");
  alert("BOOM I M HERE")
  document.querySelector(".box").innerHTML="i m changed now !"
})

btn1.addEventListener("dblclick",()=>{
  let input1=prompt("yooo !")
  console.log(input1);
})

//event bubbling

let child1=document.querySelector(".child")
let child2=document.querySelector(".childcontainer")
let child3=document.querySelector(".container1")

child1.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("child was cliked")
})

child2.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("child-container was cliked")
})

child3.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("container-1 was cliked")
  console.log(e);
})



// setInterval(()=>{
//   const numbersofcolors = ["red", "green","yellow","black","blue"];

// const randomColorinthebody = numbersofcolors[Math.floor(Math.random() * numbersofcolors.length)];

// child3.style.background = randomColorinthebody;


// },3000)

setTimeout(() => {
  

     const numbersofcolors = ["red", "green","yellow","black","blue"];
  
   const randomColorinthebody = numbersofcolors[Math.floor(Math.random() * numbersofcolors.length)];
  
   child2.style.background = randomColorinthebody;
  
  
},3000)




























