// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// DEMO ORDER BUTTONS
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const foodName = button.dataset.food;

        const message = `Hello CHASE Digital Solutions! I viewed the Taste Haven restaurant demo and would like a website like this for my business. I was interested in the ${foodName} menu feature.`;

        const whatsappURL = `https://wa.me/2348143514098?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
});

// CONTACT BUTTON
const contactOrder = document.getElementById("contactOrder");

if (contactOrder) {
    const message = "Hello CHASE Digital Solutions! I viewed your Taste Haven restaurant demo and would like a website for my business.";

    contactOrder.href = `https://wa.me/2348143514098?text=${encodeURIComponent(message)}`;
    contactOrder.target = "_blank";
}

// AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
                                               }
