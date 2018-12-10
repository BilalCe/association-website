$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav").toggleClass("active");
  });
  $("ul li").click(function() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).toggleClass("active");
  });
});

var swiper = new Swiper(".slider1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var swiper = new Swiper(".slider2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper(".slider2", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  } else if (y.matches) {
    var swiper = new Swiper(".slider2", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  } else {
    var swiper = new Swiper(".slider2", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
}

var x = window.matchMedia("(max-width: 580px)");
var y = window.matchMedia("(max-width: 991px)");

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
