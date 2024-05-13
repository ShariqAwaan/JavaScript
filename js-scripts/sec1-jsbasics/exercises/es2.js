//Q1

// let randomNo = Math.floor((Math.random() * 10 ) + 1);

// console.log(randomNo);

// let userNo = document.getElementById("q1");

// let guessNo =  userNo.value;

// console.log(userNo);
// console.log(guessNo);
// document.getElementById("btn1").onclick = function answer(){
  
// if (randomNo == guessNo){
//   return ("Good Work the answer is same" + guessNo )
// }
// else {
//   return ("Not Matched the answer is" + randomNo)
// }

// }

// document.getElementById("p1").innerHTML = answer();

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".



let inputQ1 = document.getElementById("inputq1");
let btnQ1 = document.getElementById("btnq1");
let answerQ1 = document.getElementById("pq1");


function rndmNo(){
  let randomNo = Math.floor((Math.random() * 10 ) + 1);
  return randomNo.toString()
}

function solutionQ1(){
  let inpQ1 = inputQ1.value;
  let randNo = rndmNo();

  if (inpQ1 == randNo){
    return ("Good Work you enterd the same value i.e. :" + inpQ1);
  }
  else if(inpQ1 == 0){
    return ("Please select any no. first between 1-10")
  }
  else{
    return ("Not matched! Correct answer is :" + randNo)
  }
}

btnQ1.onclick = function (){
  let solQ1 = solutionQ1();
  answerQ1.style.display = "block";
  answerQ1.style.color = "rgb(113, 19, 38)";
  answerQ1.style.fontSize = "20px"
  answerQ1.innerHTML = solQ1;
}



//Q2
// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
let inputQ2_1 = document.getElementById("inputq2-1");
let inputQ2_2 = document.getElementById("inputq2-2");
let mplyBtn = document.getElementById("btnq2-1");
let dvdBtn = document.getElementById("btnq2-2");
let answerQ2_1 = document.getElementById("pq2-1");
let answerQ2_2 = document.getElementById("pq2-2");
//let inputq2_1 = iq2_1.value;
//let inputq2_2 = iq2_2.value;
function multiplication(){
  let inputq2_1 = inputQ2_1.value;
  let inputq2_2 = inputQ2_2.value;

  let ansMply = inputq2_1 * inputq2_2;

  return ("The answer is " + ansMply)
}

mplyBtn.onclick = function(){
  let mp1 = multiplication();
  answerQ2_1.style.display = "block";
  answerQ2_1.style.color = "rgb(113, 19, 38)";
  answerQ2_1.style.fontSize = "20px";
  answerQ2_1.innerHTML = mp1;
};


function division(){
  let inputq2_1 = inputQ2_1.value;
  let inputq2_2 = inputQ2_2.value;

  ansDvd = inputq2_1 / inputq2_2;

  return ("The answer is " + ansDvd)
}

dvdBtn.onclick = function (){
  let dvd1 = division();
  answerQ2_2.style.display = "block";
  answerQ2_2.style.color = "rgb(113, 19, 38)";
  answerQ2_2.style.fontSize = "20px";
  answerQ2_2.innerHTML = dvd1;
};

//Q3
// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 

let inputQ3 = document.getElementById("inputq3");
let btnQ3 = document.getElementById("btnq3");
let answerQ3 = document.getElementById("pq3");

function solutionQ3(){
  let inpQ3 = inputQ3.value;
  if (inpQ3[0] == "P" && inpQ3[1] == "y"){
    return inpQ3;
  }
  else if (inpQ3[0] == "p" && inpQ3[1] == "y"){
    return inpQ3;
  }
  else{
    
      return ("Py" + inpQ3);
    
  }
}

btnQ3.onclick = function(){
  let modifiedString = solutionQ3();
  answerQ3.style.display = "block";
  answerQ3.style.color = "rgb(113, 19, 38)";
  answerQ3.style.font = "20px"
  answerQ3.innerHTML = modifiedString;
}

//Q4
// Remove a character at the specified position of a given string and return the new string

let inputQ4_1 = document.getElementById("inputq4-1");
let inputQ4_2 = document.getElementById("inputq4-2");
let btnQ4 = document.getElementById("btnq4");
// let ansDq4_1 = document.getElementById("pq4-1");
let answerQ4 = document.getElementById("pq4-1");



