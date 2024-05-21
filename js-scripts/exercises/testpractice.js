//Write a function that takes an array of numbers and returns the maximum number

function findMax(nums) {
  max = nums[0];
  for (let i=0 ; i<nums.length ; i++){
    if (nums[i] > max){
      max = nums[i]
    }
  }
  console.log(max)
}
// Example usage:
console.log(findMax([1, 3, 7, 22, 5])); // Output: 7


//Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  let reversedStr = str.split("").reverse().join("")
    console.log(reversedStr) 
  
  // console.log (reversedStr)
}
// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

//Write a function that checks if a given string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
  let palindrome = str.split("").reverse().join("");
  if (str == palindrome){
    console.log ("The given string is palindrome")
  }else{
    console.log ("the given string is not palindrome")
  }
  
}
// Example usage:
console.log(isPalindrome("rawar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//Write a function that takes an array of numbers and returns the sum of all the elements.

function sumArray(nums) {
  let answer = 0;
  for (let i=0 ; i<nums.length ; i++){
    let num = nums[i];
    answer += num;
  }
  console.log(answer)
}
// Example usage:
console.log(sumArray([1, 2, 33, 4])); // Output: 10


//Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let vowels = 0;
  for (let i= 0 ; i<str.length; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
      vowels++
    }
    
  }
  console.log(vowels)
}
// Example usage:
console.log(countVowels("hello i am Muhammad Shariq Abdullah world")); // Output: 3


//Write a function that takes two sorted arrays and merges them into a single sorted array.

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  for (let a = 0 ; a<arr1.length; a++){
    arr3.push(arr1[a]);
  }
  for (let a = 0 ; a<arr2.length; a++){
    arr3.push(arr2[a]);
  }
  console.log (arr3.sort((a,b)=>a-b));
}
// Example usage:
console.log(mergeArrays([1, 13, 4, 9, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]



