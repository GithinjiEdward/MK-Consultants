// ---------------------------------------------------------
// Smooth scroll helper
// ---------------------------------------------------------
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToSection(btn.dataset.scroll);
    });
});


// ---------------------------------------------------------
// DOM READY
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

/* -----------------------------------------
       Mobile hamburger menu
----------------------------------------- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close menu after clicking a link (mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }

    /* -----------------------------------------
       Contact form handler
    ----------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (formMessage) {
                formMessage.textContent =
                    "Thank you! Your message has been received. We will be in touch soon.";
                formMessage.style.color = "#273153";
            }

            contactForm.reset();
        });
    }

/* -----------------------------------------
       Footer year
----------------------------------------- */
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
