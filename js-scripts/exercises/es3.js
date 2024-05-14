
//Q1
// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


let btnQ1 = document.getElementById("btnq1");
let answerQ1 = document.getElementById("pq1");



  
  function solutionQ1(){
    for (let i=0 ; i<= 15 ; i++){
      if (i % 2 == 0 ){
        console.log (i + " is even");
        
      }
      else {
        console.log (i + " is odd");
        
      }
      
    }
  }



btnQ1.onclick = function(){

  solutionQ1()

  // let solQ1 = solutionQ1();

  // answerQ1.style.display = "block";
  // answerQ1.style.color = "darkcyan";
  // answerQ1.style.fontSize = "15px";
  // answerQ1.innerHTML = solQ1;
}


//Q2
// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

let btnQ2 = document.getElementById("btnq2-1");
let answerQ2 = document.getElementById("pq2-1");

function solutionQ2(){
  for (let i=0 ; i<= 100 ; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log ("FizzBuzz")
    }
    else if (i % 3 == 0 ){
      console.log ("Fizz");
      
    }
    else if(i % 5 == 0) {
      console.log ("Buzz");
      
    }
    else {
      console.log (i)
    }
    
    
  }
}


btnQ2.onclick = function(){
  
  solutionQ2()

  // let solQ2 = solutionQ2();

  // answerQ2.style.display = "block";
  // answerQ2.style.color = "darkcyan";
  // answerQ2.style.fontSize = "15px";
  // answerQ2.innerHTML = solQ2;
}



//Q3
// Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

let inputQ3 = document.getElementById("inputq3");
let btnQ3 = document.getElementById("btnq3")
let answerQ3 = document.getElementById("pq3");

function solutionQ3(){
  let inpQ3 = inputQ3.value ;
  let stringedinput = inpQ3.toString();
  let firstNo = parseInt(stringedinput[0]);
  let secondNo = parseInt(stringedinput[1]);
  let thirdNo = parseInt(stringedinput[2]);

  let cubeOfFirstNo = Math.pow(firstNo , 3);
  let cubeOfSecondNo = Math.pow(secondNo , 3);
  let cubeOfThirdNo = Math.pow(thirdNo , 3);

  

  let cubeOfAllNo = cubeOfFirstNo + cubeOfSecondNo + cubeOfThirdNo ;

  
   if (inpQ3 < 100 || inpQ3 > 1000){
    console.log ("The No. must be 3 digits");
   }
   else if ( cubeOfAllNo == inpQ3 ){
    console.log ("The no. is an ArmStrong No." , inpQ3);
   }
   else{
    console.log ("The no. is not ArmStrong No." , inpQ3);
   }
}

btnQ3.onclick = function(){
  
  solutionQ3()

  // let solQ3 = solutionQ3();

  // answerQ3.style.display = "block";
  // answerQ3.style.color = "darkcyan";
  // answerQ3.style.fontSize = "15px";
  // answerQ3.innerHTML = solQ3;
}

//Q4
// Write a JavaScript program to sum 3 and 5 multiples under 1000.

let btnQ4 = document.getElementById("btnq4");
let answerQ4 = document.getElementById("pq4-1");

function solutionQ4(){
  let result = 0
  for (let i=0 ; i<= 1000 ; i++){
    
    if (i % 3 == 0 || i % 5 == 0){
      result += i
    }
   
    }
    console.log (result)
    
  }



btnQ4.onclick = function(){

  solutionQ4()
  
  // let solQ4 = solutionQ4();

  // answerQ4.style.display = "block";
  // answerQ4.style.color = "darkcyan";
  // answerQ4.style.fontSize = "15px";
  // answerQ4.innerHTML = solQ4;
}




//Q5
//  Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

let btnQ5 = document.getElementById("btnq5");
let answerQ5 = document.getElementById("pq5");

let numbersArray = [1,13,22,123,49];
function solutionQ5(){
  let result = 0;
  for (let i = 0; i<numbersArray.length ; i++ ){
    let sum = numbersArray[i]
    result += sum;

  }
  console.log (result);
}

btnQ5.onclick = function(){

  solutionQ5()
  
  // let solQ5 = solutionQ5();

  // answerQ5.style.display = "block";
  // answerQ5.style.color = "darkcyan";
  // answerQ5.style.fontSize = "15px";
  // answerQ5.innerHTML = solQ5;
}

//Q6
// Write a program that determines whether a given number is positive or negative.
let inputQ6 = document.getElementById("inputq6")
let btnQ6 = document.getElementById("btnq6");
let answerQ6 = document.getElementById("pq6");

function solutionQ6(){
  let inpQ6 = inputQ6.value;
  if (inpQ6 > 0 ){
    console.log ("The given no. is a positive integer.");
  }
  else {
    console.log("The given no. is a negative integer.");
  }
}

btnQ6.onclick = function(){

  solutionQ6()
  
  // let solQ6 = solutionQ6();

  // answerQ6.style.display = "block";
  // answerQ6.style.color = "darkcyan";
  // answerQ6.style.fontSize = "15px";
  // answerQ6.innerHTML = solQ6;
}

