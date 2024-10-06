/*
 * Theme Name: luzuk
*/
var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}



/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    $('.primary-navigation').append('<div id="mobile-menu-overlay" />');

    $('.toggle-mobile-menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').toggleClass('mobile-menu-active');

        if ( $('body').hasClass('mobile-menu-active') ) {
            if ( $(document).height() > $(window).height() ) {
                var scrollTop = ( $('html').scrollTop() ) ? $('html').scrollTop() : $('body').scrollTop();
                $('html').addClass('noscroll').css( 'top', -scrollTop );
            }
            $('#mobile-menu-overlay').fadeIn();
        } else {
            var scrollTop = parseInt( $('html').css('top') );
            $('html').removeClass('noscroll');
            $('html,body').scrollTop( -scrollTop );
            $('#mobile-menu-overlay').fadeOut();
        }
    });
}).on('click', function(event) {

    var $target = jQuery(event.target);
    if ( ( $target.hasClass("publishable-icon") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
        return;
    }
    jQuery('body').removeClass('mobile-menu-active');
    jQuery('html').removeClass('noscroll');
    jQuery('#mobile-menu-overlay').fadeOut();
});

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
    
    function mtsDropdownMenu() {
        var wWidth = $(window).width();
        if(wWidth > 865) {
            $('#navigation ul.sub-menu, #navigation ul.children').hide();
            var timer;
            var delay = 100;
            $('#navigation li').hover( 
              function() {
                var $this = $(this);
                timer = setTimeout(function() {
                    $this.children('ul.sub-menu, ul.children').slideDown('fast');
                }, delay);
                
              },
              function() {
                $(this).children('ul.sub-menu, ul.children').hide();
                clearTimeout(timer);
              }
            );
        } else {
            $('#navigation li').unbind('hover');
            $('#navigation li.active > ul.sub-menu, #navigation li.active > ul.children').show();
        }
    }

    mtsDropdownMenu();

    $(window).resize(function() {
        mtsDropdownMenu();
    });
});


/*---------------------------------------------------
/*  Vertical menus toggles
/* -------------------------------------------------*/
jQuery(document).ready(function($) {

    $('.widget_nav_menu, #navigation .menu').addClass('toggle-menu');
    $('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    $('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

    $('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="publishable-icon icon-plus"></i></span>');

    $('.toggle-caret').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });
});





/*----------------------------------------------------
/* Back to top smooth scrolling
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
    jQuery('a[href=#top]').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});



$('#slider .owl-carousel').owlCarousel({
           slideSpeed : 1500,
            autoplay: true,
              loop: true,
              // margin: 30,
              animateOut: 'lightSpeedOut',
              responsiveClass: true,
              responsive: {
                0: {
                  items: 1,
                  loop: true,
                  nav: true
                },
                600: {
                  items:1,
                  loop: true,
                  nav: true
                },
                1000: {
                  items:1,
                  loop: true,
                  nav: true,
                  loop: true,
                  margin: 0
              }
            }
          });

  
  $('#testimonials .owl-carousel').owlCarousel({
          loop:true,
          // margin:15,
          dots: true,
          nav:true,
          mouseDrag:true,
          autoplay: true,
         
          responsive:{
            0:{
              items:1,
              margin: 20
            },
            600:{
              items:1,
              margin: 5
            },
            1000:{
              items:1,
              margin: 5
            }
          }
        });  


  $('#gallery .owl-carousel').owlCarousel({
          loop:true,
          // margin:15,
          dots: true,
          nav:true,
          mouseDrag:true,
          autoplay: true,
         
          responsive:{
            0:{
              items:1,
              margin: 20
            },
            600:{
              items:2,
              margin: 30
            },
            1000:{
              items:3,
              margin: 40
            }
          }
        });  


//script for image gallery
Fancybox.bind("[data-fancybox]", {
    buttons: [
    "slideShow",
    "thumbs",
    "fullScreen",
    "close"
  ],
  loop: false,
  protect: true
}); 