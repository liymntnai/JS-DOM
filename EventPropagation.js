// EVent probagation refers to how an event travels through the DOM Tree
// in the html document

window.addEventListener("click", function(){
    console.log('window')}, false);

document.addEventListener("click", function(){
    console.log('document')},false) ;
    
document.querySelector('.div2').addEventListener("click", 
function(e){
    // e.stopPropagation()
    console.log(e)
},{once:true});

document.querySelector('.div1').addEventListener('click',function(){
    console.log('div1')
},false);

document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.target.innerText='clicked');
},false);