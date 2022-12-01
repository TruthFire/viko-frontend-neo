document.addEventListener('', () => {
  const form = document.getElementById('reviewForm');
  const username = document.getElementById('nameInput');
  const email = document.getElementById('emailInput');
  const orderDate = document.getElementById('orderDate');
  const rating = document.getElementById('rating');
  const reviewText = document.getElementById('reviewTextarea');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateReviewForm();
  });

  const setError = (el, message) => {

    const inputControl = el.parentElement;
    const errorSpan = parentElement.querySelector

  };

  const validateReviewForm = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const orderDateVal = orderDate.value.trim();
    const ratingVal = rating.value.trim();
    const reviewTextVal = reviewText.value.trim();
  };

  if(usernameVal === '') {
    setError()
  }
});
