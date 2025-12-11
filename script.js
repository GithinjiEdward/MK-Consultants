// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Simple form handler (front-end only)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Thank you! Your message has been received.";
});
