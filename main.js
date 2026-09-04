document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal');

  // Function to open the modal
  const openModal = () => {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Locks body scrolling behind modal
  };

  // Function to close the modal
  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlocks body scrolling
  };

  // Attach click listener to Header and Hero "Let's Talk" / "Quote" buttons
  // Add data-modal-target="contact-modal" to your CTA anchor tags or buttons
  const triggerButtons = document.querySelectorAll('[data-modal-target="contact-modal"]');
  
  triggerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents default link redirect
      openModal();
    });
  });

  // Close via 'X' button
  closeBtn.addEventListener('click', closeModal);

  // Close by clicking the dark overlay outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close via 'Escape' keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
});