let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click",(event1)=>{
    console.log("button 1 was clicked")
    // console.log(event1)
    // console.log(event1.type)
});

btn1.addEventListener("click",(event1)=>{
    console.log("button 1 was clicked 2")
});

const handler3=()=>{
    console.log("button 1 was clicked 3")
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(event1)=>{
    console.log("button 1 was clicked 4")
});


btn1.removeEventListener("click",handler3);










// btn1.onclick=()=>{
//     console.log("btn1 was clicked")
//     let a=25;
//     a++;
//     console.log(a)
// }

let btn2=document.querySelector("#btn2")

btn2.onmouseover=()=>{
    console.log("yaho")
}

let div1=document.querySelector("div")
div1.onclick=(e)=>{
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX,e.clientY)

}





