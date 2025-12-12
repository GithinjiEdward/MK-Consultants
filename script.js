function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
   
    // ------------------------------------------------------------------
    // 1. SMOOTH SCROLLING (For navigation links and any 'a[href="#..."]' link)
    // ------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // ------------------------------------------------------------------
    // 2. CONTACT FORM HANDLER
    // ------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from reloading the page
            
            // Your original feedback message, slightly updated for clarity
            const formMessage = document.getElementById("formMessage");
            if (formMessage) {
                formMessage.innerText = "Thank you! Your message has been received. We will be in touch soon.";
                formMessage.style.color = "#273153"; // Use your Navy color for feedback
            } else {
                alert("Thank you! Your message has been received.");
            }
            
            contactForm.reset(); // Clear the form fields
        });
    }
});

    // ------------------------------------------------------------------
    // 3. FOOTER HANDLER
    // ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // ... existing content loader, smooth scroll, form handler ...

    // Footer: Set the current year
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
