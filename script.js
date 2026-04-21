// Language toggle (basic)
function setLang(lang) {
    alert("Language switched to " + lang);
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
