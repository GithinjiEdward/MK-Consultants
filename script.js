document.addEventListener('DOMContentLoaded', function () {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId && document.querySelector(targetId))
        document.querySelector(targetId).scrollIntoView({behavior:'smooth'});
    });
  });

  // CONTACT FORM
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formMessage = document.getElementById("formMessage");
      if(formMessage){
        formMessage.innerText = "Thank you! Your message has been received.";
        formMessage.style.color = "#273153";
      }
      contactForm.reset();
    });
  }

  // ===== MODAL LOGIC (THIS NOW WORKS) =====
document.querySelectorAll('.about-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  });
});

// CLOSE BUTTON
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').classList.remove('active');
  });
});

// CLICK OUTSIDE TO CLOSE
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// ESC KEY TO CLOSE
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach(modal => {
      modal.classList.remove('active');
    });
  }
});

  // SERVICES DROPDOWN (MOBILE TAP)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      toggle.parentElement.classList.toggle('open');
    }
  });
});


  // FOOTER YEAR
  const currentYear = document.getElementById('current-year');
  if(currentYear) currentYear.textContent = new Date().getFullYear();

  // HAMBURGER MENU
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(hamburger && navLinks){
    hamburger.addEventListener('click', function(){
      navLinks.classList.toggle('active');
    });
  }
});
