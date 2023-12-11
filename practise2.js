let div = document.querySelector("div");
console.log(div)

let id1=div.getAttribute("id");
console.log(id1)

let doc = document.querySelector("p")
// let doc1=doc.getAttribute("class");
// console.log(doc1)
// let doc2=doc.setAttribute("class","paragraph1")
// console.log(doc.setAttribute("class","paragraph1"))

let div1 = document.querySelector("div")// sconsole.dir(div1)

//creat and then add
let el = document.createElement("h1")
el.innerText="ending (append)"

let el2 = document.createElement("h1")
el2.innerText="starting prepend"

let div3=document.querySelector("div")
div3.append(el);//ending of the div
div3.prepend(el2)
div3.before(el2)
div3.after(el)


//create and then add

let elr = document.createElement("button")
elr.innerText="click me"

divr=document.querySelector("div")
divr.append(elr)



let para=document.querySelector("p")
para.remove()

let heading1=document.querySelector("h1")
heading1.remove()
