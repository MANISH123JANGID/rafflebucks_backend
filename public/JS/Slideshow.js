$(document).ready(function(){
    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
  });

 


// var slideIndex = 0;
// showSlides();
// var slides,dots;

// function plusSlides(position) {
//     slideIndex += position;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     else if(slideIndex < 1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");

//       }
//         slides[slideIndex-1].style.display = "block";  
//         dots[slideIndex-1].className += " active";
//     }

// function currentSlide(index) {
//     if (index > slides.length) {index = 0}
//     else if(index < 1){index = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//         slides[index-1].style.display = "block";  
//         dots[index-1].className += " active";
//     }

// function showSlides() {
//     var i;
//     slides = document.getElementsByClassName("mySlides");
//     dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }


// var slideIndex1 = 0;
// showSlides1();
// var slides1,dots1;

// function showSlides1() {
//     var a;
//     slides1 = document.getElementsByClassName("mySlides1");
//     dots1 = document.getElementsByClassName("dot");
//     for (i = 0; i < slides1.length; i++) {
//        slides1[i].style.display = "none";  
//     }
//     slideIndex1++;
//     if (slideIndex1> slides1.length) {slideIndex1 = 1}    
//     for (i = 0; i < dots1.length; i++) {
//         dots1[i].className = dots1[i].className.replace(" active", "");
//     }
//     slides1[slideIndex1-1].style.display = "block";  
//     dots1[slideIndex1-1].className += " active";
//     setTimeout(showSlides1, 3000); // Change image every 8 seconds
// }

// function plusSlides1(position) {
//     slideIndex1 +=position;
//     if (slideIndex1> slides1.length) {slideIndex1 = 1}
//     else if(slideIndex1<1){slideIndex1 = slides1.length}
//     for (i = 0; i < slides1.length; i++) {
//        slides1[i].style.display = "none";  
//     }
//     for (i = 0; i < dots1.length; i++) {
//       dots1[i].className = dots1[i].className.replace(" active", "");
//   }
//   slides1[slideIndex1-1].style.display = "block";  
//   dots1[slideIndex-1].className += " active";
// }

// function currentSlide1(index1) {
//   if (index1> slides.length) {index1 = 1}
//   else if(index1<1){index1 = slides1.length}
//   for (i = 0; i < slides1.length; i++) {
//      slides1[i].style.display = "none";  
//   }
//   for (i = 0; i < dots1.length; i++) {
//       dots1[i].className = dots1[i].className.replace(" active", "");
//   }
//   slides1[index1-1].style.display = "block";  
//   dots1[index1-1].className += " active";
// }

