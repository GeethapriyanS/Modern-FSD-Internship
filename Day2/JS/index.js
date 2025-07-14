//1.tag selector
const h = document.getElementsByTagName('h1');
console.log(h[0]);

//2.Id selector
const id = document.getElementById('a');
console.log(id);

//3.Class selector
const cls = document.getElementsByClassName('b');
console.log(cls[0]);

//4.Query selector
const query = document.querySelector('#a');//'h1', '.b', '#a'
console.log(query);

//5.Query selector all
const queryAll = document.querySelectorAll('h2');       
console.log(queryAll[0]);

//read or write
h[0].textContent = "Hello World";
id.textContent = "Hello World";

//styling
h[0].style.color = "red";
h[0].classList.add('newClass');//add class
h[0].classList.remove('newClass');//remove class
h[0].classList.toggle('newClass');//toggle class

const aa=document.createElement('h2');
aa.textContent = "New Heading";
document.body.appendChild(aa);//append child
document.body.insertBefore(aa, h[0]);//insert before