// Sidebar toggle
const toggle = document.querySelector(".mobile-nav-toggle");
const sidebar = document.querySelector(".sidebar");

toggle.onclick = () => {
    sidebar.classList.toggle("active");
};

// Smooth scroll highlight
const links = document.querySelectorAll(".nav-menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Language toggle (basic version)
document.getElementById("enBtn").onclick = () => {
    alert("English version active");
};

document.getElementById("frBtn").onclick = () => {
    alert("Version française bientôt disponible");
};

// Contact form
document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
});
