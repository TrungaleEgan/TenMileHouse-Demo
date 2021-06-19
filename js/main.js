// Variables
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var foodImages = document.getElementsByClassName("hero-food");
    for (i = 0; i < foodImages.length; i++) {
        foodImages[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > foodImages.length) {
        slideIndex = 1
    }
    foodImages[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change every 2 seconds
}

// Event Listeners