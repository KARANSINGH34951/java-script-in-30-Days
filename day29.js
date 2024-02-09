// fetch & API 

const url="https://cat-fact.herokuapp.com/facts"

let para = document.getElementById("facts")
let btn = document.getElementById("btn")
// let Promise=fetch(url)
// console.log(Promise);

// const getfacts = async ()=>{
//   console.log("loading data");
//   let response= await fetch(url)
//   console.log(response);
//   console.log(response.status);
//   // console.log(response.type);
//   let data = await response.json()
//   console.log(data);
//   console.log(data[1]);
//   console.log(data[1].text);
//   para.innerText=data[1].text
// }

// // getfacts()

// btn.addEventListener("click",getfacts)

function getfacts(){
  fetch(url).then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
    console.log(data[2].text);
    // return data[0].text
  })
}

btn.addEventListener("click",getfacts)

 
// https->newtork request-> get request-> post request











