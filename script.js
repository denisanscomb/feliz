const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

spinButton.addEventListener('click', () => {
  const randomDegree = Math.floor(3600 + Math.random() * 360); // Spins at least 10 times
  const finalDegree = randomDegree % 360; // Final stopping angle
  const selectedSegment = Math.floor(finalDegree / 72) + 1; // Calculate segment number (72 degrees per segment)

  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    alert(`The wheel stopped on segment ${selectedSegment}!`);
  }, 4000); // Wait for the spin to complete
});
