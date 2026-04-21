// MOBILE NAV
const toggle = document.querySelector(".mobile-nav-toggle");
const sidebar = document.querySelector(".sidebar");

toggle.onclick = () => {
    sidebar.classList.toggle("active");
};

// ACTIVE LINK SCROLL
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-menu a");

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop;
        if (scrollY >= top - 100) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
};

// CONTACT FORM
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully 🚀");
});

// LANGUAGE SWITCH (basic demo)
document.getElementById("lang-fr").onclick = () => {
    alert("French version coming soon 🇫🇷");
};
