// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

const multipleItemCarousel = document.querySelector('#carouselExampleControls');

if(window.matchMedia("(max-width:1500px)").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    })

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 6))) {
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},
            600);
        }
    });

    $('.carousel-control-prev').on('click', function(){
        if(scrollPosition > 0) {
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},
            600);
        }
    });
} 

else if(window.matchMedia("(max-width:900px)").matches){
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
      interval: false
  })

  $('.carousel-control-next').on('click', function(){
      if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
          console.log('next');
          scrollPosition = scrollPosition + cardWidth;
          $('.carousel-inner').animate({scrollLeft: scrollPosition},
          600);
      }
  });

  $('.carousel-control-prev').on('click', function(){
      if(scrollPosition > 0) {
          console.log('prev');
          scrollPosition = scrollPosition - cardWidth;
          $('.carousel-inner').animate({scrollLeft: scrollPosition},
          600);
      }
  });
} 

else if(window.matchMedia("(max-width:400px)").matches){
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
      interval: false
  })

  $('.carousel-control-next').on('click', function(){
      if(scrollPosition < (carouselWidth - (cardWidth * 2))) {
          console.log('next');
          scrollPosition = scrollPosition + cardWidth;
          $('.carousel-inner').animate({scrollLeft: scrollPosition},
          600);
      }
  });

  $('.carousel-control-prev').on('click', function(){
      if(scrollPosition > 0) {
          console.log('prev');
          scrollPosition = scrollPosition - cardWidth;
          $('.carousel-inner').animate({scrollLeft: scrollPosition},
          600);
      }
  });
} 

else {
    $(multipleItemCarousel).addClass('slide');
}

var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function() {
     mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
     mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
     mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
     mainImg.src = smallImg[3].src;
}
