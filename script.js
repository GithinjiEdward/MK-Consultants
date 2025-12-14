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



document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("page-loader");
  const progressBar = document.getElementById("loader-progress");
  const percentText = document.getElementById("loader-percent");

  // Safety check
  if (!loader || !progressBar || !percentText) return;

  let progress = 0;

  const fakeProgress = setInterval(() => {
    if (progress < 90) {
      progress += 5;
      progressBar.style.width = progress + "%";
      percentText.textContent = progress + "%";
    }
  }, 150);

  window.addEventListener("load", () => {
    clearInterval(fakeProgress);

    progressBar.style.width = "100%";
    percentText.textContent = "100%";

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";

      setTimeout(() => {
        loader.remove();
      }, 300);
    }, 300);
  });
});

setTimeout(() => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.remove();
}, 3000);

  

  

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
