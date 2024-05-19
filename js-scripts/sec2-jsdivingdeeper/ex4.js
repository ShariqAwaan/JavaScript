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





//         Update the product's name, price and image when changing the selected option.


// iPhone SE 64GB Red

// US$ 450.00
//  iPhone SE 64GB Red
//  iPhone 11 128GB Black
//  iPhone 8 Plus 64GB Silver
// The price should be shown with 2 decimal places and should be preceded by the currency. Use the object below to retrieve the product information:

                    

    var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "iphoneSE.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "iphone11.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "iphone8plus.jpg"
            }
          }


        let image = document.getElementById("iphoneImage");
        let modelName = document.getElementById("iphoneName");
        let price = document.getElementById("iphonePrice");
        let options = document.getElementsByName("iphone");


    for (let a = 0; a < options.length; a++) {
    
    options[a].onchange = function (){
        if (options[0].checked) {
            image.src = phones.iphone_se_red.imageUrl;
            modelName.innerHTML = phones.iphone_se_red.name;
            price.innerHTML = phones.iphone_se_red.currency + " " + phones.iphone_se_red.price;
        }
         else if (options[1].checked) {
            image.src = phones.iphone_11_black.imageUrl;
            modelName.innerHTML = phones.iphone_11_black.name;
            price.innerHTML = phones.iphone_11_black.currency + " " + phones.iphone_11_black.price;
        }
         else{
            image.src = phones.iphone_8_plus_silver.imageUrl;
            modelName.innerHTML = phones.iphone_8_plus_silver.name;
            price.innerHTML = phones.iphone_8_plus_silver.currency + " " + phones.iphone_8_plus_silver.price;
        } 
    }
}