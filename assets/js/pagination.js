// $(document).ready(function() {
//     var products = $(".mall-product");
//     var data = []
//     products.each(function() {
//         data.push({id: $(this).attr("id")})
//     })

//     var pageSize = 4
    
//     $("#pagination-container").pagination({
//       dataSource: data,
//       pageSize: pageSize,
//       className: '',
//       callback: function(data, pagination) {
//         handlePagination(data, pagination.pageNumber);
//       }
//     });


//     function handlePagination(data, pageNumber) {
//         // Calculate the start and end indexes of the current page
//         var startIndex = (pageNumber - 1) * pageSize;
//         var endIndex = startIndex + pageSize;

//         console.log(data, startIndex, endIndex);
        
//         // Slice the data array to get only the products for the current page
//         // var products = data.slice(startIndex, endIndex);
//         var products2 = data;
    
        
//         // Hide all product cards
//         $(".mall-product").hide();
//         // $(".grid-mall").empty()

//         // console.log(products);
        
//         // Show only the product cards for the current page
//         $.each(products2, function(index, product) {
//         //     console.log(product.id);
//           $("#" + product.id).show();
//         // console.log(products.filter("#" + product.id));
//         //     $(".grid-mall").append(products.filter("#" + product.id))
//         });
//       }
      
//   });
  