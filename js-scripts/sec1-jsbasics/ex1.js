//Q1

console.log("Q1");

console.log("This is ex1.js !");


//Q2
console.log("Q2");

let firstName = "John";
let lastName = "Cena";
let fullName = firstName + " " + lastName;
let yearOfBirth = 2004;
let age = 2024 - yearOfBirth;

document.getElementById("q2").innerHTML = ("Hi, My Name is" + " " + fullName + ". I am " + age + " years old and I am Learning JavaScript" );

//Q3
console.log("Q3");

let num1 = 10;
let num2 = 25;
let average = (num1 + num2) / 2;

document.getElementById("q3").innerHTML = ("The average of " + num1 + " and " + num2 + " is " + average.toFixed(2)); 

//Q4
console.log("Q4");

let firstContact = "123456789";
let secondContact = "11789456123";
let thirdContact = 456789123;




if(firstContact.length == 9){
  console.log("Contact 1 is valid");
}
else{
  console.log("Contact 1 is invalid");
}


if (parseInt(secondContact).length == 9){
  console.log("Contact 2 is valid");
}
else {
  console.log("Contact 2 is invalid");
}

if(thirdContact.toString().length == 9){
  console.log("Contact 3 is valid");
}
else{
  console.log("Contact 3 is invalid");
}

//Q5
console.log("Q5");

let power = Math.pow(32, 6);

console.log (power);

//Q6
console.log("Q6");

var NAME;

console.log("NAME is a valid variable name as it starts with a letter");

 var $num1;

 console.log( "$num1 is This is a valid variable name as it starts with a dollar sign");


console.log("typeof is not a valid variable name as it is a reserved keyword");

 console.log("first-name is not a valid variable name as it contains a hyphen");

var attempt_2;

console.log("attempt_2 is a valid variable name as it is not a reserved keyword and according to JS rules it starts with a letter and underscores and valid");

console.log("2ndAttemptt is not a valid variable name as it starts with a number");

console.log("full name is not a valid variable name as it contains a space");

//Q7
console.log("Q7");

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

//Q8
console.log("Q8");

var ulink = "www.udemy.com";

    console.log( ulink.replace( "" , "https://" ) );
    
var glink = "https://www.google.com";

    console.log( glink.replace( "https://" , "" ) );


console.log("Exercise 1 ends Here");

var courses = [
  {
      'title': 'Learn code in Python 3',
      'reviews': 6802,
      'students': 130129,
      'categories': ['programming', 'technology']
  },

  {
      'title': 'Learn PHP -  Beginner to Advanced',
      'reviews': 1204,
      'students': 30521,
      'categories': ['web development', 'programming']
  },

  {
      'title': 'Learn Microsoft Excel 2020',
      'reviews': 4209,
      'students': 18560,
      'categories': ['productivity', 'business']
  }
  
];

console.log( courses[1].categories );