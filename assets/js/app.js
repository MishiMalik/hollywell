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

// =========================================================Load More

// $(".load-more-btn").click(function(){
//   $(".grid-mall").append(`<div class="mt-4 mall-product daily">
//   <a href="single-product.html" class="no-decoration">
//     <div class="products-card">
//       <div class="product-card-img">
//         <div class="carousel__slide">
//           <figure>
//             <div>
//               <img
//                 src="assets/images/t-pro10.webp"
//                 alt=""
//                 class=""
//               />
//             </div>
//           </figure>
//         </div>
//       </div>

//       <div class="product-card-text">
//         <p
//           class="product-heading heading ellipsis-1 name mb-0 pb-0 mb-lg-3 mb-2"
//         >
//           A. Brown Shoes
//         </p>

//         <div class="d-flex mb-lg-3 mb-2">
//           <i
//             class="bi bi-star-fill f-16 me-1 text-yellow"
//           ></i>
//           <i
//             class="bi bi-star-fill f-16 me-1 text-yellow"
//           ></i>
//           <i
//             class="bi bi-star-fill f-16 me-1 text-yellow"
//           ></i>
//           <i
//             class="bi bi-star-fill f-16 me-1 text-yellow"
//           ></i>
//           <i class="bi bi-star-fill f-16 text-yellow"></i>
//         </div>

//         <p
//           class="product-dec w-500 ellipsis-2 text-grey mb-lg-3 mb-2"
//         >
//           Lorem ipsum dolor sit amet consectetur
//           adipisicing.
//         </p>
//         <span class="d-flex align-items-center">
//           <del class="text-black">
//             <span class="cross-amount"
//               ><bdi
//                 ><span class="">$</span>499.00</bdi
//               ></span
//             >
//           </del>
//           <span class="new-amount ms-1 d-flex">
//             <span class="">$</span
//             ><span class="price">100.00</span>
//           </span>
//         </span>
//         <div class="my-lg-3 my-2">
//           <div class="d-flex align-items-center">
//             <p class="mb-0 pb-0 text weight">0.59kg</p>
//             <p class="mb-0 pb-0 in-stock ms-3">In Stock</p>
//           </div>
//         </div>
//         <div
//           class="d-flex justify-content-between align-items-center flex-wrap mt-4"
//         >
//           <div class="mb-md-0 mb-3">
//             <img
//               src="assets/images/free-shipping-icon.svg"
//               alt=""
//               class="img-fluid"
//               style="height: 30px !important; width: auto"
//             />
//           </div>
//           <div class="">
//             <button class="btn-main no-decoration w-400">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </a>
// </div>`);
// });


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





