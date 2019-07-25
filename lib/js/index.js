let navItems = document.querySelectorAll(".homescreen__navbar--mobile");


const openNav = () => {
  document.getElementById("homescreen__header--mobile").style.width = "100%";
  let i = 0;
  for (i ; i < navItems.length; i++) {
    navItems[i].style.opacity = 1;
  }
}

const closeNav = () => {
  document.getElementById("homescreen__header--mobile").style.width = "0";
  let i = 0;
  for (i ; i < navItems.length; i++) {
    navItems[i].style.transition = ".1s";
    navItems[i].style.opacity = 0;
  }
}

// Jquery

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = $(".mySlides");
//   const dots = $(".dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
