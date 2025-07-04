// function add(x){
//     return function(y){
//         return x+y;
//     }
// }
// var add5=add(5);
// console.log(add5(4))

// console.log("Initial Result");
// setTimeout(() => {
//   console.log("After 2 sec");
// }, 2000);
// console.log("Final Result");

// //Callback hell - Nested callbacks

// setTimeout(() => {
//   console.log("1st");
//   setTimeout(() => {
//     console.log("2nd");
//     setTimeout(() => {
//       console.log("3rd");
//       setTimeout(() => {
//         console.log("4th");
//         setTimeout(() => {
//           console.log("5th");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// Promises - higher priority (micro task)

// let myPromise = new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Suceess");
//     }else{
//         reject("Not Sucess");
//     }
// })

// myPromise.then((res)=>console.log(res)).catch((rej)=>console.log(rej));

// const handlePromise=async()=>{
//       try{
//         const a=await myPromise;
//         console.log(a);
//       }catch(err){
//         console.log("Error :"+err)
//       }finally{
//         console.log("Completed")
//       }
// }
// handlePromise();

// const fetchdata = async () => {
//     try{
//         const response = await fetch("https://dummyjson.com/products");
//         console.log(response);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//         } else {
//             console.log("Network response was not ok");
//         }
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// fetchdata();

// setInterval(()=>{
//     let a=0;
//     console.log(a=a+1);
// },1000)

console.log([]+[])//string
console.log([]+{})//[object object]  array of object
console.log({}+{})//[object object] [object object]
console.log({}+[])//0