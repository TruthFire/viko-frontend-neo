document.addEventListener('DOMContentLoaded', () => {
  const showRevForm = document.getElementById('showRevForm');
  const formB = document.getElementById('reviewFormWrapper');
  var btnClicked = false;

  showRevForm.addEventListener('click', (e) => {
    formB.classList.toggle('shownForm');
    showRevForm.textContent = btnClicked ? 'Write a review...' : 'Hide form';
    btnClicked = !btnClicked;
  });

  document.getElementById('orderDate').valueAsDate = new Date();
});
