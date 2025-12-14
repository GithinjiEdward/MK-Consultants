// Smooth scroll helper
function scrollToSection(sectionId) { 
  const target = document.getElementById(sectionId); 
  if (target) target.scrollIntoView({ behavior: 'smooth' }); 
}

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navbar links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId && document.querySelector(targetId))
        document.querySelector(targetId).scrollIntoView({behavior:'smooth'});
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");
  const progressBar = document.getElementById("loader-progress");
  const percentText = document.getElementById("loader-percent");

  let progress = 0;

  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.floor(Math.random() * 8) + 2;
      progressBar.style.width = progress + "%";
      percentText.textContent = progress + "%";
    }
  }, 200);

  window.addEventListener("load", () => {
    clearInterval(interval);
    progressBar.style.width = "100%";
    percentText.textContent = "100%";

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => loader.remove(), 400);
    }, 300);
  });
});


  

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formMessage = document.getElementById("formMessage");
      if(formMessage){
        formMessage.innerText = "Thank you! Your message has been received. We will be in touch soon.";
        formMessage.style.color = "#273153";
      } else {
        alert("Thank you! Your message has been received.");
      }
      contactForm.reset();
    });
  }

  // Footer year
  const currentYear = document.getElementById('current-year');
  if(currentYear) currentYear.textContent = new Date().getFullYear();

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(hamburger && navLinks){
    hamburger.addEventListener('click', function(){
      navLinks.classList.toggle('active');
    });
  }
});
