// DOM Manipulation

// EVent Delegation
// It allows users to append a SINGLE event listener to a parent-element
// that adds it to all tof its present AND future descendants that
// match a selector.

// const li1=document.querySelector('#football')

// li1.addEventListener('click', function (e) {
//     console.log('Football is clicked')
//     const target=e.target
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })

// const li2=document.querySelector('#basket')

// li2.addEventListener('click', function (e) {
//     console.log('Basket is clicked')
//     const target=e.target
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// const li3=document.querySelector('#boxing')

// li3.addEventListener('click', function (e) {
//     console.log('Boxing is clicked')
//     const target=e.target
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// const li4=document.querySelector('#tennis')

// li4.addEventListener('click', function (e) {
//     console.log('Tennis is clicked')
//     const target=e.target
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// const li5=document.querySelector('#golf')

// li5.addEventListener('click', function (e) {
//     console.log('Golf is clicked')
//     const target=e.target
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })

/*---  EVENT DELEGATION IN PRACTICE  ---*/
const ul=document.querySelector('#sports');
ul.addEventListener('click', function (e) {
console.log(e.target.getAttribute('id')+' is clicked')    
e.target.style.backgroundColor='lightgrey'
})

const li=document.createElement('li');

li.innerText='rugby'
li.setAttribute('id', 'rugby');

ul.append(li)