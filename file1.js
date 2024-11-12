// Define and export the function
export function greet(name) {
  console.log(`Hello, ${name}!`);
  return 5;
}


// Function to fetch and process CSV
export function loadCSVFile(fileName) {
  fetch(fileName)  // Use the file name parameter in the fetch call
      .then(response => response.text())
      .then(data => {
          return parseCSV(data);
      })
      .catch(error => console.error('Error loading CSV file:', error));
}


// Function to parse CSV data
function parseCSV(data) {
  const rows = data.split('\n');
  const dentalservices = [];
  // Assume the first row contains headers
  const headers = rows[0].split(',');
  // Loop through each row (skipping header row)
  for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      
      if (values.length === headers.length) {
          const service = {};
          for (let j = 0; j < headers.length; j++) {
              service[headers[j].trim()] = values[j].trim();
          }
          dentalservices.push(service);
      }
  }
  return dentalservices;
}
