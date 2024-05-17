





// Q1
// Display Numbers From 1 to 3

function byForLoop1(){
  for (let i = 1 ; i<=3 ; i++){
    console.log(i)
  }
}

function solutionQ1(){
  let i = 1 ;
while(i<4){
  console.log (i);
  i++
}

}
//Q2
// Display Numbers from 3 to 1 ( do while)  

function byForLoop2(){
  for (let i = 3 ; i > 0 ; i--){
    console.log (i);
  }
}

function solutionQ2(){
  let j = 4;
do{
  j--
  console.log (j)
}
while (j>1)
}
  
//Q3
// Write a javascript function to print Even numbers in given array

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 82 , 9 , 10 , 11 , 12 ,13 ,14 , 50 , 55 ,56];

function byForLoop3(){
  for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 == 0 ){
      console.log ("Even :" + arr[i]);
    }
  }
}

function solutionQ3(){
  
let k = 0;
while(k < arr.length){
  if (arr[k] % 2 == 0){
    console.log("Even :" + arr[k])
  }
  k++
}

}



//Q4
// Write a javascript function to find the power of a number using while loop



let powerOfNumber = 2;

function solutionQ4(a , b){
  let i = 0;
  while(i<1){
    // let power = Math.pow(a , b);
    let power = a ** b;
    console.log(power);
    i++
    
  }
}
  

// solutionQ4()


//Q5
// Write a avascript function to find the no of digits in a number using while loop.

 



function solutionQ5(no){
  let number = no.toString();
  let i = 0;
  while(i<1){
    let noOfDigits = number.length;
   console.log(noOfDigits);
   i++
  }
}
// solutionQ5();


