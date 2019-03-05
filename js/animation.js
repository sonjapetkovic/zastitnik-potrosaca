
$(document).ready(function(){
      
      //ANIMATE HAMBURGER BUTTON//
      $('.hamburger').click(function(){
          $(this).toggleClass('is-active');
      });
      
       //HEADER ANIMATING//
    
    function animateHeader(){
        
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 50){
            $('header').addClass('header-active  py-lg-2').removeClass('py-lg-3');
        }else{
             $('header').removeClass('header-active  py-lg-2').addClass('py-lg-3');
        }
        
    }
  
  //ANIMATION//
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }
    
    
    animateHeader();
    animation();
    $(window).scroll(function(){
        
        animateHeader();
        animation();
    }); //ANIMATION END//
    
    
     // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
     });//DOCUMENT READY END//