// $('').slick();

$('.item-container').slick({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true, 
  arrows: false,
  });

  $('.review .row').slick({

    slidesToShow: 3,
    slidesToScroll:1,
    centerMode:true,
    centerPadding:"0px",
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:`<i class="fa-solid fa-arrow-left"></i>`,
    nextArrow:`<i class="fa-solid fa-arrow-right"></i>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        centerMode:false,
        centerPadding:"20px",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });
