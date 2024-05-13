//Q1
 

function square(num){
  let num1 = Math.pow(num,2);
  console.log("The square of " + num + " is " + num1);
}

square(5);


// function square(num,power){
//   let num1 = Math.pow(num, power);
//   console.log("The answer of " + num + " is " + num1);
// }

// square(4,3);

//Q2


function celsiusToFahrenheit(celsius) {
  let f = (celsius * 9/5) + 32;
  console.log (celsius + " degrees Celsius is equal to " + f);
}

celsiusToFahrenheit(25);

//Q3

function areaandperimeter(r) {
  let area = Math.PI * Math.pow(r, 2);
  let perimeter = 2 * Math.PI * r;
  console.log ("The area of the circle is " + area + " and the perimeter is " + perimeter);
}

areaandperimeter(4);

//Q4

function lastElementOfArray(arr){
   
   console.log("The last element of the array is " + arr[arr.length - 1]);

}
//let arr = [1, 2, 3 ,4]
lastElementOfArray([78,89,4,5,55]);
//console.log(lastElementOfArray(arr));

//Q5
//Write a JavaScript program to compute the sum and product of an array of integers


let arr = [2,3,4,5,6];
let sum = 0;
let product = 1;

for(let i = 0; i < arr.length; i++){
  sum += arr[i];
  product *= arr[i];
}

console.log("The sum of the given no. is " + sum + " and the product is " + product);


//Q6
// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

// 1st 2nd 3rd
function getOrdinal(n) {
    let ordinal = n % 100;
    console.log(ordinal)
    const ordinalNum = ordinal +( (o[(ordinal - 20) % 10]) || o[ordinal] || o[0])
    return ordinalNum
}


console.log(getOrdinal(21));

// 1st 2nd 3rd
function getOrdinal(n) {
  let ordinal = n % 100;
  let ordinalNum = ordinal + ( (o[(ordinal - 20) % 10] || o[ordinal] || o[0]));
  return ordinalNum;
}

console.log(getOrdinal(21));


// for (let i = 0; i < color.length; i++) {
  
//   const ordinalNumbers = getOrdinal(i + 1)
//    const result = ordinalNumbers + " choice is " + color[i]
//    console.log(result);
  
// }




//Q7
// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
    // Sample array :
    // array1 = [1,0,2,3,4];
    // array2 = [3,5,6,7,8,13];
    
    let array1 = [1,0,2,3,4];
    let array2 = [3,5,6,7,8,13];
    
    function sumOfIndex(num){
      let num1 = 0;
      for (let i=0 ; i<num.length ; i++){
    
        num1 += i;
      }
      console.log("The sum of each individual index value is " + num1 )
    }
    sumOfIndex(array1);
    sumOfIndex(array2);

    // let array3 = [1,0,2,3,4,15];
    // let array4 = [3,5,6,7,8,13,5,5];

    // function soi(num2){
    //   let num3 = 0;
    //   for(let i=0 ; i<num2.length; i++){
    //     num3 += i;
    //   }
    //   console.log(num3)
    // }
    // soi(array4)


                    

                        
    // var elements = document.getElementsByClassName("example");   

    // for (var a = 0; a < elements.length ; a+=1) {
    //     elements[a].style.color = "orange";
    //     elements[a].style['font-weight'] = "bold";
    // }


    let naame = 123;
    if (naame){
      console.log ("true");
    }
    else {
      console.log("false");
    }