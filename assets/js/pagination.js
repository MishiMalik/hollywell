// ======================================================================================pagination.js
$(document).ready(function () {
    var itemsPerPage = 2;
    var productCards = $('.mall-product');

    // Initialize pagination.js
    $('#pagination-container').pagination({
        dataSource: productCards,
        pageSize: itemsPerPage,
        callback: function (data, pagination) {
            // Display the data for the current page
            var startIndex = pagination.pageNumber * pagination.pageSize;
            var endIndex = startIndex + pagination.pageSize;
            $('#product-cards-container').html(data.slice(startIndex, endIndex));
        }
    });
});
