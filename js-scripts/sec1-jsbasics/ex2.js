//Q1
console.log("Q1");

var celsiusTemp1 = 38;
var celsiusTemp2 = 20;
var celsiusTemp3 = -1;


function celsiusToFahrenheit(celsius) {
  var f = (celsius * 9/5) + 32;
  return f;
}

//var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(celsiusTemp1 + " degrees Celsius is equal to " + celsiusToFahrenheit(celsiusTemp1) + " degrees Fahrenheit.");
console.log(celsiusTemp2 + " degrees Celsius is equal to " + celsiusToFahrenheit(celsiusTemp2) + " degrees Fahrenheit.");
console.log(celsiusTemp3 + " degrees Celsius is equal to " + celsiusToFahrenheit(celsiusTemp3) + " degrees Fahrenheit.");

//Q2
console.log("Q2");

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

console.log("The Top 3 Students are: " +classification.slice(3, 6));

//Q3
console.log("Q3");

var course = {
  'title': "Learn to Code in Python 3",
  'categories': ['programming', 'technology', 'python'],
  '5_stars_reviews': 420,
  '4_stars_reviews': 80,
  '3_stars_reviews': 33,
  '2_stars_reviews': 20,
  '1_stars_reviews': 4
}

console.log("The title of the course is: " + course.title);
console.log("The main category of the course is: " + course.categories[0]);

var totalStars = course['5_stars_reviews'] + course['4_stars_reviews'] + course['3_stars_reviews'] + course['2_stars_reviews'] + course['1_stars_reviews'];
var percentageof5Stars = (course['5_stars_reviews'] / totalStars) * 100;
console.log(Math.round(percentageof5Stars) + "% of students gave 5 stars");

//Q4
console.log("Q4");

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

var shoppingList1 = shoppingList.pop();
var shoppingList2 = shoppingList.unshift(shoppingList1);
var shoppingList3 = shoppingList.push("Cheese" , "Eggs");

console.log(shoppingList);


