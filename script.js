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
  const openMission = document.getElementById("openMission");
  const missionModal = document.getElementById("missionModal");
  const closeMission = document.getElementById("closeMission");

  if (openMission && missionModal && closeMission) {
    openMission.addEventListener("click", () => {
      missionModal.classList.add("active");
    });

    closeMission.addEventListener("click", () => {
      missionModal.classList.remove("active");
    });

    missionModal.addEventListener("click", (e) => {
      if (e.target === missionModal) {
        missionModal.classList.remove("active");
      }
    });
  }

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
