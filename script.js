const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-exp": "Experience",
        "nav-projects": "Projects",
        "nav-services": "Services",
        "nav-community": "Community",
        "nav-contact": "Contact",
        "hero-badge": "Software Developer",
        "hero-tagline": "Full-Stack MERN Specialist | Problem Solver",
        "btn-hire": "Hire Me",
        "btn-cv": "Download CV",
        "about-title": "About Me",
        "about-desc": "I am a Full-Stack Developer specialized in the MERN stack and Django. With a focus on Business Intelligence and digital infrastructure, I bridge the gap between complex data and user-friendly interfaces.",
        "exp-title": "Professional Experience",
        "proj-title": "Featured Projects",
        "serv-title": "Services",
        "cont-title": "Get In Touch",
        "btn-send": "Send Message"
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-exp": "Expérience",
        "nav-projects": "Projets",
        "nav-services": "Services",
        "nav-community": "Communauté",
        "nav-contact": "Contact",
        "hero-badge": "Développeur Logiciel",
        "hero-tagline": "Spécialiste Full-Stack MERN | Résolveur de Problèmes",
        "btn-hire": "Engagez-moi",
        "btn-cv": "Télécharger CV",
        "about-title": "À Propos de Moi",
        "about-desc": "Je suis un développeur Full-Stack spécialisée dans la pile MERN et Django. Axée sur la Business Intelligence et l'infrastructure numérique.",
        "exp-title": "Expérience Professionnelle",
        "proj-title": "Projets Vedettes",
        "serv-title": "Mes Services",
        "cont-title": "Contactez-moi",
        "btn-send": "Envoyer le Message"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.innerText = translations[lang][key] || elem.innerText;
    });

    // Update buttons
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent to Nourhene.');
    // Here you would typically use EmailJS or a backend to send the actual email
});
