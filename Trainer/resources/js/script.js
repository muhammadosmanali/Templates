
let slideindex = 0;

slideshow(slideindex)
    
function slideshow(index) {
    let slide = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot-navigation');
    if(index >= slide.length ) {
        slideindex = 0;
    }
    if(index < 0) {
        slideindex = slide.length - 1;
    }
    
    for(let i = 0 ; i < slide.length; i++) {
        slide[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }
    
    slide[slideindex].style.display = "block";
    dots[slideindex].classList.add("active-dot");
}
    
document.querySelector('.arrow-left').addEventListener('click', function() {
    slideshow(--slideindex);
});
    
document.querySelector('.arrow-right').addEventListener('click', function() {
    slideshow(++slideindex);
});
    
document.querySelectorAll('.dot-navigation').forEach(function (elem) {
    elem.addEventListener('click', function () {
        // get index of the dot 
        let nodes = Array.prototype.slice.call(this.parentElement.children),
            dotIndex = nodes.indexOf(elem);

        // call the function for the index of clicked dot
        slideshow(slideindex = dotIndex)
    })
})
   
    
setInterval(function() {slideshow(++slideindex)}, 10000);
    


