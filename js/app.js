$(function () {

    //preloader....

    $(window).on('load', function () {
      $('#preloder').fadeOut(1000);
    })


    //Banner Slider Activation

    $('.banner_slider').slick({
       prevArrow:'<i class="fa-solid fa-xl fa-angle-left banner_slider_arrow"></i>',
       nextArrow:'<i class="fa-solid fa-xl fa-angle-right banner_slider_arrow"></i>',
       responsive:[
        {
          breakpoint:575.98,
          settings: {
            prevArrow: 0,
            nextArrow:0,
          }
        }
       ]
    })

    //////manu activation

    $(window).on('scroll', function () {
      var scrollPosition = $(window).scrollTop()


    if (scrollPosition > 200) {
          $('#myNav').addClass('bg_menu')
    }else{
          $('#myNav').removeClass('bg_menu')
    }
    
    })


    ///type js....

    var typed = new Typed('.type', {
      strings: ['DESIGN','STYLE','CUTE DRESS'],
      typeSpeed:100,
      loop:true,
    });


    //latest product slider

    $('.latest_slider').slick({
      prevArrow:'<i class="fa-solid fa-xl fa-angle-left latest_slider_arrow"></i>',
      nextArrow:'<i class="fa-solid fa-xl fa-angle-right latest_slider_arrow"></i>',
      slidesToShow:4,
      slidesToScroll:4,
      responsive:[
        {
          breakpoint: 992,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint:575.98,
          settings: {
            slidesToShow:2,
            prevArrow: 0,
            nextArrow:0,
          }
        }
      ]
    });


    //coundown...

    $('#timer').countdown('2023/11/02', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item unique"><span>%D</span><br><span>Day</span></div>'
        + '<div class="count_down_item"><span>%H</span><br><span>Hours</span></div> '
        + '<div class="count_down_item"><span>%M</span><br><span>Min</span></div>'
        + '<div class="count_down_item unique"><span>%S</span><br><span>Sec</span></div>'));
    });


    ////filterizr.....


    // $('.gallery_filter_container').filterizr();



})



///veno box

new VenoBox();

////aos....
AOS.init();