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

//  let list = document.getElementById("list");
        
//  let listItems = list.querySelectorAll("li");
 
//  let index = 0;
 
//  for (let year = 2022; year <= 2050; year += 4) {
//      listItems[index].textContent += " " + year;
//           index++;
//  }

    





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
// Fill the html table below with the sales and print the total amount of sales in the last line. Don't include the sales that had a refund requested.

var sales = [

  {
      'student': 'Jason Gomes',
      'date': '10/06/2018',
      'amount': 34.99,
      'refundRequested': null
      
  },

  {
      'student': 'Carlos Blue',
      'date': '10/06/2018',
      'amount': 29.99,
      'refundRequested': null
      
  },

  {
      'student': 'Martin Heyes',
      'date': '11/06/2018',
      'amount': 39.99,
      'refundRequested': '13/06/2018'
      
  },

  {
      'student': 'Isabella Hopkins',
      'date': '11/06/2018',
      'amount': 29.99,
      'refundRequested': null
      
  },

  {
      'student': 'Andrew Walt',
      'date': '12/06/2018',
      'amount': 34.99,
      'refundRequested': null
      
  }

];

// let info_title = document.getElementById("infoTitle");
// let section1 = document.getElementById("section1");
// let section2 = document.getElementById("section2");
// let section3 = document.getElementById("section3");
// let section4 = document.getElementById("section4");
// let total_sales = document.getElementById("totalSales")


// for (let i = 0 ; i<sales.length ; i++){
//   let names = sales[i].student;
//   let dates = sales[i].date;
//   let amounts = sales[i].amount;
//   let refundRequests = sales[i].refundRequested;


//    for (let j = 0 ; j < names.length ; j++ ){
//     let name = names[j][0] ;
//     let date = dates[j][1] ;
//     let amount = amounts[j][2];
//     let refundRequest = refundRequests[j];
//     section1.innerHTML += name ; 
//     section2.innerHTML += date ;
//     section3.innerHTML += amount;
//     section4.innerHTML += refundRequest;
//    }
// }


//Q5
// Suppose our page receives two pieces of information about a person, her age and membership status (member / not a member). Then we need to show the price of a product based on the following rules:

// Members: Free
// Non-members under 18 years old: $ 6.00
// Non-members above 18 years old: $ 12.00
// All people above 65 years old: Free

var isMember = false;
    var age = 12;
    
    if (isMember == true || age >= 65) {
        console.log('The ticket for you is Free');
    }
    else if (age < 18) {
            console.log('The ticket price for you is $ 6.00');
        }
         else {
            console.log('The ticket price for you is $ 12.00');
        }
    
      





