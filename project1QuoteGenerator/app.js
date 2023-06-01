var htmlquote=document.querySelector('.quote')
var htmlauthor=document.querySelector('.author');
var htmlbtn=document.querySelector('button')

const quotes=[
    {
        quote:' "Don'+'t be pushed around by the fears in your mind. Be led by the dreams in your heart"',
        author:'"Roy T. Bennett"'
    },
    {quote:'"Our lives begin to end the day we become silent about things that matter"',
     author:'Martin Luther King' 
    },
    {
        quote:'"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
        author:'Dalai Lama'
    },
    {
        quote:'"The journey of a thousand miles begins with one step"',
        author:'Lao Tzu'
    },
]
var mod=1
var l=quotes.length

htmlbtn.addEventListener('click', function(){

    htmlquote.innerText=quotes[mod%l].quote;
    htmlauthor.innerText=quotes[mod%l].author;
   mod++
 })