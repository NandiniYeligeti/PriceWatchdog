//display.js

// Retrieve stored product IDs from session storage
console.log('Executing display.js');

var comparison = JSON.parse(sessionStorage.getItem('comparison'));

// Check if the comparison array is present and has at least two product IDs
if (comparison && comparison.length >= 2) {
    // Extract the first two product IDs for comparison
    var productId1 = comparison[0];
    var productId2 = comparison[1];
    console.log('productId1:', productId1);
    console.log('productId2:', productId2);

    // Construct the URL for the compare2 page with the extracted product IDs as URL parameters
    var compare2URL = '/compare2/' + productId1 + '/' + productId2;
    console.log('compare2URL:', compare2URL);

    // Handle click event on the compare button
    document.getElementById('compareButton').addEventListener('click', function() {
        // Redirect the user to the compare2 page
        window.location.href = compare2URL;
    });
} else {
    // Handle the case where one or both product IDs are missing from session storage
    alert('Insufficient product IDs for comparison.');
}