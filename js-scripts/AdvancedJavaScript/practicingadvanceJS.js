//CallBack Functions


function get_user() {
    let user = {
        name: "ABC"
    }
    return user
}
let receivedUser = get_user()
// user obj


function greet_user(user) {
     console.log("Hi " + user.name + " How are you?")
}

console.log(greet_user(receivedUser))


//2


// function get_user(callback){

//     window.setTimeout(function(){
//         var u = {
//             'name': 'John' ,
//             "age": 19 ,
//             "profession": 'web development'            
//         };
//         callback(u);
//     }, 5000);

// }
        
// function greet_user(user) {
//     console.log('Hi I am ' + user.name + ', i am ' + user.age + ' years old and i am a ' + user.profession );
// }
        
// get_user(greet_user);


//3

setInterval(timer , 1000);
function timer(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    // document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = (hours + ":" + minutes + ":" + seconds );
}

//4

let button1 = document.getElementById("Btn1");
const body = document.getElementsByTagName("body");
  console.log(body)
// console.log(button1)
button1.addEventListener("click",() => {
  body[0].style.backgroundColor = "grey";
});

//5

let button2 = document.getElementById("Btn2");

button2.addEventListener("click" , ()=>{
  document.getElementById("para").style.display = "block"
}); 






//Error Handling;

//Task: Write a JavaScript function that takes an array and an index as arguments. The function should return the element at the specified index. If the index is out of bounds, the function should catch the error and return an appropriate error message.

function takingArguments(arr,index){
  try{
    index <= arr.length-1;
     (arr[index]);

    if (index < 0 || index > arr.length-1 ){
      throw new Error("The index is not found i.e. out of bound");
    }
  
  }
  catch(err){
  
    return (err.message);
    // console.log()
  }
}

console.log(takingArguments([1,2,3,4,5,6,7] , 8));




// try {
//   var user = get_user();
//   greet_user(user);
// } catch(err) {
//   console.log(err);
//   console.log('Hi, how are you?');
// }


// //Task: Create a custom error class InvalidAgeError. Write a function that takes a person's age as input and throws this custom error if the age is less than 0 or greater than 120. Use a try-catch block to catch the error and return an appropriate message.

// class InvalidAgeError extends Error{
//   constructor (message){
//     super(message);
//     this.message = message;

//   }
// }

// function ageChecker(age){
//   try {
//     if(age<=0 || age>120){
//       throw new InvalidAgeError("Please enter a valid age between 0 and 121")
//     }
//     if(age>0 || age<=120){
//       return "You are alive!"
//     }
//   } catch (error) {
//     return error.message;
//   }
// }

// console.log(ageChecker(0));


function onDivide(num1 , num2){
  try{
    if (num2 == 0 ){
      throw new Error("2nd no. is 0 so the answer is infinity")
    }
    let solution = num1/num2;
    return solution;
  }
  catch (err){
    return err.message;
  }
}

console.log(onDivide(6 , 0));




//JSON;



const person = {
  "name": "John Doe",
  "age": 30,
  "isEmployed": true
};
console.log(person);
let JSONPerson = JSON.stringify(person);
console.log(JSONPerson);
let OBJPerson = JSON.parse(JSONPerson);
console.log(OBJPerson);


//Local Storage



