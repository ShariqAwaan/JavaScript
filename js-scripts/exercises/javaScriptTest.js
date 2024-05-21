let data = [
  {
    id: 0,
    name: 'Ahmad',
    hobbies: ['cricket' , 'football']
  },
  {
    id: 1,
    name: 'Aliza',
    hobbies: ['cooking' , 'reading novels']
  },
  {
    id: 2,
    name: 'Shakeel',
    hobbies: ['gardening']
  }

]

document.getElementById("interests").innerText = ("The hobbies of Aliza are " + data[1].hobbies);


//Q2
let array = [
  ['apple' , 
    'banana' ,
    'mango'
  ] ,
  ['carrot' , 
    'ginger' ,
    'garlic'
  ] ,
  ['blue' , 
    'green' ,
    'maroon'
  ] 

]

function solutionQ2() {
  for (let i=0 ; i<array.length ; i++){
    // console.log(array[i]);
    for (let j = 0; j < array[i].length; j++) {
          console.log(array[i][j]);
    }
  }
  
}

 array[1][1]=("tomato");

console.log ('Solution Q2');
console.log ('This type of array is called Nested Arrays or multidimensional Arrays');
console.log (solutionQ2());
console.log (array);






// // Replace "ginger" with "tomato"
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (array[i][j] === 'ginger') {
//       array[i][j] = 'tomato';
//     }
//   }
// }

// console.log('Array after replacement:');
// console.log(array);



//Q3
console.log('Solution Q3');


let arr = ['Maths' , 'English' , 'Stats'];


arr.push('Discrete Mathematics');

console.log(arr);

arr[1]=("Chemistry");

console.log(arr)

arr.shift();

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift("Calculus");

console.log(arr);

let newArray = arr.slice(1,3);
console.log("The Original Array is ");
console.log(arr);
console.log("The New Array is ");
console.log(newArray);


//Q4

let i=false;
console.log(i)


// while (i==false){
//   console.log ("I am while loop ");
//   i++
// }
document.getElementById("whileLoop").onclick = function(){
  i=true;
  console.log(i);
  // console.log("Loop Stopped")
}

// console.log(document.getElementById("whileLoop").onclick = function(){
//   document.getElementById("whileLoop").innerHTML = "stopped"
// })


let userName = document.getElementById("userName");
console.log(userName.value);
function nameOfUser(){
  let updatedName = userName.value;
  console.log (updatedName)
}

userName.oninput = function(){
  nameOfUser();
}


