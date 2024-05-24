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
            document.getElementById("deliveryFee").innerHTML = "";
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


//Q3

// setInterval(timer , 1000);
// function timer(){
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     // document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
//     document.getElementById("time").innerHTML = (hours + ":" + minutes + ":" + seconds );
// }


let getSeconds = "00";
// let getmilliSeconds = getSeconds/1000;
let getMinutes = "00";
let getHours = "00";


let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let times = document.getElementById("time") ;


let startTime=undefined;

// let timer = setInterval (time , 1000);



function time(){
    
    getSeconds++; 
    if (getSeconds < 10 ){
        getSeconds = ("0"+getSeconds);
        
        
    }
    
    // getMinutes = ("0"+getMinutes);
    if(getSeconds >= 60){
        getSeconds = 0;
        getMinutes++;
        if( getMinutes < 10){
            getMinutes = ("0"+getMinutes);
        }
    }
    
    
    if(getMinutes >= 60){
        getMinutes = 0;
        getHours++;
        if(getHours <10){
            getHours = ("0" + getHours)
        }
    }

   let time = (getHours + ":" + getMinutes + ":" + getSeconds );
   return times.innerHTML = time;
    
}

startButton.addEventListener("click" , ()=>{
    if(!startTime){
        startTime = setInterval(time , 1000);
    }
});
stopButton.addEventListener("click" , ()=>{
    if (startTime){
        startTime = clearInterval(startTime);
    }
});
resetButton.addEventListener("click" , ()=>{
    clearInterval(startTime);
    startTime = null;
    getSeconds = "00";
    getMinutes = "00";
    getHours = "00";
    times.innerHTML = "00:00:00"
});





//If a product is ordered on March 26, 2020 and delivered on April, 02, 2020, how many days does it take to be delivered?

let orderDate = new Date("2020-03-26");
let deliveryDate = new Date("2020-04-02");

let totalTime = deliveryDate-orderDate;
let totalDeliveryTimeInDates = totalTime/(24*60*60*1000);
document.getElementById("deliveryTime").innerHTML += ("It took " + totalDeliveryTimeInDates + " days to deliver the parsel.");










