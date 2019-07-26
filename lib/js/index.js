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

let i = 2;
// Jquery
$(".homescreen__leftArrow").click(() => {
  const leng = $(".carousel").length
  for(let l = 0; l < leng; l++ ) {
    let carousel = $(".carousel")[l]
    carousel.style.opacity = 0;
  }
  i -= 1;
  if (i < 0) {
    i = 2;
  }
  let carousel = $(".carousel")[i]
  carousel.style.opacity = 1;
})

$(".homescreen__rightArrow").click(() => {
  const leng = $(".carousel").length
  for(let l = 0; l < leng; l++ ) {
    let carousel = $(".carousel")[l]
    carousel.style.opacity = 0;
  }

  i += 1;
  if (i >= 3) {
    i = 0;
  }

  let carousel = $(".carousel")[i]
  carousel.style.opacity = 1;
})
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
