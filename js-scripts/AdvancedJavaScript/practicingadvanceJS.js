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

// try{
//   // index <= arr.length-1;
//   // console.log(arr[index]);
//   let a = 10/0;
//   console.log(a);
// }
// catch(err){
//   // index > arr.length-1 ;
//   console.log(err)
//   console.log("The index is not found i.e. out of bound")
// }


// try {
//   var user = get_user();
//   greet_user(user);
// } catch(err) {
//   console.log(err);
//   console.log('Hi, how are you?');
// }


//Task: Create a custom error class InvalidAgeError. Write a function that takes a person's age as input and throws this custom error if the age is less than 0 or greater than 120. Use a try-catch block to catch the error and return an appropriate message.

class InvalidAgeError extends Error{
  constructor (message){
    super(message);
    this.message = message;

  }
}

function ageChecker(age){
  try {
    if(age<=0 || age>120){
      throw new InvalidAgeError("Please enter a valid age between 0 and 121")
    }
    if(age>0 || age<=120){
      return "You are alive!"
    }
  } catch (error) {
    return error.message;
  }
}

console.log(ageChecker(0));

//JSON

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
