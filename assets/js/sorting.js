

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
   //Ascending order
	var responsiveIsotope = [
		[480, 8],
		[720, 8]
	];
    var itemSelector2 = '.mall-product'; 
	var itemsPerPageDefault = 8;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter-mall';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$grid.isotope({
			filter: selector
		});
	}

	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector2;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}
		}
		return pages;
	}
	
	function setPagination() {
		var SettingsPagesOnItems = function(){
			var itemsLength = $grid.children(itemSelector2).length;
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector2;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$grid.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});
			currentNumberPages = page;
		}();

		var CreatePagers = function() {
			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);
			$isotopePager.html('');
            var $prevPage = $('<a href="javascript:void(0);" class="prevPage disabled-page">&laquo;</a>');
            $prevPage.appendTo($isotopePager);
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
                    if(i === 0){
                        $pager.addClass("active-page")
                        $prevPage.addClass("disabled-page")
                    }
					$pager.html(i+1);	
					$pager.click(function(){
                        $(".pager").removeClass("active-page")
                        $(this).addClass("active-page")
						var page = $(this).eq(0).attr(pageAtribute);
                        if(page==1) {
                            $prevPage.addClass("disabled-page")
                        } else {
                            $prevPage.removeClass("disabled-page")
                        }
                        console.log(page + 1);
                        if(parseInt(page) == currentNumberPages) {
                            $(".nextPage").addClass("disabled-page")
                        }else {
                            $(".nextPage").removeClass("disabled-page")
                        }
						goToPage(page);
                        // $prevPage.click(function() {
                        //     $(".pager").removeClass("active-page")
                        //     $(`.pager[${pageAtribute}=${(page - 1)}]`).addClass("active-page")
                        //     console.log(page - 1);
                        //     goToPage(page - 1)
                        // })
					});
				$pager.appendTo($isotopePager);
			}
            $prevPage.click(function() {
                var currentPage = $(`.pager.active-page`).attr(pageAtribute)
                currentPage = parseInt(currentPage)
                if(currentPage - 1 == 1) {
                    $prevPage.addClass("disabled-page")
                } else {
                    $prevPage.removeClass("disabled-page")
                }
                $(".nextPage").removeClass("disabled-page")
                $(".pager").removeClass("active-page")
                $(`.pager[${pageAtribute}=${(currentPage - 1)}]`).addClass("active-page")
                goToPage(currentPage - 1)
            })

            var $nextPage = $('<a href="javascript:void(0);" class="nextPage">&raquo;</a>');
            $nextPage.appendTo($isotopePager);
            $nextPage.click(function() {
                var currentPage = $(`.pager.active-page`).attr(pageAtribute)
                currentPage = parseInt(currentPage)
                $(".prevPage").removeClass("disabled-page")
                if(currentPage + 1 == currentNumberPages) {
                    $nextPage.addClass("disabled-page")
                } else {
                    $nextPage.removeClass("disabled-page")
                }
                $(".pager").removeClass("active-page")
                $(`.pager[${pageAtribute}=${(currentPage + 1)}]`).addClass("active-page")
                goToPage(currentPage + 1)
            })
			$grid.after($isotopePager);
		}();
	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filters a').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;
		setPagination();
		goToPage(1);
	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
		goToPage(1);
	});
});



