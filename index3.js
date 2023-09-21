const guessWho = document.getElementById('guessWho')
const who = document.getElementById('firstImg')
const who2 = document.getElementById('Who')
const slides = document.getElementsByClassName("mySlides");
const message = document.getElementById('message')
const slideShow = document.getElementById('slideshow-container')
const next = document.getElementById('continue')
const lastParagraph = document.getElementById('lastParagraph')

setTimeout (function() {
    guessWho.style.display = 'block'
}, 1500)

setTimeout (function() {
    who.style.display = 'block'
    who2.style.display = 'block'
}, 3000)

setTimeout (function() {
    guessWho.style.display = 'none'
    who.style.display = 'none'
    who2.style.display = 'none'
}, 4500)

const vidOne = document.getElementById('videoOne')
const mine = document.getElementById('mine')

setTimeout (function() {
    videoOne.style.display ='block'
    mine.style.display ='block'
}, 5000)

setTimeout (function() {
    videoOne.style.display ='none'
    mine.style.display ='none'
}, 9500)

setTimeout (function() {
    message.style.display ='block'
}, 10000)

setTimeout ( function(){
    slideShow.style.display = 'block'
}, 10000)

let slideIndex = 0;
let timeoutId = null;


showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 2;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }
      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 3000); 
      }

next.addEventListener ("click", function(){
    slideShow.style.display = 'none'
    message.style.display ='none'
    lastParagraph.style.display = 'block'
})



