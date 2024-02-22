// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all images with the 'fade-in' class
    var fadeImages = document.querySelectorAll('.fade-in');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        // Loop through each image
        fadeImages.forEach(function(image) {
            // Check if the image is in viewport
            if (isInViewport(image)) {
                // Add 'visible' class to trigger the fade-in animation
                image.classList.add('visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on page load
    handleScroll();
});
