// JavaScript to toggle between images when clicked
const image = document.getElementById('image');

// Define the images to toggle
const images = ['Denis.jpg', 'Jim.jpg'];
let currentIndex = 0;

image.addEventListener('click', () => {
    // Toggle the image
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});
