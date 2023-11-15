document.querySelectorAll('.project-card-sm .card-button').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.project-card-sm').classList.toggle('opened');
    });
  });
  