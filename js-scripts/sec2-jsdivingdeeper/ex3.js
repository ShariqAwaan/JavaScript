//Q1
//Reuse the function to convert Celsius to Fahrenheit made on exercise #2. But this time the celsius temperature should be informed in the input field below and the calculation done after pressing the button.

let celsiusTemp = document.getElementById("inputQ1");
let btnQ1 = document.getElementById("btnQ1");
let answerQ1 = document.getElementById("pQ1");

function solutionQ1(value){
  

  let F = (9 * value / 5) + 32 ;

  // console.log(F);

  return ("The temperature in Fahrenheit is " + F ) ; 
}

 

btnQ1.onclick = function(){
  let cTemp = celsiusTemp.value ;
  let solQ1 = solutionQ1(cTemp);
  answerQ1.style.display = "block";
  answerQ1.style.color = "orangered";
  answerQ1.style.fontSize = "15px";
  answerQ1.innerHTML = solQ1 ;
}

//Q2
// 2) Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years.

// let list = document.getElementById("list");
// let listinside = document.getElementsByClassName("li");

// // console.log(listinside[0].innerHTML);





  
  
  

//   for(let i = 0 ; i < listinside.length ; i++){
   
    
//     for (let years = 2022 ; years <= 2050 ; years += 4){
//       let years = listinside[i];
//       console.log((listinside[i]).innerHTML = years[i] );
//     }
//    }
    
  

  // console.log ("The world cup will be held in " + years )



//Q3
// 3) Use the input fields below to inform two grades and the number of absences of a student. Follow the rules below to inform the result:

// Minimum 70% presence is required to be approved (total number of classes is 20)
// Minimum average of 6.5 is required to be approved
// If the student fails, we need to inform what was the reason (absences, insufficient grade or both.)

let grade1 =  document.getElementById("firstInputOfQ3");
let grade2 = document.getElementById("secondInputOfQ3");

let absences = document.getElementById("thirdInputOfQ3");

let btnQ3 = document.getElementById("btnQ3");
let answerQ3 = document.getElementById("pQ3");



// console.log (absences.value);
// console.log(attendedClasses);
// console.log(averageOfBothGrades);

function solutionQ3(input1 , input2){
  
  if (grade1.value === "" || grade2.value === "" || absences === "" ){
    return ("Please fill all the fields first");
  }
  else{
    
     
    if (input2 < 70 && input1 < 6.5 )
      {
        return ("You failed because your attendence is less than 70% and also your average grades are less than 6.5 "  )
      }
    else  if (input2 < 70 && input1 > 6.5 ){
        return ("You failed because your attendence is less than 70%")
    }    
    else if (input2 > 70 && input1 < 6.5 ){
        return ("You failed because your average grades are less than 6.5")
    }
    else {
      return ("You Passed because your attendance and grades both are good and match passing criteria " + input2 + " % and your average is " + input1 )
    }
  }
}

btnQ3.onclick = function(){
  
  let average =  (( parseInt(grade1.value) + parseInt(grade2.value) ) /2);
  console.log (average);
  let totalClasses = 20 ;

  let attendedClasses = 20 - absences.value;
  
  console.log(attendedClasses);

  let percentageOfAttandace = (attendedClasses / totalClasses ) * 100 ;
  console.log(percentageOfAttandace);
  
  let solQ3 = solutionQ3( average , percentageOfAttandace);
  answerQ3.style.display = "block";
  answerQ3.style.color = "orangered";
  answerQ3.style.fontSize = "15px";
  answerQ3.innerHTML = solQ3 ;
}


//Q4