function givenString(){
  let inpQ4_1 = inputQ4_1.value;
  let inpQ4_2 = inputQ4_2.value;
 
  let indexToRemove = inpQ4_1.indexOf(inpQ4_2);
  
  let newString = inpQ4_1.replace(inpQ4_1[indexToRemove] , "");
  

  return newString;

  
  
}
// console.log(givenString("any" , "n"));

btnQ4.onclick = function(){
  // let value1 = iq4_1.value;
  // let value2 = iq4_2.value;
  let solutionQ4 = givenString();
  answerQ4.style.display = "block";
  answerQ4.style.color = "rgb(113, 19, 38)";
  answerQ4.style.fontSize = "20px";
  answerQ4.innerHTML = solutionQ4;
  
}





//Q5
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 

let inputQ5 = document.getElementById("inputq5");
let btnQ5 = document.getElementById("btnq5");
let answerQ5 = document.getElementById("pq5");

function solutionQ5(){
  let inpQ5 = inputQ5.value;

  // let char1 = iq5_1[0];
  // let char2 = iq5_1[iq5_1.length-1];
  // let pstnchng;

  // pstnchng = char1;
  // char1 = char2;
  // char2 = pstnchng;

  // console.log (pstnchng);
  // console.log (char1);
  // console.log (char2);

  if (inpQ5.length > 1) {
  return inpQ5[inpQ5.length-1] + inpQ5.slice(1 , inpQ5.length-1) + inpQ5[0];
  }
  else {
    return ("The character length must be greater than 1");
  }
  
}

btnQ5.onclick = function (){
  let solQ5 = solutionQ5();

  answerQ5.style.display = "block";
  answerQ5.style.color = "rgb(113, 19, 38)";
  answerQ5.style.fontSize = "20px";
  answerQ5.innerHTML = solQ5;
}




//Q6
// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 

let inputQ6 = document.getElementById("inputq6");
let btnQ6 = document.getElementById("btnq6");
let answerQ6 = document.getElementById("pq6");

function solutionQ6(){
  let inpQ6 = inputQ6.value;

  return (inpQ6[0] + inpQ6 + inpQ6[0]);

}

btnQ6.onclick = function (){
  let solQ6 = solutionQ6();
  answerQ6.style.display = "block";
  answerQ6.style.color = "rgb(113, 19, 38)";
  answerQ6.style.fontSize = "20px";
  answerQ6.innerHTML = solQ6;

}


//Q7
//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

let inputQ7 = document.getElementById("inputq7");
let btnQ7 = document.getElementById("btnq7");
let answerQ7 = document.getElementById("pq7");

function solutionQ7(){
  let inpQ7 = inputQ7.value;

  if (inpQ7 <= 0 ){

    return ("Please add a positive integer greater than 0")
  }
  else if (inpQ7 % 3 == 0 && inpQ7 % 7 == 0){

    return ("The given no. is multiple of both 3 and 7");
  }
  else if (inpQ7 % 3 == 0){

    return ("The given no. is multiple of 3");
  }
  else if (inpQ7 % 7 == 0){

    return ("The given no. is multiple of 7");
  }
  else {

    return ("The given no. is niether multiple of 3 nor 7")
  }
  
}

btnQ7.onclick = function (){
  let solQ7 = solutionQ7();
  answerQ7.style.display = "block";
  answerQ7.style.color = "rgb(113, 19, 38)";
  answerQ7.style.fontSize = "20px";
  answerQ7.innerHTML = solQ7;
  
}

//Q8
//  Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

let inputQ8 = document.getElementById("inputq8");
let btnQ8 = document.getElementById("btnq8");
let answerQ8 = document.getElementById("pq8");

function solutionQ8(){
  let inpQ8 = inputQ8.value;

  if (inpQ8.length >= 3){

    return (inpQ8.slice(inpQ8.length-3 ) + inpQ8 + inpQ8.slice(inpQ8.length-3) );

  }
  else {
    return ("The length of given string must be greater than 3")
  }

}

btnQ8.onclick = function(){
  let solQ8 = solutionQ8();
  answerQ8.style.display = "block";
  answerQ8.style.color = "rgb(113, 19, 38)";
  answerQ8.style.fontSize = "20px";
  answerQ8.innerHTML = solQ8;
}

