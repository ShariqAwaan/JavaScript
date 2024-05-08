//Q1



// Example usage:
var celsiusTemp = prompt("Enter the temperature in Celsius: ");


function celsiusToFahrenheit(celsius) {
  var f = (celsius * 9/5) + 32;
  return f;
}

var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(celsiusTemp + " degrees Celsius is equal to " + fahrenheitTemp + " degrees Fahrenheit.");
