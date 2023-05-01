// ========================================================================AOS
AOS.init();

// ========================================================================navbar close on scroll and click
$('.open-icon').on('click',function(){
    $('.close-icon').css('display','block');
    $(this).css('display','none');
    $('.menu-links').css('left','0');
    $('body').css('overflow-y','hidden');
});
$('.close-icon').on('click',function(){
    $(this).css('display','none');
    $('.open-icon').css('display','block');
    $('.menu-links').css('left','-300px');
    $('body').css('overflow-y','auto');
});
// $(function () {
//     $(document).click(function (event) {
//         var navbar = $(".collapse");
//         if (!navbar.is(event.target) && navbar.has(event.target).length === 0) {
//             var clickover = $(event.target);
//             var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
//             if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//                 $("button.navbar-toggler").click();
//             }
//         }
//     });

// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   // scrollFunction()
//   var currentScrollPos = window.pageYOffset ;
//      if(currentScrollPos > prevScrollpos + 45){
//         var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
//         if (_opened === true ) {
//             $("button.navbar-toggler").click();
//         }

//     }
//     prevScrollpos = currentScrollPos;
//   }


//   ================================================================================Flags dropdown select
function format(item, state) {
    if (!item.id) {
        return item.text;
    }
    var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
    var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
    var url = state ? stateUrl : countryUrl;
    var img = $("<img>", {
        class: "img-flag",
        width: 26,
        src: url + item.element.value.toLowerCase() + ".svg"
    });
    var span = $("<span>", {
        text: " " + item.text
    });
    span.prepend(img);
    return span;
}

$(document).ready(function () {
    $("#countries").select2({
        templateResult: function (item) {
            return format(item, false);
        },
        templateSelection: function (item) {
            return format(item, false);
        }
    });

});



//   ===================================================================================================carousel
$('.testimonials').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
        }
    }
})

$('.partners').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,

        }
    }
})

$('.related-products').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
        }
    }
})





