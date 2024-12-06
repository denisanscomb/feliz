// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const hiddenText = card.querySelector('.hidden');
    const name = card.querySelector('.name');

    // Toggle hidden text and name
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
      hiddenText.style.display = 'block';
      name.style.display = 'none';
    } else {
      hiddenText.style.display = 'none';
      name.style.display = 'block';
    }
  });
});
