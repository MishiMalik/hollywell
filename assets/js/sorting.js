

// =============================================================================== sorting dropdown close
$('#sort').click(function() {
    $(this).parent().find('.mall-sort-child').toggleClass("show");
});

$(document).click(function (event) {
    var sortdrop = $("#sort");
    if (!sortdrop.is(event.target) && sortdrop.has(event.target).length === 0) {
        $('.mall-sort-child').removeClass("show");
    }
});
// ====================================================================================Sorting isotope
$(document).ready(function () {
    var $grid = $('.grid-mall').isotope({
        layoutMode: 'packery',
        itemSelector: '.mall-product',
        imagesLoaded: true,
        packery: {
            gutter: '.gutter-sizer',
            columnWidth: '.mall-product'
        },
        percentPosition: true,
        getSortData: {
            nameasc: '.name',
            namedesc: '.name',
            pricelow: '.price parseInt',
            pricehigh: '.price parseInt',
            /*old: function ($elem) {
                var dateStr = $elem.find('.date').text(),
                    dateArray = dateStr.split('-'),
                    year = dateArray[2],
                    month = dateArray[0],
                    day = dateArray[1];
                return new Date(year, month, day);
            }*/

            // old: function (mallInnerElem) {
            //     const dateElem = mallInnerElem.querySelector('.date')
            //     // Convert date to MM/DD/YYYY so it can be properly parsed
            //     const [day, month, year] = dateElem.textContent.split('/')
            //     return Date.parse(`${month}/${day}/${year}`)
            // }
        },
        sortAscending: {
            nameasc: true,
            namedesc: false,
            pricelow: true,
            pricehigh: false,
            old: false
        }
    });
    // bind sort button click
    $('.sort-by-mall-group').on('click', 'div', function () {
        var sortValue = $(this).attr('data-sort-mall');
        $grid.isotope({ sortBy: sortValue });
    });
    // bind filter button click
    $('.filter-by-mall-group').on('click', 'div.mall-filter', function () {
        var filterValue = $(this).attr('data-filter-mall');
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.mall-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'div', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    // Refresh grid everytime image get loaded
    /*$grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    */

});