//Q9
// Write a JavaScript program to find the largest of three given integers. 

let inputQ9_1 = document.getElementById("inputq9-1");
let inputQ9_2 = document.getElementById("inputq9-2");
let inputQ9_3 = document.getElementById("inputq9-3");
let btnQ9 = document.getElementById("btnq9");
let answerQ9 = document.getElementById("pq9");

function solutionQ9(){
  let inpQ9_1 = parseInt(inputQ9_1.value);
  let inpQ9_2 = parseInt(inputQ9_2.value);
  let inpQ9_3 = parseInt(inputQ9_3.value);

  if (inpQ9_1 == inpQ9_2 && inpQ9_1 == inpQ9_3){
    return ("All the values are equal i.e. " + inpQ9_1)
  }
  else if (inpQ9_1 > inpQ9_2 && inpQ9_1 > inpQ9_3){
    return inpQ9_1;
  }
  else if (inpQ9_2 > inpQ9_1 && inpQ9_2 > inpQ9_3){
    return inpQ9_2;
  }
  else if (inpQ9_3 > inpQ9_2 && inpQ9_3 > inpQ9_1){
    return inpQ9_3;
  }
  else {
    return ("Please fill all the fields first!")
  }
}

btnQ9.onclick = function(){
  let solQ9 = solutionQ9();
  answerQ9.style.display = "block";
  answerQ9.style.color = "rgb(113, 19, 38)";
  answerQ9.style.fontSize = "20px";
  answerQ9.innerHTML = solQ9;
}

//Q10
// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// 1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// 2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// 3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

let inputQ10_1 = document.getElementById("inputq10-1");
let inputQ10_2 = document.getElementById("inputq10-2");
let btnQ10 = document.getElementById("btnq10");
let answerQ10 = document.getElementById("pq10");

function findingGrades(){
  let inpQ10_1 = parseInt(inputQ10_1.value);
  let inpQ10_2 = inputQ10_2.value;

  if (inpQ10_1 < 90 && inpQ10_2 == "Yes" ){
    return ("Your grade is not A+");
  }
  else if (inpQ10_1 < 90 && inpQ10_2 == "yes" ){
    return ("Your grade is not A+");
  }
  else if (inpQ10_1 >+ 90 && inpQ10_2 == "Yes"){
    return ("Your grade is A+ and True");
  }
  else if (inpQ10_1 >+ 90 && inpQ10_2 == "yes"){
    return ("Your grade is A+ and True");
  }
  else if (inpQ10_1 >= 89 && inpQ10_2 == "No"){
    return ("Your grade is A+ and False")
  }
  else if (inpQ10_1 >= 89 && inpQ10_2 == "no"){
    return ("Your grade is A+ and False")
  }
  else{
    return ("Your grade is not A+ and False")
  }

}
// console.log(findingGrades());
btnQ10.onclick = function (){
  let solQ10 = findingGrades();
  answerQ10.style.display = "block";
  answerQ10.style.color = "rgb(113, 19, 38)";
  answerQ10.style.fontSize = "20px";
  answerQ10.innerHTML = solQ10;
}



//Q11
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
let inputQ11_1 = document.getElementById("inputq11-1");
let inputQ11_2 = document.getElementById("inputq11-2");
let btnQ11 = document.getElementById("btnq11");
let answerQ11 = document.getElementById("pq11");

function solutionQ11(firstInput , secondInput){
  
  // console.log(inpQ11_1);
  // console.log(inpQ11_2);

  let sum = firstInput + secondInput;
  if (sum >=50 && sum <= 80){
    return ("65");
  }
  else if(sum <50 || sum > 80){
    return ("80");
  }
  else {
    return ("Please put some value first");
  }
}

btnQ11.onclick = function(){
  let inpQ11_1 = parseInt(inputQ11_1.value);
  let inpQ11_2 = parseInt(inputQ11_2.value);
  let solQ11 = solutionQ11(inpQ11_1 , inpQ11_2);
  answerQ11.style.display = "block";
  answerQ11.style.color = "rgb(113, 19, 38)";
  answerQ11.style.fontSize = "20px";
  answerQ11.innerHTML = solQ11;
}
