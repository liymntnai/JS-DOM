// DOM Manipulation

// Event Listeners

// element.addEventListener('click', function);

var button2=document.querySelector('.btn-2');
console.log(button2)

function alerBtn(){
    alert("I love js")
}

button2.addEventListener('click', alerBtn)
var i=true;
// Mouseover Event
const box3=document.querySelector('.box-3')
    function changeBgColor() {
        // if (i) {
        //     box3.style.backgroundColor='blue';
        //     i=false;
        // }
        // else{
        //     box3.style.backgroundColor='white';
        //     i=true
        // }
        box3.style.backgroundColor='blue';
    }
// var button3=document.querySelector('.btn-3');
// button3.addEventListener("click", changeBgColor)     
box3.addEventListener("mouseover", changeBgColor)

const revealBtn=document.querySelector('.reveal-btn')
const hiddenCon=document.querySelector('.hidden-content')

function reveal(){
    // if (hiddenCon.classList.contains('reveal-btn')) {
    //     hiddenCon.classList.remove('reveal-btn')
    // }
    // else{
    //     hiddenCon.classList.add('reveal-btn')
    // }
    hiddenCon.classList.toggle('reveal-btn')
}

revealBtn.addEventListener('click', reveal)

// EVENT PROBAGATION refers to how an event travels through the DOM Tree in
// an html document