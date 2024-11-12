// Import the function from file1.js
import { greet } from '/file1.js';

// Call the function with a parameter
var a = greet('Bob');
console.log(a);

document.addEventListener('DOMContentLoaded', () => {
    // Call the function with the desired CSV file
    displayProducts(loadCSVFile('Services.csv'));  // Pass the file path as a parameter
  });
  

  function displayProducts(dentalservices) {
    
    console.log(dentalservices);    
}

