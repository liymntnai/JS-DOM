// //GetElementById() --Used to get an element from the document by its id

// const title=document.getElementById("main-heading");
// console.log(title);

// //GetElementByClassName()
// const list=document.getElementsByClassName("list-items");
// console.log(list);
// //GetElementByTagName()
// const lists=document.getElementsByTagName("li");
// console.log(lists);

// //querySelector()
// const div=document.querySelector('div');
// console.log(div);

// //querySelectorAll()


// Styling elements
// var title=document.querySelector('#main-heading');
// title.style.color='red';
// console.log(title);

// var list=document.querySelectorAll('.list-items');
// // list.style.fontSize=40;

// for(var i=0;i<list.length;i++ ){
//     list[i].style.fontSize='2rem';
// }

// Creating elements

var ul=document.querySelector('ul');
var li=document.createElement('li');
// Adding elements
ul.append(li);

// Modifying the text
const fli=document.querySelector('.list-items')
console.log(fli.innerText);
console.log(fli.textContent)
console.log(fli.innerHTML)

li.innerText='X-men';

// Modifying attributes and classes
li.setAttribute('id', 'main-heading');
li.style.color='red'

li.removeAttribute('id');
li.classList.add('list-items')

const title=document.querySelector('#main-heading');

// Remove Elements
li.remove()
