// console.log(a);
// //Hoisting

// var a=10
// console.log(a)
// //console.log(b)

// let b=100
// console.log(b)

// const c=23
// // c=20
// console.log(c)

// //1.Named function
// // funname()-output
// function funname(){
//     console.log("Named Function")
// }
// funname()

// //2.Function Expression
// // func()-type-error
// var func=function(){
//     console.log("Functional Expression")
// }
// func()

// //3.Arrow Function
// // func1()-type-error
// var func1=()=>{
//     console.log("Arrow Function")
// }
// func1()

// //IIFE - Immediate Invoked Function Expression

// (()=>{
//     console.log("IIFE");
//     }
// )()

// // Parameters,Arguments
// function add(param1,param2){
//     console.log(param1,param2)
// }
// add(1,2)

//1.Id selector
const h=document.getElementsByTagName('h1');
console.log(h[0]);