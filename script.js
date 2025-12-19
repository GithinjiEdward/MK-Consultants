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

  //ANOTHER TEST
document.addEventListener("DOMContentLoaded", () => {
  const openMission = document.getElementById("openMission");
  const modal = document.getElementById("missionModal");
  const closeBtn = document.getElementById("closeMission");

  openMission.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
  
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
