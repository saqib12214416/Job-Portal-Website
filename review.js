document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
  
    // Create new review element
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `
      <p>Rating: ${rating} Stars</p>
      <p>Feedback: ${feedback}</p>
    `;
  
    // Append review to the reviews section
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.appendChild(reviewItem);
  
    // Clear form fields
    document.getElementById('rating').value = '5';
    document.getElementById('feedback').value = '';
  });
  