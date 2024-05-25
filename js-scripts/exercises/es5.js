//Make an array of numbers that are doubles of the first array

let q1array = [1,3,4,5,23,7];

let doubledArray = q1array.map((item)=>{
  return item*2
});

console.log(doubledArray);

//Take an array of numbers and make them strings

let q2Array = [1,3,4,5,5,8];

let toStringedArray = q2Array.map((item)=>{
  return item.toString()
});

console.log(toStringedArray);

//Capitalize each of an array of names

let q3Array = ["ali" , "ahmed" , "shahid" , "atta"];

let capitalizedArray = q3Array.map((item)=>{
  return item[0].toUpperCase() + item.slice(1,);
})
console.log(capitalizedArray);

//Square the value of every element in the array

let q4Array = [1,3,4,5,22,9];

let squaredArray = q4Array.map((item)=>{
  return item**2;
});
console.log(squaredArray);

//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

let q5Array = [-1,7,-4,-2,4];

let total=0;
let solvedQ5Array = q5Array.map((item)=>{
  
  // total += item ;
  
  if ( item > 0){
    return total+=item;
  }
  if (q5Array == [] ){
  return q5Array = 0;
  }
  if ( item < 0){
    return q5Array=[];
  }

  });
  console.log(total);
// console.log(solvedQ5Array);

//Calculate the mean and median values of the number elements from the input array.


let q6Array = [1,4,2,65,76,44,11,21,97];

//Mean
let mean = 0;
let meaned = q6Array.map((item)=>{
  return mean += item/2;
});

//Median
let median = 0;
let medianed = q6Array.map((item)=>{
   
   let fullArray = item;
   return fullArray;
  });

  let sortedArray = medianed.sort((a,b) =>(a-b));

  let forOdd = medianed[((sortedArray.length+1)/2)-1];
  // console.log("odd no is ",forOdd);
  
  let forEven= Math.floor(((medianed[sortedArray.length/2]) + ((medianed[sortedArray.length/2])+1))/2);
  // console.log(forEven);

  function medianFunction(){
    if(medianed.length%2==0){
      return ("Median for even no. is : " + forEven);
    }
    else{
      return ("Median for odd no. is : " + forOdd);
    }
  }
console.log("The mean of the given array is : " , mean);
console.log("The sorted array is " , medianed);
console.log("The answer is :: " , medianFunction());




//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

let stringedInput = "Mudassir Abbas" ;
let splitedArrayFromInput = stringedInput.split(" ");
console.log(splitedArrayFromInput);


let solvedQ7Array = splitedArrayFromInput.map((item)=>{
  let newArrayOfFirstNo = item[0];
  // console.log(newArrayOfFirstNo);
  return newArrayOfFirstNo;
}); 

let abbrArray = solvedQ7Array.join(". ");
console.log(abbrArray);

//Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

let agesArray = [5 , 10 , 39 , 37 , 17];

let sortedAges = agesArray.sort((a, b) => a-b);

let mapedAges = sortedAges.map((item)=>{
  return item ;
})

console.log(mapedAges);

let ageDifference = mapedAges[mapedAges.length-1] - mapedAges[0];

console.log("The youngest member is of age : " , mapedAges[0]);
console.log("The oldest member is of age : " , mapedAges[mapedAges.length-1]);
console.log("The age difference is between the youngest and oldest is : " , ageDifference);

//Any array of numbers, return a new array that has only the numbers that are 5 or greater.

let randomArrayOfNumbers = [1 , 7, 3 , 33 , 9 ,11];

let greaterThanFiveArray = randomArrayOfNumbers.filter((item)=>{
  return item >= 5 ;
})
console.log(greaterThanFiveArray);

//Any array of numbers, return a new array that only includes the even numbers.

let arrayOfNumbers = [1 ,2 ,3 ,4, 5 ,6, 7, 8 ,9 ,10];

let onlyEvenNo = arrayOfNumbers.filter((item)=>{
  return item%2==0
})

console.log(onlyEvenNo);

//Any array of strings, return a new array that only includes those that are 5 characters or fewer in length

let arrayOfStrings = ["Shahid" , "John" , "Atta" , "Shahab" , "Mudassir" , "Wasey"];

let lengthGreaterThanFive = arrayOfStrings.filter((item)=>{
  return item.length <= 5;
})
console.log(lengthGreaterThanFive);



//1. a)create an array of colors and iterate it using map() . b) if color is red, show it in the browser.

let colors = ["blue" , "orange" , "green" , "white" , "red"];

let checkingRed = colors.map((item)=>{
  
return item

});


function red() {
  if (checkingRed.includes("red")) {
    return "red";
  } else {
    return "There is no red color";
  }
}

console.log(red());


// let filteredColors = checkingRed.filter((item)=>{
//   return item == "red"
// });

// console.log(filteredColors);



//2. create an object. const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ]; a) iterate it with map() and print the last names in the browser. b) Add Mr  with the last name and show it in the console.


 const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
 ];        


 let iteratedArray = persons.map((item)=>{
  return "Mr " + item.lastname;
 })

 console.log(iteratedArray);


//3. create an array i.e. array = ['javaScript' , 'CSS', 'HTML' , 'react js' , 'data structures and algorithms']. a) first iterate the array with map(). b) check if react js is present in the array or not using filter().

let array = ['javaScript' , 'CSS', 'HTML' , 'react js' , 'data structures and algorithms'];

let iteratedArr = array.map((item)=>{
  return item;
});

let filteredArr = iteratedArr.filter((item)=>{
  return item == "react js" ;
})

console.log(filteredArr);



//4. arary  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'']. a) iterate the array elements with map(). b) create a search field and enter some value (i.e. any name). if search matches any name in the array then only that name must be visible.


let input = document.getElementById("search");
let button = document.getElementById("searchBtn");
let answer = document.getElementById("para");

let arary  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'] ;

let itrArray = arary.map((item)=>{
  return item;
});


button.addEventListener("click" , ()=>{
  let inputt = input.value;
  let filteredArray = itrArray.filter((item)=>{
    return inputt == item;
  })
  return answer.innerHTML = filteredArray;
});





