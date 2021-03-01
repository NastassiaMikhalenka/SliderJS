
const next = document.querySelector('.next')
next.addEventListener('click', function(){
    slider(slide += 1);
});

const prev = document.querySelector('.prev')
prev.addEventListener('click', function(){
    slider(slide -= 1);  
});

let slide = 1;

function slider(n) {
    const slides = document.querySelectorAll('.item');
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if(n == 1){
        prev.style.display = "none";
      } else{
          prev.style.display = "block";
      }
    if(n == slides.length){
          next.style.display = "none";
      } else{
        next.style.display = "block";
      }

    slides[slide - 1].style.display = "block";
};
slider(slide);

