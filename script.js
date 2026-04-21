document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const translatableElements = document.querySelectorAll('[data-en]');
    let currentLang = 'en';

    // Language Toggle Logic
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        langBtn.innerText = currentLang === 'en' ? 'FR' : 'EN';

        translatableElements.forEach(el => {
            el.innerText = el.getAttribute(`data-${currentLang}`);
        });
    });

    // Smooth Scrolling & Active Link
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Simple Form Submission Alert
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you, Nourhene will get back to you soon!');
    });
});
