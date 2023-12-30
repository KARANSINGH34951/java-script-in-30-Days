let url ="https://api.thecatapi.com/v1/images/0XYvRd7oD"

let factpara=document.getElementsByClassName("para")

let Promise = fetch(url)
console.log(Promise);

const getfacts= async()=>{
    console.log("getting data.....");
    let response=await fetch(url);
    console.log(response); //
    console.log(response.status);

    let data=await response.json()
    console.log(data);
    console.log(data[0].innerText);
    // console.log(response2[0].text);
    // factpara=factpara.innerText=data[0].text
    // console.log(factpara);

}

getfacts()





























   