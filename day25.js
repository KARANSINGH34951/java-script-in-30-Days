let url ="https://cat-fact.herokuapp.com/facts"
const para=document.querySelector("#fact");
const btn=document.querySelector("#btn");


// const getfact= async()=>{
//     console.log("getting data...");
//     let response =await fetch(url)
//     console.log(response);
//     console.log(response.status);

//     let data= await response.json()
//     console.log(data);
    
//     para.innerText=data[0].text;
//     para.innerText=data[1].text;
// }

// btn.addEventListener("click",getfact);

//promise changing

function getfact(){
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        para.innerText=data[1].text;
    })
}

btn.addEventListener("click",getfact);













































   