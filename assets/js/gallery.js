var slideIndex = 0;
var timeoutID;
var slides = document.getElementsByClassName("gallery_slide");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex+=n-1;
    clearTimeout(timeoutID);
    showSlides(slideIndex);
}
  
// Thumbnail image controls
function currentSlide(n) {
    slideIndex=n-1;
    clearTimeout(timeoutID);
    showSlides(slideIndex);
}

function showSlides(x) {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    } else if (slideIndex<1){
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timeoutID = setTimeout(showSlides, 5000); // Change image every 5 seconds
}
