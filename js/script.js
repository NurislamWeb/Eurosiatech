//**********************************************
//    banner part slider start 
//*********************************************** 
$('.banner-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    infinite: true,
    prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**********************************************
//    banner part slider end 
//*********************************************** 







//**********************************************
//    process video part start 
//*********************************************** 
$(document).ready(function(){
    $('.venobox').venobox(); 
});

//**********************************************
//    process video part end 
//***********************************************









//**********************************************
//    client part slider start
//***********************************************
$('.clients-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
      
      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows: false,
      }
    },
      
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: true,
          infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**********************************************
//    client part slider end
//***********************************************







//**********************************************
//    client part counter start
//***********************************************
jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
//**********************************************
//    client part counter end
//***********************************************








//**********************************************
//    concern logo slider start
//***********************************************
$('.concern-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
      
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
      
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//**********************************************
//    concern logo slider end
//***********************************************










//**********************************************
//    fixed menu js start
//***********************************************

// fixed menu js
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

//**********************************************
//    fixed menu js start
//***********************************************





//**********************************************
//    images post production page js start
//***********************************************
$(".beforeafterdrag").cndkbeforeafter( { mode: "drag", beforeTextPosition: "top-left" } );
//**********************************************
//    images post production page js start
//***********************************************