//Q7
// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let inputQ7 = document.getElementById("inputq7")
let btnQ7 = document.getElementById("btnq7");
let answerQ7 = document.getElementById("pq7");

function solutionQ7(){
  let inpQ7 = inputQ7.value;
  
  if (inpQ7 < 12){
    console.log ("The Ticket price for you is 5 rupees.")

  }
  else if (inpQ7 < 0 || inpQ7 == ""){
    console.log ("Please put some value first");
  }
  else if (inpQ7 >= 12 && inpQ7 < 18 ){
    console.log ("The Ticket price for you is 10 rupees.")
  }
  else if (inpQ7 >= 18 && inpQ7 < 60 ){
    console.log ("The Ticket price for you is 20 rupees.")
  }
  else {
    console.log ("The Ticket price for you is 15 rupees.")
  }

}

btnQ7.onclick = function(){

  solutionQ7()
  
  // let solQ7 = solutionQ7();

  // answerQ7.style.display = "block";
  // answerQ7.style.color = "darkcyan";
  // answerQ7.style.fontSize = "15px";
  // answerQ7.innerHTML = solQ7;
}

//Q8
// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let inputQ8 = document.getElementById("inputq8")
let btnQ8 = document.getElementById("btnq8");
let answerQ8 = document.getElementById("pq8");


function solutionQ8(){
  let inpQ8 = inputQ8.value;
  
  if (inpQ8 >= 100){
    console.log ("The Purchase amount for you after discount is " + (inpQ8 -20));

  }
  else if (inpQ8 >= 50 && inpQ8 < 100 ){
    console.log ("The Purchase amount for you after discount is " + (inpQ8 -10));
  }
  else if (inpQ8 < 0 || inpQ8 == ""){
    console.log ("Please put some value first");
  }
  else {
    console.log ("Sorry but you got no discount and the amount is " + inpQ8)
  }

}

btnQ8.onclick = function(){

  solutionQ8();
  
  // let solQ8 = solutionQ8();

  // answerQ8.style.display = "block";
  // answerQ8.style.color = "darkcyan";
  // answerQ8.style.fontSize = "15px";
  // answerQ8.innerHTML = solQ8;
}

//Q9
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627


// let inputQ9 = document.getElementById("inputq9-3")
let btnQ9 = document.getElementById("btnq9");
let answerQ9 = document.getElementById("pq9");

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

function solutionQ9(){
  let result1 = 0;
  let result2 = 0;
  for (let i = 0 ; i < arr_1.length ; i++){
    let sumOf1stArray = arr_1[i];
    result1 += sumOf1stArray;
  }
  // console.log (result1);

  for (let i = 0 ; i < arr_2.length ; i++){
    let sumOf2ndArray = arr_2[i];
    result2 += sumOf2ndArray;
  }
  // console.log(result2)
  let finalResult = result1 + result2 ;
  console.log(finalResult);
}

btnQ9.onclick = function(){

  solutionQ9();
  
  // let solQ9 = solutionQ9();

  // answerQ9.style.display = "block";
  // answerQ9.style.color = "darkcyan";
  // answerQ9.style.fontSize = "15px";
  // answerQ9.innerHTML = solQ9;
}


//Q10
// Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// // Example output: 
// // true 3  be  false cannot  true 9 what 43 OR each item on a new line

let btnQ10 = document.getElementById("btnq10");
let answerQ10 = document.getElementById("pq10");

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function solutionQ10(){
  for (let i = 0 ; i< arr.length ; i++){
    let solvedArr = arr.reverse();

    console.log (solvedArr[i]);
  }
}

btnQ10.onclick = function(){

  solutionQ10();

  // let solQ10 = solutionQ10();

  // answerQ10.style.display = "block";
  // answerQ10.style.color = "darkcyan";
  // answerQ10.style.fontSize = "15px";
  // answerQ10.innerHTML = solQ10;
}

//Q11
// Given a number n Calculate the factorial of the number

let inputQ11 = document.getElementById("inputq11-2");
let btnQ11 = document.getElementById("btnq11");
let answerQ11 = document.getElementById("pq11");

function solutionQ11(n){
  // let factorial = 1
  let result = 1;
  for (let i = n ; i >= 1 ; i--){
    
    // factorial = factorial * i;
    result *= i ;
    
  }
  //  console.log (factorial);
  console.log (result);
  // console.log (typeof(result));
  // console.log (typeof(factorial));
}
// console.log (solutionQ11(7));


btnQ11.onclick = function(){
  let inpQ11 = parseInt(inputQ11.value);
  let solQ11 = solutionQ11(inpQ11);

  solQ11;

  // answerQ11.style.display = "block";
  // answerQ11.style.color = "darkcyan";
  // answerQ11.style.fontSize = "15px";
  // answerQ11.innerHTML = solQ11;
}


