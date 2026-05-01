// Simple test to verify that the API endpoint for the Azure function is reachable.
// Additional testing performed using a local Function and using Postman.
// Once local test passed, deployed Azure function, tested locally and in the web console.
// Resumeview.js file also console logs output of Azure function app.

fetch('https://crc-api-function.azurewebsites.net/api/HttpTrigger?count=get')
  .then(response => {
    if (response.ok) {
        console.log('API endpoint reachable.')
      return response.json(); // Parse the JSON data from the response
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log(data); // Handle the data from the response
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });