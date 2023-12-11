let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame= document.querySelector("#newgamebtn")
let msgcontainer= document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno=true

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const diasablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText=""
    }
}

const resetgame=()=>{
    turno=true
    enableboxes()
    msgcontainer.classList.add("hide")
   
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked")
        if(turno){
            box.innerText="O";
            turno=false;  
        }
        else{
            box.innerText="X"
            turno=true
        }
        box.disabled=true

        checkwinner();
    });
});

const showwinner=(winner)=>{
    msg.innerText=`congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    diasablebox()
}

const checkwinner=()=>{
    for (pattern of winpattern){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let posval1 =boxes[pattern[0]].innerText;
        let posval2 =boxes[pattern[1]].innerText;
        let posval3 =boxes[pattern[2]].innerText;

        if (posval1!= "" && posval2 !="" && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
                console.log("winner",posval1)
                showwinner(posval1)
            }
        }
    }
};

newgame.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)




    











    











    











    
