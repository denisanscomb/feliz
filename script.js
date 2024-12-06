// Select the image and heading elements
const image = document.getElementById('image');
const heading = document.getElementById('heading');

// Define images and corresponding texts
const images = [
    { src: 'Denis.jpg', text: 'Denis buys for' },
    { src: 'Jim.jpg', text: 'Jim' }
];

let currentIndex = 0;

// Event listener for image click
image.addEventListener('click', () => {
    // Switch to the next image and text
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex].src;
    heading.textContent = images[currentIndex].text;
});
