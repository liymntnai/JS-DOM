// DOM Manipulation

const ul=document.querySelector('ul')
const li=document.createElement('li');

ul.append(li);

li.innerText='X-men';

li.setAttribute('id', 'main-heading');
li.removeAttribute('class')
li.remove()
li.classList.add('list-items')
// Traverse the DOM

// Parent Node Traversal
const html = document.documentElement;
console.log(html.parentNode);
console.log(li.parentElement.parentElement);
console.log(li.parentElement.parentNode)


// // Child Node Traversal
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)
console.log(ul.firstElementChild);

// Sibling Node Traversal
const div=document.querySelector('div')
console.log(div.childNodes)
console.log(ul.previousSibling)
console.log(ul.previousElementSibling)
console.log(ul.nextSibling)
console.log(ul.nextElementSibling)
