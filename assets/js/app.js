// $("#country_selector").countrySelect({
//     defaultCountry: "my",
//     onlyCountries: ['my', 'sg', 'tw'],
//     responsiveDropdown: true,
//     // preferredCountries: ['ca', 'gb', 'us']
// });
// ----------------------------------------------------------AOS
AOS.init();
// ========================================================================dropdown
// $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   });

//   ==========================================
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

//   =================================carousel
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