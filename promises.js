// function getdata(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(360)
//     },3000);
//   })
// }

async function getdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(360)
    },3000);
  })
} 

async function main(){

console.log('loding modules');
console.log('do something else');
console.log('Load data');
let data= await getdata()
console.log(data);
}
main()
// data.then((v)=>{
//   console.log('process data');

// console.log("task 2");

// })
















































