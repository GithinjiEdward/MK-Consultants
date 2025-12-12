// ---------------------------------------------------------
// GLOBAL: Smooth scroll helper for onclick buttons
// ---------------------------------------------------------
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// ---------------------------------------------------------
// MAIN DOM CONTENT LOADED
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------
    // 1. SMOOTH SCROLLING for navbar anchor links
    // -----------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
});

    document.querySelectorAll('[data-scroll]').forEach(btn => {
        btn.addEventListener('click', e => {
            const sectionId = btn.getAttribute('data-scroll');
            scrollToSection(sectionId);
        });
    });
    // -----------------------------------------------------
    // 2. CONTACT FORM HANDLER
    // -----------------------------------------------------
   const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            // Basic validation (browser validation handles most)
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            if (!name || !email || !message) {
                if (formMessage) {
                    formMessage.textContent = "Please fill in all required fields.";
                    formMessage.style.color = "#c0392b"; // red
                }
                return;
            }

            // Display success message
            if (formMessage) {
                formMessage.textContent =
                    "Thank you! Your message has been received. We will be in touch soon.";
                formMessage.style.color = "#273153"; // primary color
            } else {
                alert("Thank you! Your message has been received. We will be in touch soon.");
            }

            contactForm.reset();
        });
    }

    // -----------------------------------------------------
    // 3. UPDATE FOOTER YEAR
    // -----------------------------------------------------
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // -------------------------------------------------------
    // 4. OPTIONAL: Add simple fade-in animation for sections
    // -------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('pre-fade'); // initial state
        observer.observe(section);
    });

});
