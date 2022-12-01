document.addEventListener('DOMContentLoaded', () => {
  //   debugger;
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

  rating.addEventListener('change', (e) => {
    if (rating.value > 5) {
      rating.value = 5;
    }
    if (rating.value < 0) {
      rating.value = 0;
    }
    console.log(e);
  });

  const isEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const setError = (el, message) => {
    // debugger;
    const inputControl = el.parentElement;
    const errorSpan = inputControl.querySelector('.error');

    errorSpan.innerText = message;

    var inp = inputControl.querySelector('input');
    inp === null ? (inp = inputControl.querySelector('textarea')) : '';

    inp.classList.add('ring');
    inp.classList.add('ring-red-800');
    inp.classList.remove('ring-green-800');
  };

  const setSucess = (el) => {
    const inputControl = el.parentElement;
    const errorSpan = inputControl.querySelector('.error');

    errorSpan.innerText = '';

    var inp = inputControl.querySelector('input');
    inp === null ? (inp = inputControl.querySelector('textarea')) : '';

    inp.classList.add('ring');
    inp.classList.remove('ring-red-800');
    inp.classList.add('ring-green-800');
  };

  const validateReviewForm = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const orderDateVal = orderDate.value.trim();
    const ratingVal = rating.value.trim();
    const reviewTextVal = reviewText.value.trim();

    if (usernameVal === '') {
      setError(username, 'Name is required');
    } else {
      setSucess(username);
    }
    if (emailVal === '') {
      setError(email, 'Email is required');
    } else if (isEmail(email)) {
      setError(email, 'Provide a valid email address');
    } else {
      setSucess(email);
    }

    if (isNaN(Date.parse(orderDateVal)) || orderDateVal === '') {
      setError(orderDate, 'Date of order is required');
    } else {
      setSucess(orderDate);
    }

    if (ratingVal === '') {
      setError(rating, "Rating value can't be empty");
    } else if (ratingVal > 5 || ratingVal < 0) {
      setError(
        rating,
        'Rating value should be bigger or equal to 0 and smaller or equal to 5'
      );
    } else {
      setSucess(rating);
    }
    if (reviewTextVal === '') {
      setError(reviewText, "Review text can't be empty");
    } else {
      setSucess(reviewText);
    }
  };
});
