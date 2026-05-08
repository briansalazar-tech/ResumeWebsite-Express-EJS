// Functionality used to display the current visitors on the resume page.
var visits;

window.addEventListener('load', function() {
    fetch('https://crc-api-function.azurewebsites.net/api/HttpTrigger?count=get')

    .then(response => response.text())
    .then(data => {
        // Parse the HTML string into a DOM object
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Get the body content
        visits = doc.querySelector('body').innerText;
        document.getElementById("resumeviews").textContent = visits;

        console.log(visits);
    })

    // Display 0 if there are issues getting view count.
    .catch(error => console.error('Error fetching the page:', error));
    document.getElementById("resumeviews").textContent = "0";

});
