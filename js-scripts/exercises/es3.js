









// Write a program that determines whether a given number is positive or negative.

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627

// Using a for loop output the elements in reverse order


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
  let solQ1 = solutionQ1();

  answerQ1.style.display = "block";
  answerQ1.style.color = "darkcyan";
  answerQ1.style.fontSize = "15px";
  answerQ1.innerHTML = solQ1;
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
  
  let solQ2 = solutionQ2();

  answerQ2.style.display = "block";
  answerQ2.style.color = "darkcyan";
  answerQ2.style.fontSize = "15px";
  answerQ2.innerHTML = solQ2;
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
  
  let solQ3 = solutionQ3();

  answerQ3.style.display = "block";
  answerQ3.style.color = "darkcyan";
  answerQ3.style.fontSize = "15px";
  answerQ3.innerHTML = solQ3;
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
  
  let solQ4 = solutionQ4();

  answerQ4.style.display = "block";
  answerQ4.style.color = "darkcyan";
  answerQ4.style.fontSize = "15px";
  answerQ4.innerHTML = solQ4;
}




//Q5
//  Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

let btnQ5 = document.getElementById("btnq5");
let answerQ5 = document.getElementById("pq5");

function solutionQ5(){
  let numbersArray = [1,13,22,123,49];
  for (let i = 0 ; i < numbersArray.length ; i++){
    numbersArray += i
  }
  // let answer = numbersArray[0] + numbersArray[1] + numbersArray[2] + numbersArray[3] + numbersArray[4];

  console.log (numbersArray);
}
console.log(solutionQ5())

btnQ5.onclick = function(){
  
  let solQ5 = solutionQ5();

  answerQ5.style.display = "block";
  answerQ5.style.color = "darkcyan";
  answerQ5.style.fontSize = "15px";
  answerQ5.innerHTML = solQ5;
}





