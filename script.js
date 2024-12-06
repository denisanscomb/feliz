// Select the image element
const image = document.getElementById('image');

// Define the images for toggling
const images = ['Denis.jpg', 'Jim.jpg'];
let currentIndex = 0;

// Event listener for image click
image.addEventListener('click', () => {
    // Switch to the next image in the array
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});
