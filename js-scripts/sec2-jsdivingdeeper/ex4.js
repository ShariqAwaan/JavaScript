// ) An e-commerce website has two types of shipments:

// Standard: 7 days
// Express: 3 days

// Choose the type of shipment


// When changing the type of shipment, update the information below:

// Order date:

// Expected date of delivery:

// Delivery Fee:

// * The date should be shown in the ISO Date format YYYY-MM-DD
// * The fee should be retrieved from the object below and shoud be shown with 2 decimal places.
                    

   


var shipments = {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };

        document.getElementById("category").onchange = function () {
            let date = new Date();
            let finalDate = (date.getDate() +"-"+ date.getMonth() +"-"+ date.getFullYear());
            // let deliveryDate = new Date();
            let standardDeliveryDate = (date.getDate()+7 +"-"+ date.getMonth() +"-"+ date.getFullYear());
            let expressDeliveryDate = (date.getDate()+3 +"-"+ date.getMonth() +"-"+ date.getFullYear());
            var selectField = document.getElementById("category");
            var selectedOption = selectField.options.selectedIndex;

            if(selectedOption == 0){
            document.getElementById("orderDate").innerHTML = "";
            document.getElementById("deliveryDate").innerHTML = "";
            document.getElementById("deliveryFee").innerHTML = shipments.standard.fee;
            }
            else if(selectedOption == 1){
            document.getElementById("orderDate").innerHTML = finalDate;
            document.getElementById("deliveryDate").innerHTML = standardDeliveryDate;
            document.getElementById("deliveryFee").innerHTML = shipments.standard.fee;
            }
            else {
                document.getElementById("orderDate").innerHTML = finalDate;
                document.getElementById("deliveryDate").innerHTML = expressDeliveryDate;
                document.getElementById("deliveryFee").innerHTML = shipments.express.fee;
            } 
            

    
        };

//         function updateShipmentInfo() {
//             // Get the selected shipment type
//             var shipmentType = document.getElementById("shipmentType").value;

//             // Get the current date
//             var orderDate = new Date();

//             // Calculate the expected delivery date
//             var leadTime = shipments[shipmentType].leadTime;
//             var expectedDate = new Date(orderDate);
//             expectedDate.setDate(orderDate.getDate() + leadTime);

//             // Retrieve the fee
//             var fee = shipments[shipmentType].fee;

//             // Update the information in the HTML
//             document.getElementById("orderDate").textContent = orderDate.toISOString().split('T')[0];
//             document.getElementById("expectedDate").textContent = expectedDate.toISOString().split('T')[0];
//             document.getElementById("deliveryFee").textContent = fee.toFixed(2);
//         }

//         // Run updateShipmentInfo on page load to initialize default values
//         window.onload = updateShipmentInfo;



//         Update the product's name, price and image when changing the selected option.


// iPhone SE 64GB Red

// US$ 450.00
//  iPhone SE 64GB Red
//  iPhone 11 128GB Black
//  iPhone 8 Plus 64GB Silver
// The price should be shown with 2 decimal places and should be preceded by the currency. Use the object below to retrieve the product information:

                    

//     var phones = 
//         {
//             'iphone_se_red': {
//                 'name': 'iPhone SE 64GB Red',
//                 'price': '450',
//                 'currency': 'US$',
//                 'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
//             },
//             'iphone_11_black': {
//                 'name': 'iPhone 11 128GB Black',
//                 'price': '869',
//                 'currency': 'EUR',
//                 'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
//             },
//             'iphone_8_plus_silver': {
//                 'name': 'iPhone 8 Plus 64GB Silver',
//                 'price': '519',
//                 'currency': 'US$',
//                 'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
//             }
//           }


// var phones = {
//   'iphone_se_red': {
//       'name': 'iPhone SE 64GB Red',
//       'price': '450',
//       'currency': 'US$',
//       'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
//   },
//   'iphone_11_black': {
//       'name': 'iPhone 11 128GB Black',
//       'price': '869',
//       'currency': 'EUR',
//       'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
//   },
//   'iphone_8_plus_silver': {
//       'name': 'iPhone 8 Plus 64GB Silver',
//       'price': '519',
//       'currency': 'US$',
//       'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
//   }
// };

// function updateProductInfo() {
//   // Get the selected product key
//   var selectedProductKey = document.getElementById("productSelect").value;

//   // Retrieve the product information from the phones object
//   var product = phones[selectedProductKey];

//   // Update the HTML elements with the product information
//   document.getElementById("productName").textContent = product.name;
//   document.getElementById("productPrice").textContent = product.currency + " " + parseFloat(product.price).toFixed(2);
//   document.getElementById("productImage").src = product.imageUrl;
// }

// // Run updateProductInfo on page load to initialize default values
// window.onload = updateProductInfo;