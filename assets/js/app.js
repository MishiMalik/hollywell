// ========================================================================AOS
AOS.init();

// ========================================================================navbar close on scroll and click
$(function () {
    $(document).click(function (event) {
        var navbar = $(".collapse");
        if (!navbar.is(event.target) && navbar.has(event.target).length === 0) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        }
    });

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // scrollFunction()
  var currentScrollPos = window.pageYOffset ;
     if(currentScrollPos > prevScrollpos + 45){
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true ) {
            $("button.navbar-toggler").click();
        }

    }
    prevScrollpos = currentScrollPos;
  }


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
// ==============================================================inc/dec buttons
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});


// ==========================================================single products tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
  }
//   $(".defaultOpen").click(); 
// ===============================================rating system
$(document).ready(function () {
    $("#input-21f").rating({
        starCaptions: function (val) {
            if (val < 3) {
                return val;
            } else {
                return 'high';
            }
        },
        starCaptionClasses: function (val) {
            if (val < 3) {
                return 'label label-danger';
            } else {
                return 'label label-success';
            }
        },
        hoverOnClear: false
    });
    var $inp = $('#rating-input');

    $inp.rating({
        min: 0,
        max: 5,
        step: 1,
        size: 'lg',
        showClear: false
    });

    $('#btn-rating-input').on('click', function () {
        $inp.rating('refresh', {
            showClear: true,
            disabled: !$inp.attr('disabled')
        });
    });


    $('.btn-danger').on('click', function () {
        $("#kartik").rating('destroy');
    });

    $('.btn-success').on('click', function () {
        $("#kartik").rating('create');
    });

    $inp.on('rating.change', function () {
        alert($('#rating-input').val());
    });


    $('.rb-rating').rating({
        'showCaption': true,
        'stars': '3',
        'min': '0',
        'max': '3',
        'step': '1',
        'size': 'xs',
        'starCaptions': {0: 'status:nix', 1: 'status:wackelt', 2: 'status:geht', 3: 'status:laeuft'}
    });
    $("#input-21c").rating({
        min: 0, max: 8, step: 0.5, size: "xl", stars: "8"
    });
});